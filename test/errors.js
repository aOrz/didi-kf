const assert = require('assert');
const fs = require('fs');
const vm = require('vm');
const moduleObject = { exports: {} };
let exitCode;
vm.runInNewContext(fs.readFileSync(require.resolve('../src/log.js'), 'utf8'), {
  require: () => ({ setTheme: () => {}, red: value => value, info: value => value }),
  module: moduleObject,
  console: { log: () => {} },
  process: { exit: value => { exitCode = value; } }
});
moduleObject.exports.info('ok');
assert.strictEqual(exitCode, undefined);
moduleObject.exports.error('invalid input');
assert.strictEqual(exitCode, 1);
console.log('CLI error exit regression tests passed');
