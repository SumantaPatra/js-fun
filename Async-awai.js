// The word “async” before a function means one simple thing: a function always returns a promise. 
// Other values are wrapped in a resolved promise automatically.

async function loadJson(url) {
    try {
        const response = await fetch(url);
        const res = await response.json();
    } catch (error) {
        throw new Error(error.status);
    }
  }
  
  loadJson('https://javascript.info/no-such-user.json')
    .catch(alert); // Error: 404


