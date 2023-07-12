import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// local imports
import postRoutes from './routes/posts.js'


dotenv.config();

const port = process.env.PORT || 3000;
const CONNECTION_URL = process.env.CONNECTION_URL;

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(port, () => console.log(`app is listining on port ${port}`)))
    .catch((error) => console.log(error.message))

// mongoose.set('useFindAndModify', false);

