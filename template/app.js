const Koa = require('koa');
const app = new Koa();
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const config = require('./config/base');
const routes = require('./routes/index');

// set cors
app.use(cors( config.corsOption ));
// set request body
app.use(koaBody());
// set routes
app.use(routes.routes());
app.use(routes.allowedMethods());

// create server
app.listen(config.port, () => {
  console.log(`app is listening on ${config.port}`);
  console.log(`demo api: http://localhost:${config.port}/company`);
});