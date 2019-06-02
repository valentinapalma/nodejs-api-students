const express = require("express");
const cors = require("cors");

const routes = require('./routes');
const db = require('./models');

const app = express();

// Lyssnar på default port 2000 eller valfri
const port = process.env.PORT || 2000;

//säkerhet ????
app.use(cors());

// Middleware som parsar body till req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    req.models = db.models
    next()
});

// Lyssnar på routes efter localhost:2000/
app.use('/', routes);

// Kopplar upp till databasen först innan applikationen startar
db.connectDb().then(() => {
    const listener = app.listen(port, () => {
        console.info(`Server is listening on port ${listener.address().port}`);
    })
});