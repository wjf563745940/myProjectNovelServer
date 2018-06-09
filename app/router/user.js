module.exports = app => {
 app.post('/register',app.controller.user.register);
 app.post('/login',app.controller.user.login);
  app.post('/loginout',app.controller.user.loginout);

};