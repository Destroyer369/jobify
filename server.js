import express from 'express';
dotenv.config();
const app = express();
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import { nanoid } from 'nanoid';

let jobs = [
    { id: nanoid(), company: 'apple', position: 'front-end' },
    { id: nanoid(), company: 'google', position: 'back-end' },
]

try {
    const response = await fetch('https://www.course-api.com/react-useReducer-cart-project')
    const cartData = await response.json()
    console.log(cartData)
} catch (err) {
    console.log(err)
}

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('def'));
}


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/', (req, res) => {
    console.log(req);
    res.json({ message: 'data received', data: req.body })
});

app.get('/api/v1/jobs', (req, res) => {
    res.status(200).json({ jobs })
})

const port = process.env.PORT || 5100

app.listen(5100, () => {
    console.log(`server running on PORT ${port}..`);
});