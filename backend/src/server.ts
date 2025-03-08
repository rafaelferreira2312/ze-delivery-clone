
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import productRoutes from './routes/productRoutes';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.DATABASE_URL as string)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error('Failed to connect to MongoDB:', err));
