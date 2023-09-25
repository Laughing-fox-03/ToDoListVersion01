//jshint esversion:6

const  express = require("express");
const  bodyParser = require("body-parser");

const app = express();
const date = require(__dirname  + "/date.js");

let items = ["participate and win hackathons","make resume worthy projects", "after completing mern development make the e-commerce app for the udemy course you downloaded"];
let workItems  = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    let day = date.getDate();
    res.render("list.ejs" , {listTitle:day, newListItem : items});
});

app.post("/",function(req, res){
    let item = req.body.newItem;

    if(req.body.list === "work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
    
    
})

app.get("/work", function(req, res){
    res.render("list.ejs", {listTitle : "work List", newListItem : workItems});
})

app.post("/work", function(req,res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.get("/about", function(req, res){
    res.render("about");
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
});