/**
 * @Desc: the entry of the project
 * @Date: 2018-06-13
 */

// resolve commands and params
const program = require('commander');
// set font style
const chalk = require('chalk');
const file = require('./file');

/**
 * Usage.
 */

program
  .usage('init [project-name]')
  .version('1.0.0', '-v, --version')
  .command('init <name>')
  .action(name => {
    console.log('generate project start');
    file.generate(name);
    console.log('generate project success');
    let dstPath = file.getDstPath(name);
    console.log(`project path: ${dstPath}`);
  });

/**
 * Help.
 */
program.on('--help', () => {
  console.log()
  console.log('  Examples:')
  console.log()
  console.log(chalk.green('    # create a new project with an official template'))
  console.log('    $ koa2-cli init my-project')
  console.log()
  console.log(chalk.gray('    # todo: create a new project straight from a github template'))
  console.log(chalk.gray('    $ koa2 init username/repo my-project'))
  console.log()
})

/**
 * Help.
 */
function help () {
  if (process.argv.length < 4) {
    return program.help()
  }
}
help()
program.parse(process.argv);

