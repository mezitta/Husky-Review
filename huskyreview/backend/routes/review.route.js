const axios = require('axios').default;
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

// TODO: Retrieve class_name from Banweb by class_id?
reviewRoute.route('/add-review').post(async (req, res, next) => {
    console.log(req.body)
    const postBody = new URLSearchParams()
    postBody.append('session_id', req.body.captcheck_session_code)
    postBody.append('answer_id', req.body.captcheck_selected_answer)
    postBody.append('action', "verify")
    console.log(postBody)
    const captcha = await axios.post('https://captcheck.netsyms.com/api.php', postBody, {
        'headers': {
            'Content-Type':'application/x-www-form-urlencoded'
        }
    }).catch(function (error) {
        console.log(error);
    })
    console.log(captcha.data)
    if (captcha.data.result) {
        ReviewModel.create(req.body, (error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    } else {
        res.json(captcha.data.msg) // Session invalid.
    }
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
