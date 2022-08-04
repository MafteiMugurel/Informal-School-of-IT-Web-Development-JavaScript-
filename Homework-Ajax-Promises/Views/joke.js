function init(resultJoke) {
  const joke = new Joke(resultJoke);
  let tellMeAjoke = document.getElementById("jokes");
  tellMeAjoke.innerText = joke.jokeText;
}
