function flipCoin() {
    return new Promise((resolve, reject) => {
        let result = Math.random();
        if (result > 0.5) {
            resolve("You win! 🎉 Fetching advice...");
        } else {
            reject("You lose! 😢 Fetching a joke...");
        }
    });
}

function getAdvice() {
    return fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => console.log("Advice:", data.slip.advice))
        .catch(error => console.error("Error fetching advice:", error));
}

function getJoke() {
    return fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => console.log(`Joke: ${data.setup} - ${data.punchline}`))
        .catch(error => console.error("Error fetching joke:", error));
}


flipCoin()
    .then(message => {
        console.log(message);
        return getAdvice();
    })
    .catch(error => {
        console.log(error);
        return getJoke();
    });
