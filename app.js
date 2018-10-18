var express = require('express'); 
var app = express(); 
var port = 8080;

app.set("view engine", "ejs"); 

app.get("/", function(req, res) {
   res.render("landing-page");  
});
 
app.listen(port, () => console.log(`Server started on host ${port}!`));