// RGB Colour Guessing Game

// RGB values for the game
let r, g, b;

// Number of lives
let lives = 3;

// Score
let score = 0;

// Selecting elements
const rgbValue = document.getElementById('rgb-value');
const optionsContainer = document.getElementById('options');
const resultMessage = document.getElementById('result');
const replayBtn = document.getElementById('replay-btn');

// Function to generate random RGB value
function generateRGBValue() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to generate options
function generateOptions() {
    // Clear previous options
    optionsContainer.innerHTML = '';

    // Generate correct and incorrect options
    const correctOption = `rgb(${r}, ${g}, ${b})`;
    const incorrectOptions = [];
    while (incorrectOptions.length < 2) {
        const option = generateRGBValue();
        if (option !== correctOption && !incorrectOptions.includes(option)) {
            incorrectOptions.push(option);
        }
    }

    // Shuffle options array
    const options = [correctOption, ...incorrectOptions].sort(() => Math.random() - 0.5);

    // Render options
    options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.style.backgroundColor = option;
        optionElement.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(optionElement);
    });
}

// Function to check the answer
function checkAnswer(selectedColor) {
    if (selectedColor === `rgb(${r}, ${g}, ${b})`) {
        score++;
        resultMessage.textContent = 'Correct!';
    } else {
        lives--;
        resultMessage.textContent = 'Incorrect!';
    }

    // Display score and lives remaining
    resultMessage.textContent += ` Score: ${score}, Lives: ${lives}`;

    // Check game over condition
    if (lives === 0) {
        gameOver();
    } else {
        // Generate new RGB value and options
        generateRGBValue();
        generateOptions();
    }
}

// Function to handle game over
function gameOver() {
    optionsContainer.innerHTML = '';
    resultMessage.textContent = `Game Over! Final Score: ${score}`;
    replayBtn.style.display = 'block';
}

// Function to replay the game
function replayGame() {
    // Reset lives and score
    lives = 3;
    score = 0;

    // Hide replay button
    replayBtn.style.display = 'none';

    // Start new game
    generateRGBValue();
    generateOptions();
    resultMessage.textContent = '';
}

// Event listener for replay button
replayBtn.addEventListener('click', replayGame);

// Start the game
generateRGBValue();
generateOptions();
