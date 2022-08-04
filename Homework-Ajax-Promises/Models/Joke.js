class Joke {
    constructor(resultJoke) {
      this.icon = resultJoke.icon_url;
      this.id = resultJoke.id;
      this.value = resultJoke.value;
    }
    get jokeText() {
      return this.value;
    }
  }
