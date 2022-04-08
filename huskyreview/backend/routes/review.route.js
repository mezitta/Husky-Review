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
    if (req.body.captcheck_selected_answer === null) {
        // Prevent spurious request if no answer is selected.
        res.status(400).send('Captcha not answered.');
    } else {
        // Captcheck API expects urlencoded instead of json.
        const postBody = new URLSearchParams()
        postBody.append('session_id', req.body.captcheck_session_code)
        postBody.append('answer_id', req.body.captcheck_selected_answer)
        postBody.append('action', "verify")
        // TODO: Self-host PHP backend and use { destination } for URL.
        const captcha = await axios.post('https://captcheck.netsyms.com/api.php', postBody, {
            'headers': {
                'Content-Type':'application/x-www-form-urlencoded'
            }
        }).catch(function (error) {
            console.log(error);
        })
        if (captcha.data.result) {
            ReviewModel.create(req.body, (error, data) => {
                if (error) {
                    return next(error)
                } else {
                    res.json(data)
                }
            })
        } else {
            res.status(400).json(captcha.data.msg) // Session invalid.
        }
    }
})

module.exports = reviewRoute;
