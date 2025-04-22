let count = 0;
const maxCount = 5;

// Use setInterval to simulate a loop with delay
const intervalId = setInterval(() => {
    console.log("Welcome to Node JS");
    count++;

    // Stop after maxCount iterations
    if (count >= maxCount) {
        clearInterval(intervalId);
    }
}, 1000); // 1000 ms = 1 second delay
