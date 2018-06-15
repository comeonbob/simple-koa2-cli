/*
* @Desc:   models
* @Date:   2018-05-27
*/

const dac = require('./dac');

const imp = {
  getCompany: () => {
    const mockData = [
      {
        id: 1,
        name: 'ali',
        address: 'HZ'
      },
      {
        id: 2,
        name: 'tencent',
        address: 'SZ'
      },
      {
        id: 3,
        name: 'baidu',
        address: 'SZ'
      }
    ];
    return Promise.resolve(mockData);
    // let sql = `select *from gs_company;`;
    // return dac.do(sql);
  }
}

module.exports = imp;