export class Stats {
  constructor() {
    this.records = {
      easy: [],
      medium: [],
      hard: []
    };
    this.loadRecords();
  }

  addRecord(level, record) {
    this.records[level].push(record);
    this.saveRecords();
  }

  getStats() {
    return {
      easy: this.generateStats('easy'),
      medium: this.generateStats('medium'),
      hard: this.generateStats('hard')
    };
  }

  generateStats(level) {
    return {
      bestRecord: this.calculateBestRecord(level),
      recentRecord: this.calculateRecentRecord(level),
      averageTime: this.calculateAverageTime(level)
    };
  }

  calculateBestRecord(level) {
    const records = this.records[level];
    if (records.length === 0) return null;
    return records.reduce((best, record) => Math.abs(record) < Math.abs(best) ? record : best, records[0]);
  }

  calculateRecentRecord(level) {
    const records = this.records[level];
    if (records.length === 0) return null;
    return records[records.length - 1];
  }

  calculateAverageTime(level) {
    const records = this.records[level];
    if (records.length === 0) return null;
    const sum = records.reduce((total, record) => total + record, 0);
    return sum / records.length;
  }

  saveRecords() {
    localStorage.setItem('gameStats', JSON.stringify(this.records));
  }

  loadRecords() {
    const savedRecords = JSON.parse(localStorage.getItem('gameStats'));
    if (savedRecords) {
      this.records = savedRecords;
    }
  }
}
