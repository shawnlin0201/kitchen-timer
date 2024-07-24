export const component = (function(){
  const template = `
    <div id="initial-page">
      <input type="text" id="player-name" placeholder="Enter your name" required>
      <select id="level-select">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <button app-event="startGame">Start</button>
    </div>
  `;

  const events = {
    startGame() {
      const playerName = document.getElementById('player-name').value;
      const level = document.getElementById('level-select').value;

      localStorage.setItem('playerName', playerName);
      localStorage.setItem('level-select', level);

      // pseudo code: change view
      // eventBus.emit('startGame')
    }
  }

  return {
    template,
    events
  }
})()