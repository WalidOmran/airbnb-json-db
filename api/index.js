const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}));
server.use(router);

// مهم جداً لـ Vercel
server.listen(3000, () => {
  console.log('JSON Server is running');
});

module.exports = server;
