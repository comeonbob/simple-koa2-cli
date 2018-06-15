/**
 * @Desc: generate project
 * @Date: 2018-06-13
 */

const path = require('path');
const fse = require('fs-extra');

const imp = {};

/**
 * generate project
 * @param {String} projectName
 */
imp.generate = async (projectName) => {
  try {
    // src path
    let srcPath = path.resolve(__dirname, '../template')
    let dstPath = getDstPath(projectName);
    // copy folder
    // console.log('srcPath', srcPath);
    // console.log('dstPath', dstPath);
    await fse.copy(srcPath, dstPath);
  } catch (err) {
    throw (err);
  }
};

/**
 * get project path
 * @param {String} projectName
 * @return {String}
 */
function getDstPath (projectName) {
  if (!projectName) {
    projectName = 'demo';
  }
  return path.join(process.cwd(), projectName);
};

module.exports = imp;