import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.post('/api/register', async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        const user = await prisma.userRegistration.create({
            data: { name, email, phone },
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
});

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});
