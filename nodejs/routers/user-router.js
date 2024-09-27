const express = require('express');
const connection = require('../db');
const { insertQuery } = require('../db/query');
const router = express.Router();

router.post("/add",async(req,res)=>{
    const {userName,email,password} = req.body;

    if(!userName || !email || !password){
        res.status(401).json({err:"all fieldes are required"})
    }
   const result = await connection.query(insertQuery, [userName, email, password]);

   res.status(201).json({
    message: 'User created successfully',
    user: result.rows[0] // Return the inserted user
});
})
router.get("/:id",(req,res)=>{
    const {id} = req.params;

    res.status(200).json({
        userId:id
    })
})


module.exports = router;