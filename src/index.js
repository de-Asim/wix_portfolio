const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 9090;

const static_path = path.join(__dirname,'../public');
const partials_path = path.join(__dirname,'../templates/partials');
const views_path = path.join(__dirname,'../templates/views');

app.use(express.static(static_path));

app.set('view engine','hbs');
app.set('views',views_path);
hbs.registerPartials(partials_path);

app.get('',(req,res)=>{
    res.render('home');
})

app.listen(port,()=>{
    console.log('listening at port '+port);
})
