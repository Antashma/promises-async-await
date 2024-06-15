const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users';
const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts?userId=';
const COMMENTS_API_URL = 'https://jsonplaceholder.typicode.com/comments?postId=';

async function fetchUserData(userId) {

    const loadJSON = async (url, urlName) => {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${urlName}`)
        }
        return response.json();
    } 

    try {
        const user = await loadJSON(`${USERS_API_URL}/${userId}`,  "user")
        console.log('User:', user);

        const posts = await loadJSON(`${POSTS_API_URL}${userId}`, "posts")
        console.log('Posts:', posts);

        const commentPromises = posts.map(post => {
            return loadJSON(`${COMMENTS_API_URL}${post.id}`, `comments for post with id: ${post.id}`);
        })

        const commentsArray = await Promise.all(commentPromises)
        console.log('Comments:', commentsArray);
   
    } catch(error)  {
        console.error(error.message);

    } finally {
        console.log('Finished fetching data');
    
    }
}

fetchUserData(1);
