const fs = require('fs');
const { promisify } = require('util');

//wrapping a promise around fs.readfile
function readFileReturnsPromise(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (error, data) => {
            if (error) reject(error);
            else resolve(data)
        }) 
    })
    
}

//creating a promisify function
const makeAPromise = (fn) => {
    return (...args) => {
        return new Promise((resolve, reject) => {
            function callback(error, ...data) {
                if (error) reject(error);
                else resolve(data.length === 1 ? data[0] : data);
            }

            args.push(callback);
            fn.call(this, ...args);
        })
    }
}

//using util.promise
const promisifiedReadFile = promisify(fs.readFile)


const promisedReadFile = makeAPromise(fs.readFile)

promisedReadFile(filePathStr, "utf8")
    .then(data => console.log(data))
    .catch(error => console.error(error))