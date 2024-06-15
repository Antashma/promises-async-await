const getSumAsync = (num1, num2, callback) => {
 
    if (!num1 || !num2) {
      return callback(new Error("Missing arguments"), null);
    }
    return callback(null, num1 + num2);
}

// getSumAsync(1, 1, (err, result) => {
//     if (err){
//       doSomethingWithError(err)
//     }else {
//       console.log(result) // 2
//     }
// })

// let getSumPromise = function(num1, num2) {
//     return new Promise(function(resolve, reject) {
//         getSumAsync(num1, num2, (err, result) => {
//             if (err) reject(err);
//             else resolve(result);
//         })
//     })
// }

// getSumPromise(4, 2)
//     .then(res => console.log(res))
//     .catch(err => console.error(err))

// const promisify = (fn) => {
//     return (...args) => {
//         return new Promise(function(resolve, reject) {
//             function callback(err, result) {
//                 if (err) reject(err);
//                 else resolve(result);
//             }

//             args.push(callback);
//             fn.call(this, ...args);
//         })
//     }
// }


const promisifyAdv = (fn) => {
    return (...args) => {
        return new Promise(function(resolve, reject) {
            function callback(err, ...result) {
                if (err) reject(err);
                else resolve(result.length === 1 ? result[0] : result);
            }

            args.push(callback);
            fn.call(this, ...args);
        })
    }
}

const getSumAsyncAlt = (num1, num2, callback) => {
 
    if (!num1 || !num2) {
      return callback(new Error("Missing arguments"), null);
    }
    const sum = num1 + num2;
    const message = `Sum of arguments is ${sum}.`
    return callback(null, sum, message);
}

let getSumPromisified = promisifyAdv(getSumAsyncAlt)

getSumPromisified(2, 8)
    .then(res => console.log(res))
    .catch(err => console.error(err))