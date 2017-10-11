//Express
let express = require("express");
let app = express();
const path = require("path");

//Static Folder
app.use(express.static(__dirname + '/public/dist'));

//Body Parser: 它用于解析客户端请求的body中的内容,内部使用JSON编码处理,url编码处理以及对于文件的上传处理
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Morgan
let morgan = require("morgan");
app.use(morgan('dev'));

//Mongo Database
let mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/userSchema');
let UserSchema = new mongoose.Schema({
    username: { type: String, require: true },
    password: { type: String, require: true },
    editable: { type: Boolean, require: true }
})

UserSchema.methods.validPass = function(password) {

}
mongoose.model("User", UserSchema);
let User = mongoose.model("User");







//Routes
//Get Users
app.get("/users",(req, res, next) => {
    console.log("Server > GET '/users'");
    User.find({},(err, users) =>{
        return res.json(users);
    })
})
//Create User
app.post("/users",(req, res, next) => {
    console.log("Server > POST '/users' > user ", req.body);
    delete req.body._id
    User.create(req.body, (err, user) => {
        if (err) res.json(err)
        else return res.json(user)
    })
})
//Destroy User
app.delete("/users/:id", (req, res, next) => {
    console.log("Server > DELETE '/users/:id' > id", req.params.id);
    User.deleteOne({_id:req.params.id},(err, rawData)=>{
        if (err) res.json(err)
        else return res.json(true)
    })
})
//Update User
app.put("/users/:id", (req, res, next) => {
    console.log("Server > PUT '/users/:id' > id", req.params.id);
    console.log("Server > PUT '/users/:id' > user", req.body);    
    User.update({_id:req.params.id}, req.body, (err, rawData) => {
        if (err) res.json(err)
        else return res.json(true)
    })
})
//Login User
app.post("/users/authenticate", (req, res, next) => {
    User.findOne({username: req.body.username, password: req.body.password}, (err, user) => {
        if (err) res.json(err)
        else if (!user) {
            console.log("POST: no such user " + req.body.username + " " + req.body.password)
            //res.json({})
        }
        else return res.json(true)
    })
})


app.all("*",(req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
});

//Server Listening @ 27017
app.listen(27017, () => console.log("Server running at 27017"));