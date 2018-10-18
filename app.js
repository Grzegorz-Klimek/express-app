var express = require('express'); 
var app = express(); 
var port = 8080;

app.set("view engine", "ejs"); 

app.get("/", function(req, res) {
   res.render("landing-page");   
});

app.get("/museums", function(req, res) {
    var museums = [
        {name: 'Muzeum Powstania Warszawskiego', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Wie%C5%BCa_w_Muzeum_Powstania_Warszawskiego_-_panoramio.jpg'},
        {name: 'Muzeum Pałacu Króla Jana III w Wilanowie', image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Muzeum_Pa%C5%82acu_Kr%C3%B3la_Jana_III_w_Wilanowie_-_panoramio_-_Mister_No.jpg'},
        {name: 'Areszt Śledczy Gestapo na Al. Szucha', image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Mauzoleum_Walki_i_M%C4%99cze%C5%84stwa_al._Szucha_06.JPG'}
    ];
    res.render('museums', {museums: museums}); 
 });
 
app.listen(port, () => console.log(`Server started on host ${port}!`));