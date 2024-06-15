const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users';
const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';
const COMMENTS_API_URL = 'https://jsonplaceholder.typicode.com/comments' ;


const randomDelay = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error(`Failed to fetch from ${url}`)
                return res.json();
            })
            .then(data => {
                setTimeout(() => resolve(data), randomDelay(100, 500))
            })
            .catch(err => {
                console.error(err);
                reject(err);
            })
    })
}

function processData(data) {
    return new Promise((resolve, reject) => {
        const result = {processed_on: new Date(), array_length: data.length}
        setTimeout(() => {
            resolve(result);
            reject(new Error(`Processing error`));
        }, randomDelay(100, 300))
    })
}

function logResults(processedData) {
    console.log(processedData)
}

let isBusy = false;
function performOperations(urls) {
    if (isBusy) return;
    isBusy = true;

    const toProcess = [...urls]
    // while(toProcess.length) {
    //     const currentUrl = toProcess.shift();
    //     await fetchData(currentUrl)
    //         .then(data => processData(data))
    //         .then(processed => logResults(processed))
    //         .catch(err => console.error(err))
    // }

    const runOperation = async () => {
        if (!toProcess.length) {
            isBusy = false;
            return;
        } 
        const currentUrl = toProcess.shift();

        await fetchData(currentUrl)
            .then(data => processData(data))
            .then(processed => logResults(processed))
            .catch(err => console.error(err))
        
        runOperation();
    }

    runOperation();
    // isBusy = false;
}

performOperations([USERS_API_URL, POSTS_API_URL, COMMENTS_API_URL])