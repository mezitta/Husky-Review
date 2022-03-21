const express = require('express');
const { nextTick } = require('vue');
const reviewRoute = express.Router();

let ReviewModel = require('../models/review');

// TODO: Filter reviews by query string.
reviewRoute.route('/').get((req, res) => {
    ReviewModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// TODO: Require not-null fields.
reviewRoute.route('/add-review').post((req, res) => {
    ReviewModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// TODO: Prevent updating anything beyond like/dislike tallies.
reviewRoute.route('/update-review/:id').patch((req, res) => {
    ReviewModel.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// TODO: Remove? Client cannot be trusted to moderate.
reviewRoute.route('/delete-review/:id').delete((req, res, next) => {
    ReviewModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = reviewRoute;
