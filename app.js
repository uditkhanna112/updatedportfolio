var express= require('express')
var app= express();
var port= process.env.PORT;
app.use('/assets',express.static('assets'))

app.get('/',function(req,res){
    res.render('home.ejs')
}
);

app.listen(port || 4000);