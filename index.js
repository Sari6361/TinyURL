import cors from "cors"
import express from 'express'  
import bodyParser from "body-parser";

import RedirectRouter from "./routers/redirectRouter.js";
import LinkRouter from "./routers/linksRouter.js";
import UserRouter from "./routers/usersRouter.js";
import connectDB from "./database.js";


connectDB();
const app = express()

app.use(express.static('public'))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.text());


app.use('/users', UserRouter);
app.use('/links', LinkRouter);
app.use('/', RedirectRouter);


app.listen(process.env.PORT, () => {
    console.log(`app listening on http://localhost:${process.env.PORT}`)
})