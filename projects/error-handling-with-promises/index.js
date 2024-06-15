function getUserData(userId){
    const userEndpoint = `https://jsonplaceholder.typicode.com/users/${userId}`

    return fetch(userEndpoint)
        .then(response => {
            if (!response.ok) throw new Error(`😖 Error retreiving user with id ${userId}`);
            return response.json();
        })
        .then(data => fetch(`https://api.github.com/users/${data.username}`))
        .then(response => {
            if (!response.ok) {
                return response.json().then(error => {
                        throw new Error(`😖 ${error.status} Error getting github data: ${error.message}`)
                })
            }
            return response.json();
        })
        .then(data => displayAvatar(data))
        .catch(error => {
            console.error(error);
            alert(error.message);
            displayError(error.message);
        })
}




function displayAvatar(data) {
    const container = document.querySelector("#result");
    const usernameH3 = document.createElement("h3");
    usernameH3.textContent = `${data.login}'s avatar`

    
    const userUrlA = document.createElement("a");
    userUrlA.textContent = data.html_url;
    userUrlA.href = data.html_url;
    userUrlA.target = "_blank";
    
    const userUrlP = document.createElement("p");

    const avatarImg =  document.createElement("img");
    avatarImg.src = data.avatar_url;
    avatarImg.id = "avatar";
    container.append(usernameH3);
    userUrlP.append(userUrlA);
    container.append(userUrlP);
    container.append(avatarImg);
}

function displayError(message) {
    const container = document.querySelector("#result");

    const messageP = document.createElement("p")
    messageP.textContent = message;
    messageP.id = "error-message"

    container.append(messageP);

}