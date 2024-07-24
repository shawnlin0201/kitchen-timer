import { Timer } from "../modules/timer.js";

export const component = (function () {
  const template = `
    <div id="game-page">
      <div>
        <button app-event="stopGame">Stop</button>
        <button app-event="calcTimer">It’s Now!</button>
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
    gameTimer: null,
    gameStartTime: 0,
    currentTargetTime: 0,
  };

  const methods = {
    startGame() {
      this.getLevelInfo();
      const readyGoElement = document.getElementById("ready-go");
      readyGoElement.innerText = "Ready? 3";

      setTimeout(() => {
        readyGoElement.innerText = "Ready? 2";
      }, 1000);

      setTimeout(() => {
        readyGoElement.innerText = "Ready? 1";
      }, 2000);

      setTimeout(() => {
        readyGoElement.innerText = "Go!";
        this.startRecord();
      }, 3000);

      setTimeout(() => {
        readyGoElement.innerText = "";
      }, 3500);
    },
    startRecord() {
      data.gameStartTime = performance.now();
      data.gameTimer = new Timer(
        data.currentTargetTime,
        this.updateTimer.bind(this)
      );
      data.gameTimer.start();
    },
    updateTimer(time) {
      const timerElement = document.getElementById("timer");
      if (time < 3) {
        timerElement.innerText = time.toFixed(1);
      } else {
        timerElement.innerText = "???";
      }
    },
    getLevelInfo() {
      const level = localStorage.getItem("level-select");
      if (level === "easy") {
        data.currentTargetTime = Math.floor(Math.random() * (15 - 8 + 1)) + 8;
      } else if (level === "medium") {
        data.currentTargetTime = Math.floor(Math.random() * (35 - 20 + 1)) + 20;
      } else if (level === "hard") {
        data.currentTargetTime =
          Math.floor(Math.random() * (120 - 60 + 1)) + 60;
      }
      document.getElementById(
        "target-time"
      ).innerText = `Target Time: ${data.currentTargetTime} seconds`;
    },
    stopGame() {},
    calcTimer() {
      const formatTime = (time) => {
        if (time === 0) {
          return `±0 seconds`;
        } else if (time > 0) {
          return `+${time.toFixed(1)} seconds`;
        } else {
          return `${time.toFixed(1)} seconds`;
        }
      }
      const elapsedTime = (performance.now() - data.gameStartTime) / 1000;
      const result = parseFloat(
        (elapsedTime - data.currentTargetTime).toFixed(1)
      );
      const formattedResult = formatTime(result);
      const modal = document.getElementById("modal");
      const modalContent = document.querySelector(".modal-content");

      modal.style.display = "flex";
      modalContent.innerHTML = `
        <p>Your time: ${elapsedTime.toFixed(1)} seconds</p>
        <p>Result: ${formattedResult}</p>
      `;
      data.gameTimer = null;
    },
    showStats() {
      const modal = document.getElementById("modal");
      const modalContent = document.querySelector(".modal-content");

      modal.style.display = "flex";
      modalContent.innerHTML = `
        <h2>Game Over</h2>
        <p>Your time: 0.0 seconds</p>
        <p>Result: 0.0</p>
      `;
    },
    close() {
      const modal = document.getElementById("modal");
      modal.style.display = "none";
    },
  };

  return {
    template,
    methods,
  };
})();
