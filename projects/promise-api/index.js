const USER_API_URL = `https://jsonplaceholder.typicode.com/users/`
const POSTS_API_URL = `https://jsonplaceholder.typicode.com/posts?userId=`
const COMMENTS_API_URL = `https://jsonplaceholder.typicode.com/comments?postId=`

function getUserDataPromiseAll(id = 1) {
    
    return Promise.all([
        fetch(USER_API_URL).then(res => {
            if (!res.ok) throw new Error(`Error getting user data...`);
            return res.json();
        }), 
        fetch(POSTS_API_URL + id).then(res => {
            if (!res.ok) throw new Error(`Error getting posts data...`);
            return res.json();
        }), 
        fetch(COMMENTS_API_URL + id).then(res => {
            if (!res.ok) throw new Error(`Error getting comments data...`);
            return res.json();
        })
    ])
    .then(([user, posts, comments]) => {
        const data = {user, posts, comments}
        console.log(data);
        return data;
    })
    .catch(error => {
        alert(error);
        console.error(error);
    })
    
}

//getUserDataPromiseAll(5);

function getUserDataPromiseAllSettled(id = 1) {
    
    return Promise.allSettled([
        fetch(USER_API_URL + id).then(res => {
            if (!res.ok) throw new Error(`Error getting user data...`);
            return res.json();
        }), 
        fetch(POSTS_API_URL + id).then(res => {
            if (!res.ok) throw new Error(`Error getting posts data...`);
            return res.json();
        }), 
        fetch(COMMENTS_API_URL + id).then(res => {
            if (!res.ok) throw new Error(`Error getting comments data...`);
            return res.json();
        })
    ])
    .then(([user, posts, comments]) => {
        const data = { 
            userStatus: user.status === "fulfilled" ? user.value : `Error: ${user.reason.message}`,
            postsStatus: posts.status === "fulfilled" ? posts.value : `Error: ${posts.reason.message}`, 
            commentsStatus: comments.status === "fulfilled" ? comments.value : `Error: ${comments.reason.message}`
        }
        console.log(data);
        return data;
    })
    .catch(error => {
        alert(error);
        console.error(error);
    })
    
}

//getUserDataPromiseAllSettled(4);


function getUserDataPromiseAny(id = 1) {
    
    return Promise.any([
        fetch(USER_API_URL + id).then(res => {
            if (!res.ok) throw new Error(`Cannot fetch user data...`);
            return res.json();
        }), 
        fetch(POSTS_API_URL + id).then(res => {
            if (!res.ok) throw new Error(`Cannot fetch posts data...`);
            return res.json();
        }), 
        fetch(COMMENTS_API_URL + id).then(res => {
            if (!res.ok) throw new Error(`Cannot fetch comments data...`);
            return res.json();
        })
    ])
    .then(data => {
        console.log("First successful promise: ", data);
        return data;
    })
    .catch(error => {
        console.dir(error);
        alert(error.message);
        console.error(`Aggregate Error: ${error.message}, Errors---${error.errors}`);
    })
    
}

//getUserDataPromiseAny(5);


function getUserDataPromiseRace(id = 1) {
    
    return Promise.race([
        fetch(USER_API_URL + id).then(res => {
            if (!res.ok) throw new Error(`Cannot fetch user data...`);
            return res.json();
        }), 
        fetch(POSTS_API_URL + id).then(res => {
            if (!res.ok) throw new Error(`Cannot fetch posts data...`);
            return res.json();
        }), 
        fetch(COMMENTS_API_URL + id).then(res => {
            if (!res.ok) throw new Error(`Cannot fetch comments data...`);
            return res.json();
        })
    ])
    .then(data => {
        console.log("First promise to succeed: ", data);
        return data;
    })
    .catch(error => {
        console.dir(error);
        console.error(error.message);
        alert(error.message);
    })
    
}

//getUserDataPromiseRace(99);