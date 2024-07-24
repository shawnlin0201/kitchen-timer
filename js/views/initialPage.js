export const component = (function(){
  const template = `
    <div id="initial-page">
      <input type="text" id="player-name" placeholder="Enter your name" required>
      <select id="level-select">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <button>Start</button>
    </div>
  `;
  return {
    template
  }
})()