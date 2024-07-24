export class Timer {
    constructor(targetTime, updateCallback, finishCallback) {
        this.targetTime = targetTime;
        this.updateCallback = updateCallback;
        this.finishCallback = finishCallback;
        this.timerElement = document.getElementById('timer');
        this.startTime = null;
        this.intervalId = null;
    }

    start() {
        this.startTime = performance.now();
        this.intervalId = setInterval(() => this.update(), 100);
        setTimeout(() => this.finish(), this.targetTime * 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.finish();
    }

    update() {
        const elapsedTime = (performance.now() - this.startTime) / 1000;
        this.updateCallback(elapsedTime);
    }

    finish() {
        clearInterval(this.intervalId);
        const finalTime = (performance.now() - this.startTime) / 1000;
        if (typeof this.finishCallback === 'function') {
            this.finishCallback(finalTime);
        }       
    }
}
