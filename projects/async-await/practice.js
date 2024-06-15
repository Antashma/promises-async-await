class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url) {
      const response = await fetch(url);
      if (response.status == 200) return response.json();
      throw new HttpError(response);
  }
  
  // Ask for a user name until github returns a valid user
  // async function demoGithubUser() {
  //     let user;
  //     while (true) {
  //         let name = prompt("Enter a name?", "iliakan");
  
  //         try {
  //             user = await loadJson(`https://api.github.com/users/${name}`);
  //             break;
  //         } catch (err) { 
  //             if (err instanceof HttpError && err.response.status == 404) alert("No such user, please reenter.");
  //             else throw err;
  //         };
  //     }
  //     alert(`Full name: ${user.name}.`);
  //     return user;
  // }
  
  // demoGithubUser();
  
  
  async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  function f() {
    // ...what should you write here?
    // we need to call async wait() and wait to get 10
    // remember, we can't use "await"
      wait().then(res => console.log(res))
  }
  
  //f();