const flipCoin = () => {
    return new Promise((resolve, reject) => {
        const result = Math.random();
        result > 0.5
            ? resolve("You win! 🎉 Fetching advice...")
            : reject("You lose! 😢 Fetching a joke...");
    });
};



const getAdvice = async () => {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        console.log("Advice:", data.slip.advice);
    } catch (error) {
        console.error("Error fetching advice:", error);
    }
};



const getJoke = async () => {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();
        console.log(`Joke: ${data.setup} - ${data.punchline}`);
    } catch (error) {
        console.error("Error fetching joke:", error);
    }
};

const coinFlipResult = async () => {
    try {
        const message = await flipCoin();
        console.log(message);
        await getAdvice();
    } catch (error) {
        console.log(error);
        await getJoke();
    }
};

coinFlipResult();
