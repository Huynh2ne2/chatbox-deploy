import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './configs/viewEngine';
import webRoute from './routes/web';

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config view engine
viewEngine(app);

//config web route

webRoute(app);


let port = process.env.PORT || 8090;

app.listen(port, () => {
    console.log('App is running at the port: ' + port);
})




