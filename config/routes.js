var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users');
var staticsController = require('../controllers/statics');

function authenticatedUser(req, res, next) {
    // If the user is authenticated, then we continue the execution
    if (req.isAuthenticated()) return next();

    // Otherwise the request is always redirected to the home page
    res.redirect('/');
}

router.route('/')
    .get(staticsController.home);

router.route('/signup')
    .get(usersController.getSignup)
    .post(usersController.postSignup);

router.route('/login')
    .get(usersController.getLogin)
    .post(usersController.postLogin);

router.route("/logout")
    .get(usersController.getLogout);

module.exports = router;