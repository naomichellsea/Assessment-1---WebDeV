document.addEventListener('DOMContentLoaded', function () {
    const soundButtons = document.querySelectorAll('.sound button');
    const audioElements = document.querySelectorAll('.sound audio');

    soundButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            const audio = audioElements[index];
            audio.play();
        });
    });

    // Text to Speech Feature
    const textInput = document.getElementById('textInput'); // Get text input element
    const textToSpeechBtn = document.getElementById('textToSpeechBtn'); 

    textToSpeechBtn.addEventListener('click', function() { // Add event listener for click event
        const text = textInput.value; // Get text from input
        if (text.trim() !== '') { // Check if text is not empty
            const speech = new SpeechSynthesisUtterance(text); // Create speech synthesis utterance
            window.speechSynthesis.speak(speech); 
        }
    });

    // Pagination
    const soundList = document.querySelector('.soundboard'); // Get soundboard element
    const soundsPerPage = 9; // Set sounds per page
    const numPages = Math.ceil(soundButtons.length / soundsPerPage); 
    let currentPage = 1; // Initialize current page

    function showPage(page) { 
        const startIdx = (page - 1) * soundsPerPage; // Calculate start index
        const endIdx = startIdx + soundsPerPage; 
        
        soundButtons.forEach(function(button, index) { // Iterate through sound buttons
            button.parentElement.style.display = (index >= startIdx && index < endIdx) ? 'inline-block' : 'none'; // Show or hide buttons based on index
        });
    }

    showPage(currentPage); 

    const prevPageBtn = document.getElementById('prevPageBtn'); // Get previous page button
    const nextPageBtn = document.getElementById('nextPageBtn'); // Get next page button

    prevPageBtn.style.display = 'none'; // Hide previous page button initially

    prevPageBtn.addEventListener('click', function() { // Add event listener for previous page button click
        currentPage--; // Decrement current page
        showPage(currentPage); 
        nextPageBtn.style.display = 'inline-block';
        if (currentPage === 1) { // If on first page
            prevPageBtn.style.display = 'none'; // Hide previous page button
        }
    });

    nextPageBtn.addEventListener('click', function() { // Add event listener for next page button click
        currentPage++; // Increment current page
        showPage(currentPage); 
        prevPageBtn.style.display = 'inline-block'; 
        if (currentPage === numPages) { // If on last page
            nextPageBtn.style.display = 'none'; // Hide next page button
        }
    });
});
