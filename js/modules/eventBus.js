/**
 * @class EventBus
 * @classdesc 管理全域事件
 * @property {Object} events - 事件列表
 * @method on - 註冊事件
 * @method off - 移除事件
 * @method emit - 觸發事件
 */
class EventBus {
    constructor() {
      this.events = {};
    }

    on(event, listener) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(listener);
    }
  
    off(event, listenerToRemove) {
      if (!this.events[event]) return;
  
      this.events[event] = this.events[event].filter(listener => listener !== listenerToRemove);
    }
  
    emit(event, data) {
      if (!this.events[event]) return;
  
      this.events[event].forEach(listener => listener(data));
    }
  }
  
export const eventBus = new EventBus();
  