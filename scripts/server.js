var express = require("express"),
    app = express(),
    path = require("path"),
    parentDir = path.resolve(__dirname, "..");

app.get("/", function(req, res) {

    res.sendFile(path.join(parentDir + "/index.html"));
});

app.use(express.static(parentDir));

app.listen(3000, function() {

    console.log("The web server is listening on port 3000!");
});