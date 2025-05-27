import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000; 
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({ data: 'Welcome to my Page' });
})

app.listen(port, () => {
    console.log('server is running at port', port);
})
