const Router = require('koa-router');
const router = new Router({ prefix: '' });
const controllers = require('../controllers/index');


/** 
 * handle error
 */
router.all('*', controllers.errorHandle);

/** 
 * demo: get company
 */
router.get('/company', controllers.getCompany);

module.exports = router;