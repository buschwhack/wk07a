const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

//start to listen for request on the following routes


app.get('/', ( req, res )=>{ 
    let username="John B";
    //res.sendFile(path.join(__dirname,'public/home.html'));
    res.render('home', { data_name: username } );

} );






//start the web server on prt 3000
app.listen(PORT, () => { 

    console.log(`server running on http://localhost:${PORT}`);

 } );