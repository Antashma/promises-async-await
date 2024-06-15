const endpointA = 'https://jsonplaceholder.typicode.com/users/1';
const endpointB = 'https://jsonplaceholder.typicode.com/posts?userId=1';


async function fetchUserDataAndPosts(userURL, postsURL) {
    const userData = await fetch(userURL)
        .then((res) => res.json())
        .then(data => data)
        .catch(err => console.error("Error fetching user...", err));

    const postsData = await fetch(postsURL)
        .then((res) => res.json())
        .then((data) => data)
        .catch(err => console.error("Error fetching posts...", err));

    return {user: userData, posts: postsData}
}

//test
fetchUserDataAndPosts(endpointA, endpointB)
    .then(result => console.log(result))
    .catch(err => console.error(err))

