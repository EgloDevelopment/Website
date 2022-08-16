var express = require('express');
var router = express.Router();
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('', function(req, res, next) {
    res.render("home")
});

router.get('/about', function(req, res, next) {
    res.render("about")
});

router.get('/contact', function(req, res, next) {
    res.render("contact")
});

router.get('/pricing', function(req, res, next) {
    res.render("pricing")
});

router.get('/success', function(req, res, next) {
    res.render("success")
});

module.exports = router;