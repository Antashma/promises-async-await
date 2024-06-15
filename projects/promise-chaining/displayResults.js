function displayResults({user, posts}) {
        const { name } = user;

        const resultContainer = document.querySelector("#result");

        const userTitle = document.createElement("h3");
        const postsContainer = document.createElement("div");

        userTitle.textContent = name;
        
        posts.forEach(post => {
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
}