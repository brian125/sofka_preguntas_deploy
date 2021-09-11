const passport = require('passport');

exports.authenticateUser = passport.authenticate('local', {
    successRedirect: '/question1',
    failureRedirect: '/log-in',
    failureFlash: true
});

//user authenticated
exports.userAuthenticated = (req,res,next) => {
    if(req.isAuthenticated()) {
        return next();
    }

    return res.redirect('/log-in');
}