const printProgramInfo = require('./info');
const datetime = require('./datetime');

setTimeout(() => {
  console.log('Hello World!');
}, 3000);

printProgramInfo();
console.log('当前时间', datetime.getCurrentTime());
