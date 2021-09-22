const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 9090;
require('./db/conn');
const Msg = require("./models/messege");
const { urlencoded } = require('express');
const bodyParser = require('body-parser');

const static_path = path.join(__dirname,'../public');
const partials_path = path.join(__dirname,'../templates/partials');
const views_path = path.join(__dirname,'../templates/views');
app.use(express.json());
app.use(urlencoded({extended:false}));

app.use(express.static(static_path));

app.set('view engine','hbs');
app.set('views',views_path);
hbs.registerPartials(partials_path);

app.get('',(req,res)=>{
    res.render('home');
})
app.post('/',(req,res)=>{
    try {
        const sendmsg = new Msg({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            text:req.body.text
        })
        const sent = sendmsg.save();
        res.status(201).render('home');
    } catch (error) {
        res.status(404).send(error)
    }
    
})

app.listen(port,()=>{
    console.log('listening at port '+port);
})
