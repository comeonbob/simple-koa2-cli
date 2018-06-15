/**
 * @Desc: base config
 * @Date: 2018-06-14
 */
const config = {
  // database connect info
  dbInfo: {
    dbHost: '',
    dbUser: '',
    dbPort: '',
    dbPWD: '',
    dbName: ''
  },
  // server port
  port: 9000,
  // cors opiton
  corsOption: {
    origin: (ctx) => {
      let allowedOrigin = ['http://localhost:9000'];
      let origin = ctx.header.origin;
      if (allowedOrigin.includes(origin)) {
        return origin;
      }
      return false;
    },
    allowMethods: ['GET,HEAD,PUT,PATCH,POST,DELETE'],
    credentials: true
  }
};

module.exports = config;
