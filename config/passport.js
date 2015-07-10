var InstagramStrategy = require('passport-instagram').Strategy;

var INSTAGRAM_CLIENT_ID = "a1cf656cf27d40fe967f1af82daec155"
var INSTAGRAM_CLIENT_SECRET = "2712ba565fdb4f61a494f337a8ffe64f";


module.exports = function(passport) {

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    // used to deserialize the user
    passport.deserializeUser(function(obj, done) {
        done(null, obj);
    });
    
    
    
    // Use the InstagramStrategy within Passport.
    //   Strategies in Passport require a `verify` function, which accept
    //   credentials (in this case, an accessToken, refreshToken, and Instagram
    //   profile), and invoke a callback with a user object.
    passport.use(new InstagramStrategy({
        clientID: INSTAGRAM_CLIENT_ID,
        clientSecret: INSTAGRAM_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/instagram/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        // asynchronous verification, for effect...
        process.nextTick(function () {
      
          // To keep the example simple, the user's Instagram profile is returned to
          // represent the logged-in user.  In a typical application, you would want
          // to associate the Instagram account with a user record in your database,
          // and return that user instead.
          return done(null, profile);
        });
      }
    ));
    

};