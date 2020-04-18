const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");


router.get("/", (req,res) => {
    burger.all((data) => {
        const templateData = {
            burgers: data,
        };
        console.log(templateData);
        res.render("index", templateData);
    });
});

router.post("/api/burgers", (req,res) => {
    burger.create({
        burger_name : req.body.burger_name,
        devoured: req.body.devoured
    }, (result) => {
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id/devoured", (req,res) => {
    const condition = { id : req.params.id };
    const update = { devoured : req.body.value};

    cat.update(update, condition, (result) => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;

