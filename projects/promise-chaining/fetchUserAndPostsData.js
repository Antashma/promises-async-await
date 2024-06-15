function fetchUserDataAndPosts(userId) {
    const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

    return new Promise((resolve, reject) => {
        fetch(userUrl)
            .then(response => {
                if (!response.ok) throw new Error(`❗There was an issue fetching the user with id ${userId}❗`);
                return response.json();
            })
            .then(userData => {
                return fetch(postsUrl)
                    .then(response => {
                        if (!response.ok) throw new Error(`❗There was an issue fetching the posts for user with ${userId}❗`);
                        return response.json();
                    })
                    .then(userPosts => {
                       resolve({user: userData, posts: userPosts });
                    })
            })
            .catch(error => {
               reject(new Error(`There was an issue with the fetch request...`, error))
            })
        
        
    })
}

