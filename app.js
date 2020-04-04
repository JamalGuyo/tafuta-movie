const express = require('express');
const app = express();

// setup 
app.set('view engine', 'ejs');

// routes
app.get('/', (req,res)=>{
    res.render('home');
})

// listener
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}...`))