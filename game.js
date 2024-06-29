// Iteration 2: Generate 2 random number and display it on the screen

// Iteration 3: Make the options button functional

// Iteration 4: Build a timer for the game

document.addEventListener('DOMContentLoaded', function() {
    let score = 0;
  
    function generateRandomNumber() {
      return Math.floor(Math.random() * 100);
    }
  
    let number1 = generateRandomNumber();
    let number2 = generateRandomNumber();
  
    document.getElementById('number1').textContent = number1;
    document.getElementById('number2').textContent = number2;
  
    function checkAnswer(relation) {
      let isCorrect = false;
      if (relation === 'greater' && number1 > number2) {
        isCorrect = true;
      } else if (relation === 'equal' && number1 === number2) {
        isCorrect = true;
      } else if (relation === 'less' && number1 < number2) {
        isCorrect = true;
      }
  
      if (isCorrect) {
        score += 1;
        number1 = generateRandomNumber();
        number2 = generateRandomNumber();
        document.getElementById('number1').textContent = number1;
        document.getElementById('number2').textContent = number2;
        resetTimer();
      } else {
        localStorage.setItem('score', score);
        alert('Incorrect! Game Over.');
        window.location.href = 'gameover.html';
      }
    }
  
    let timerInterval;
  
    function startTimer() {
      let timeLeft = 10; // 10 seconds for example
      const timerElement = document.getElementById('timer');
  
      timerInterval = setInterval(() => {
        timerElement.textContent = timeLeft;
        timeLeft -= 1;
  
        if (timeLeft < 0) {
          clearInterval(timerInterval);
          localStorage.setItem('score', score);
          alert('Time is up! Game Over.');
          window.location.href = 'gameover.html';
        }
      }, 1000);
    }
  
    function resetTimer() {
      clearInterval(timerInterval);
      startTimer();
    }
  
    startTimer();
  
    document.getElementById('greater-than').addEventListener('click', function() {
      checkAnswer('greater');
    });
  
    document.getElementById('equal-to').addEventListener('click', function() {
      checkAnswer('equal');
    });
  
    document.getElementById('lesser-than').addEventListener('click', function() {
      checkAnswer('less');
    });
  });
  