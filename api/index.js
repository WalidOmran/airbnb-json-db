const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
// استخدام path.resolve بيضمن إن Vercel يوصل للملف في الـ Build
const router = jsonServer.router(path.resolve(__dirname, '../db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}));
server.use(router);

// مهم: في Vercel بنعمل export للسيرفر من غير ما ننادي listen يدوياً
module.exports = server;
