'use strict';
  
module.exports = app => {
	const admin = app.role.can('admin');
  app.get('/',app.controller.home.index);
  app.get('/startCrawler',app.controller.home.startCrawler);
  app.get('/novelContentById',app.controller.home.getNovelContentById);
app.get('/getChapters',app.controller.home.getChapters);
app.get('/downloadNovelContentById',app.controller.home.downloadNovelContentById);
// app.get('/getNovelById',app.controller.home.downloadNovelContentById);
  require('./router/searchNovel')(app);
  require('./router/user')(app);
};
