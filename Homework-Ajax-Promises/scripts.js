function getJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((resultAPI) => resultAPI.json())
      .then((resultJoke) => {
        init(resultJoke);
      });
  }