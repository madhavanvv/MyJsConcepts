//https://api.chucknorris.io/jokes/random

fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let myJoke = data.value;
    console.log(myJoke);
  })
  .catch();

// fetch always give u a promise
//then
//catch
