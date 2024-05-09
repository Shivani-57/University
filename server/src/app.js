import express from 'express';
import cors from 'cors';
import userRoutes from './Routes/user.routes.js'

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/users',userRoutes)

export {app}