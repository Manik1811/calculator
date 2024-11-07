// Get the display element
const display = document.getElementById('display');

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character from the display
function deleteLast() {
    const currentDisplay = display.value;
    if (currentDisplay.length > 0) {
        display.value = currentDisplay.slice(0, -1);
    }
}

// Function to append a value to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to calculate the result when '=' is pressed
function calculate() {
    try {
        const input = display.value;

        // Validate input expression
        if (!validateExpression(input)) {
            throw new Error('Invalid expression');
        }

        // Calculate the result using eval
        const result = eval(input);

        // If the result is not a number, throw an error
        if (isNaN(result)) {
            throw new Error('Calculation error');
        }

        // Update the display with the result
        display.value = result;

    } catch (error) {
        // Handle errors
        handleError(error);
    }
}

// Function to validate the input expression using regex
function validateExpression(input) {
    const validCharacters = /^[0-9+\-*/().% ]*$/;
    return validCharacters.test(input);
}

// Function to handle and display errors
function handleError(error) {
    console.error('Error:', error.message);
    display.value = `Error: ${error.message}`;
    setTimeout(clearDisplay, 3000); // Clear after 3 seconds
}

// Example of using arrays and loops
function showCalculationHistory() {
    const history = []; // Create an empty array for history

    // Example calculations to store in history
    const calculations = ['2 + 2 = 4', '3 * 3 = 9', '5 / 0 = Infinity', '10 - 3 = 7'];

    // Loop through calculations and push them into history
    for (let i = 0; i < calculations.length; i++) {
        history.push(calculations[i]);
    }

    // Display each calculation in the history
    for (let i = 0; i < history.length; i++) {
        console.log(`History ${i + 1}: ${history[i]}`);
    }
}

// Call the function to log calculations (you can call this when needed)
showCalculationHistory();
