const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session");

const logger = require("morgan");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(flash())
app.use(express.static("public"));
app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.get('/', function(req, res){
    res.redirect('/todo');
 });

app.use(routes);

log.Fatal(http.ListenAndServe(":" + os.Getenv("PORT"), router))
});