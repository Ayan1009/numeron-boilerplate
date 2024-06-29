// Iteration 5: Store the player score and display it on the game over screen

document.addEventListener('DOMContentLoaded', function() {
    const score = localStorage.getItem('score');
    document.getElementById('score-board').textContent = score;
  
    document.getElementById('play-again-button').addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  });
  