
document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById('progress-bar');
    let step = 0;

    function updateProgress() {
        step += 20; // Example increment
        if (step > 100) step = 100;
        progressBar.style.width = step + '%';
    }

    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');

    yesButton.addEventListener('click', updateProgress);
    noButton.addEventListener('click', updateProgress);
});
