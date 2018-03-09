To authenticate users

    -- npm install passport <strategy>

Eg : npm install passport passport-google-oauth20

```javascript
// Require Passport
const passport = require("passport");
//Require a Strategy
const GoogleStrategy = require("passport-google-oauth20");

//To use a Strategy
passport.use(new Strategy(), callback);

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID, //For redirecting
      clientSecret: keys.google.clientSecret,
      callbackURL: "/auth/google/redirect"
    },
    () => {}
  )
);
```

// TO establish a connection wth google API goto console.developer.google.com and setup a new project with API enabled

//Keep the clientID and clientSecret safe and add it to git ignore
module.exports = {
google : {
clientID : '524050954085-paubnc79kprg1cgmhe4re6gsdu5apd9g.apps.googleusercontent.com',
clientSecret: 'aeOKrOsgfs7cjVMFYVJU1qvt'
}
}

// Using passport in routes
auth.get('/google', passport.authenticate('google', {
scope: ['profile'] //What we want to retrieve from user Search google APi
}));

// require passportSetup in app.js module

// Handle the redirected link

//callback Route
auth.get('/google/redirect', (req,res) => {
res.send('you reached the callback URI ')
});
