const newsRouter = require('./news');
const siteRouter = require('./site');

//Luôn nhớ đặt route theo thứ tự từ dài đến ngắn
const route = (app) => {
  app.use('/news', newsRouter);
  app.use('/', siteRouter);
};

module.exports = route;
