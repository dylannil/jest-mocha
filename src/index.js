/**
 * Jest runner Mocha
 */

const Mocha = require('mocha');

module.exports = function(globalConfig, config, environment, runtime, testPath) {

  runtime.requireModule(testPath);

  return new Promise(function(resolve, reject) {
    const mocha = new Mocha({
      ui: 'bdd',
      reporter: require.resolve('./reporter'),
      useInlineDiffs: true,
      globals: {
        it: () => {}
      }
    });

    // environment.global.it = () => {};

    mocha.addFile(testPath);

    const runner = mocha.run(function(failure) {
      // process.on('exit', function() {
      //   const stats = runner.stats;
      //   resolve({
      //     numPassingTests: stats.passes,
      //     numFailingTests: stats.failures,
      //     numPendingTests: stats.pending,
      //     testResults: [
      //       {}
      //     ],
      //     snapshot: {}
      //   });
      // });
      // setTimeout(() => process.exit(failure), 1000);
      setTimeout(() => {
      const stats = runner.stats;
      resolve({
        numPassingTests: stats.passes,
        numFailingTests: stats.failures,
        numPendingTests: stats.pending,
        testResults: [
          {}
        ],
        snapshot: {}
      });
      }, 0);
    });
    runner.on('start', () => {
      // console.log('mocha started');
    });
    runner.on('end', () => {
      // console.log('mocha finished');
    });
    runner.on('suite', suite => {
      // console.log(`suite ${suite.title} started`);
    });
    runner.on('suite end', suite => {
      // console.log(`suite ${suite.title} finished`);
    });
    runner.on('test', test => {
      // console.log(`test ${test.title} started`);
    })
    runner.on('test end', test => {
      // console.log(`test ${test.title} finished`);
    });
    runner.on('hook', hook => {
      // console.log(`hook ${hook.title} started`);
    });
    runner.on('hook end', hook => {
      // console.log(`hook ${hook.title} finished`);
    });
    runner.on('pass', test => {
      // console.log(`test ${test.title} passed`);
    });
    runner.on('fail', (test, err) => {
      // console.log(`test ${test.title} failed`);
    });
    runner.on('pending', test => {
      // console.log(`test ${test.title} pended`);
    });
  });
}
