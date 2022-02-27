const express = require('express');
const { nextTick } = require('vue');
const testRoute = express.Router();

let TestModel = require('../models/test');

testRoute.route('/').get((req, res) => {
    TestModel.find((error, data) => {
        if (error) {
            return next(error)
        }else {
            res.json(data)
        }
    })
})

testRoute.route('/add-thing').post((req, res) => {
    TestModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        }else {
            res.json(data)
        }
    })
})

testRoute.route('/delete-thing/:id').delete((req, res, next) => {
    TestModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        }else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = testRoute;