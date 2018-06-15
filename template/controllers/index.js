/*
* @Desc:   controller
* @Date:   2018-05-27
*/

const model =  require('../models/index');

const imp = {};

/** 
 * handle error
 */
imp.errorHandle =  async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.error('system error', err.message || err);
    ctx.response.body = { code: errCode.system_err, msg: err.message || 'error' };
  }
};

/**
 * get company
 */
imp.getCompany = async (ctx, next) => {
  let data = await model.getCompany();
  ctx.response.body = { code: 0, data: data };
}

module.exports = imp;