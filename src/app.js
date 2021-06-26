const path = require('path');
const hbs = require('hbs');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, '../public');// static path
const templatePath = path.join(__dirname, '../templates/views');
const partialPath =  path.join(__dirname, '../templates/partials');


app.set('view engine', 'hbs');//set engine
app.set('views',templatePath);
hbs.registerPartials(partialPath);
app.use(express.static(staticPath));


app.get("",(req, res) => {
    res.render('index');
})

app.get("/about",(req, res) => {
    res.render('about');
})

app.get("/weather",(req, res) => {
    res.render('weather');
})

app.get("*",(req, res) => {
    res.render('404error',{
        errorMsg : "OOPS page not found",
    });
})


app.listen(port,()=>{
    console.log(`server start listening ${port} port`);
}) 