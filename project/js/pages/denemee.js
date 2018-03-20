var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var LOCAL_STRATEGY_CONFIG = {
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
};

function _onLocalStrategyAuth(req, email, password, next) {
    User
        .findOne(or: [{email: email}, {username: email}])
.then(function (user) {
        if (!user) return next(null, null, {
            code: 'E_USER_NOT_FOUND',
            message: email + ' is not found',
            status: 401
        });

        if (!HashService.bcrypt.compareSync(password, user.password)) return next(null, null, {
            code: 'E_WRONG_PASSWORD',
            message: 'Password is wrong',
            status: 401
        });

        return next(null, user, {});
    })
        .catch(next);
}

passport.use(new LocalStrategy(LOCAL_STRATEGY_CONFIG), _onLocalStrategyAuth));