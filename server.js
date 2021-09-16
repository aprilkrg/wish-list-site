const express = require("express");
const app = express();
const router = express.Router();
const methodOverride = require("method-override");

const listDb = require("./seed");

const PORT = 4000;

app.set("view engine", "ejs");

app.listen(PORT, function() {
    console.log(`Server is live on ${PORT}`)
});

app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));

app.get("/", function(req, res) {
    console.log("on home page", listDb)
    const context = {
        list: listDb
    };
    res.render("home", context)
})
