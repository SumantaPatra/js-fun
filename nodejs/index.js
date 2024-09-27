const PORT = 80;
const express = require("express");
const app = express();
const userRouter = require("./routers/user-router.js");
const connection = require("./db/index.js");
const { userTableQuery } = require("./db/query.js");
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // For parsing JSON
app.use(bodyParser.urlencoded({ extended: true })); // For parsing URL-encoded data

app.use("/api/user",userRouter)


async function createUserTable() {
    try {
        await connection.query(userTableQuery)
        console.log('User table created or already exists');
    } catch (err) {
        console.error('Error creating user table:', err);
    }
}

try {
    app.listen(PORT,async()=>{
        console.log(`Server started on ${PORT}`)
        connection.connect().then(()=>console.log("db connected"))
        await createUserTable();
    })  
} catch (error) {
    console.log(error)
}

app.get("/",(req,res)=>{
    res.json("hello my app")
})