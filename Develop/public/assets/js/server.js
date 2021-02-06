const express = require('express');
const path = require('path');
const { title } = require('process');
const fs = require ("fs");

const app = express();
const PORT = process.env.port || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

require("./routing/html-routes") (app);
require("./routing/api-routes") (app);

app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
});