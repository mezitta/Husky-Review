let express = require('express'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    database = require('./database'),
    bodyParser = require('body-parser'),
    createError = require('http-errors'),
    CourseModel = require('./models/course'),
    { getAllSections } = require('@mtucourses/scraper');

//Connect mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected")

    // Only scrape Banweb if no data is available locally.
    CourseModel.find({}).count(async (error, count) => {
        if (error) {
            console.log(error);
        } else if (count < 1) {
            const term = new Date();
            // Submit date equivalent to "last July".
            term.setFullYear(term.getFullYear() - 1, 7);

            const courses = await getAllSections(term);
            courses.forEach((course) => {
                CourseModel.create({
                    class_id: course.subject + course.crse,
                    title: course.title
                });
            });
        }
    });
},
error => {
    console.log("Database couldn't be connected to: " + error)
});

const reviewtoEndPoint = require('../backend/routes/review.route')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

//API
app.use('/api', reviewtoEndPoint)

//Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

//Find 404
app.use((req, res, next) => {
    next(createError(404));
})

//Error Handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
