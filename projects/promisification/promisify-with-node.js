const { promisify } = require('util');
//run `node promisify-with-node.js in terminal`

const getSumAsync = (num1, num2, callback) => {
 
    if (!num1 || !num2) {
      return callback(new Error("Missing arguments"), null);
    }
    return callback(null, num1 + num2);
}

const getSumPromisified = promisify(getSumAsync)

getSumPromisified(4, 2)
    .then(res => console.log(res))
    .catch(err => console.error(err))

