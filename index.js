import express from 'express';
import routes from './src/routes/routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const app = express();
const PORT = 4000;

// mongoose connect to mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/expressDemoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyParser connection
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
    res.send('Node and Express are running just fine');
});

app.listen(PORT, () => {
    console.log(`Your server is running on port: ${PORT}`);
});
