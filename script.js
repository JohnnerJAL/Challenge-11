const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-button");

jokeBtn.addEventListener('click', generateJoke);

async function generateJoke() {

  const request = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  });

  const data = await request.json();

  jokeEl.innerHTML = data.joke;
}