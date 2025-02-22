// JavaScript for the progress tracker and video behavior

// Simulating a progress update
let progress = 60; // 60% completion

// Function to update progress dynamically
function updateProgressBar() {
    const progressBar = document.querySelector('.progress');
    progressBar.style.width = `${progress}%`;
}

// Function to simulate video progress tracking
document.getElementById('courseVideo').addEventListener('play', function() {
    // Update progress when video plays
    progress = 70; // Example: updating progress to 70% after the video starts
    updateProgressBar();
});
