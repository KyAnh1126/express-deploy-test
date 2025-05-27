import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({ data: 'Welcome to my Page' });
})

app.listen(3000, 'localhost', () => {
    console.log('server is running at port 3000');
})
