module.exports = app => {
 app.get('/getNovelByName',app.controller.searchNovel.getNovelByName);
  app.get('/addNovel',app.controller.searchNovel.addNovel);
};