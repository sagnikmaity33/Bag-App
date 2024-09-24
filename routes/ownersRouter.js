const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model')

router.get('/', function(req, res){
    res.send("Hey its working!!")
})


if (process.env.NODE_ENV === "development") {
    router.post("/create", async function(req, res){
        let owners = await ownerModel.find();
        if(owners.length > 0){
            return res .status(504)
            .send("You don't have permission to create")
        }

        let { fullname, email, password} = req.body;

        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password
        });
        res.status(201).send(createdOwner)
    })
}

// router.get("/admin", function(req, res){
//     res.render("createproducts");

// });

router.get("/admin", function(req, res){
    let success = req.flash('success');  // Or define success as empty string/array
    res.render("createproducts", { success });
});

module.exports = router;