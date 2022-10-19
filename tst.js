//https://api.chucknorris.io/jokes/random
console.log("hello api testing");
fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.value);
  })
  .catch((error) => {
    console.log(error.message);
  });
console.log("hello fetch finished");
