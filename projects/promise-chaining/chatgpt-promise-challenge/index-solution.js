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

fetchUserDataAndPosts(2)
    .then(res => {
        console.log(res);
        const { name } = res.user;

        const resultContainer = document.querySelector("#result");

        const userTitle = document.createElement("h3");
        const postsContainer = document.createElement("div");

        userTitle.textContent = name;
        
        res.posts.forEach(post => {
            const div = document.createElement("div");
            const p = document.createElement("p");
            const h4 = document.createElement("h4");
            h4.textContent = post.title
            p.textContent =  post.body;
            div.appendChild(h4);
            div.appendChild(p);
            postsContainer.appendChild(div);
        })
        
        resultContainer.append(userTitle);
        resultContainer.append(postsContainer);

    })
    .catch(err => console.error(err))