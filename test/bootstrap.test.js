var Sails = require('sails/lib/app'),
  sailsInstance = new Sails(),
  sails;

before(function(done) {
    this.timeout(15000);

  sailsInstance.lift({
    // configuration for testing purposes
  }, function(err, server) {
    sails = server;
    if (err) return done(err);
    // here you can load fixtures, etc.
    done(err, sails);
  });
});

after(function(done) {
  // here you can clear fixtures, etc.
    this.timeout(15000);
  
  sails.lower(done);
});