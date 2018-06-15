/**
 * @Desc: generate project
 * @Date: 2018-06-13
 */

const path = require('path');
const fse = require('fs-extra');

const imp = {};

/**
 * get project path
 * @param {String} projectName
 * @return {String}
 */
imp.getDstPath = (projectName) => {
  if (!projectName) {
    projectName = 'demo';
  }
  return path.join(process.cwd(), projectName);
};

/**
 * generate project
 * @param {String} projectName
 */
imp.generate = async (projectName) => {
  try {
    // src path
    let srcPath = path.resolve(__dirname, '../template')
    let dstPath = imp.getDstPath(projectName);
    // copy folder
    await fse.copy(srcPath, dstPath);
  } catch (err) {
    throw (err);
  }
};

module.exports = imp;