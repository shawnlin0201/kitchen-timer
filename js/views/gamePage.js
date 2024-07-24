export const component = (function(){
  const template = `
    <div id="game-page">
      <div>
        <button app-event="stopGame">Stop</button>
        <button app-event="recordTime">It’s Now!</button>
        <button app-event="showStats">Stats</button>
      </div>
      <div id="timer">0.0</div>
      <div id="target-time"></div>
      <div id="ready-go"></div>
      <button app-event="returnToStart" style="display: none;">Return to Start</button>
      <div id="modal" class="modal-overlay" style="display: none;" app-event="close">
        <div class="modal-wrapper">
          <div class="modal-body">
            <span class="modal-close" app-event="close">X</span>
            <div class="modal-content"></div>
          </div>
        </div>
      </div>
    </div>
  `;
  const data = {
    currentTargetTime: 0
  }

  const methods = {
    startGame(){
      const readyGoElement = document.getElementById('ready-go');
      readyGoElement.innerText = 'Ready? 3';

      setTimeout(() => {
        readyGoElement.innerText = 'Ready? 2';
      }, 1000);

      setTimeout(() => {
        readyGoElement.innerText = 'Ready? 1';
      }, 2000);

      setTimeout(() => {
        readyGoElement.innerText = 'Go!';
      }, 3000);

      setTimeout(() => {
        readyGoElement.innerText = '';
      }, 3500);
      this.getLevelInfo();
    },
    getLevelInfo(){
      const level = localStorage.getItem('level-select');
      if (level === 'easy') {
        data.currentTargetTime = Math.floor(Math.random() * (15 - 8 + 1)) + 8;
      } else if (level === 'medium') {
        data.currentTargetTime = Math.floor(Math.random() * (35 - 20 + 1)) + 20;
      } else if (level === 'hard') {
        data.currentTargetTime = Math.floor(Math.random() * (120 - 60 + 1)) + 60;
      }
      document.getElementById('target-time').innerText = `Target Time: ${data.currentTargetTime} seconds`;
    },
    stopGame(){},
    recordTime(){
      const modal = document.getElementById('modal');
      const modalContent = document.querySelector('.modal-content');

      modal.style.display = 'flex';
      modalContent.innerHTML = `
        <p>Your time: 0.0 seconds</p>
        <p>Result: 0.0</p>
      `;
    },
    showStats(){
      const modal = document.getElementById('modal');
      const modalContent = document.querySelector('.modal-content');
      
      modal.style.display = 'flex';
      modalContent.innerHTML = `
        <h2>Game Over</h2>
        <p>Your time: 0.0 seconds</p>
        <p>Result: 0.0</p>
      `;
    },
    close(){
      const modal = document.getElementById('modal');
      modal.style.display = 'none';
    }
  }



  return {
    template,
    methods,
  }
})()