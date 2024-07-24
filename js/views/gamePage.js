import { eventBus } from '../modules/eventBus.js';

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
    </div>
  `;

  const events = {
    stopGame(){},
    recordTime(){},
    showStats(){},
  }

  const methods = {
    startGame(){},
  }



  return {
    template,
    events,
  }
})()