document.addEventListener('DOMContentLoaded', function () {
    // Select all sound buttons
    const soundButtons = document.querySelectorAll('.sound button');

    // Add click event listener to each sound button
    soundButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Get the sound ID from the button's data attribute
            const soundId = this.dataset.soundId;
            // Find the corresponding audio element by ID
            const audio = document.getElementById(`audio${soundId}`);
            // Play the audio
            audio.play();
        });
    });
});
