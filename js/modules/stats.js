export class Stats {
  constructor() {
    this.records = {
      easy: [],
      medium: [],
      hard: []
    };
  }

  addRecord(playerName, level, record) {
    this.records[level].push({ playerName, record });
    this.saveRecords();
  }

  getStats(playerName) {
    return {
      easy: this.generateStats('easy', playerName),
      medium: this.generateStats('medium', playerName),
      hard: this.generateStats('hard', playerName)
    };
  }

  generateStats(level, playerName) {
    const playerRecords = this.records[level].filter(record => record.playerName === playerName);
    return {
      bestRecord: this.calculateBestRecord(level),
      recentRecord: this.calculateRecentRecord(playerRecords),
      averageTime: this.calculateAverageTime(playerRecords)
    };
  }

  calculateBestRecord(level) {
    const records = this.records[level];
    if (records.length === 0) return null;
    return records.reduce((best, record) => Math.abs(record.record) < Math.abs(best.record) ? record : best, records[0]);
  }

  calculateRecentRecord(records) {
    if (records.length === 0) return null;
    return records[records.length - 1];
  }

  calculateAverageTime(records) {
    if (records.length === 0) return null;
    const sum = records.reduce((total, record) => total + record.record, 0);
    return sum / records.length;
  }

  saveRecords() {
    localStorage.setItem('gameStats', JSON.stringify(this.records));
  }
}
