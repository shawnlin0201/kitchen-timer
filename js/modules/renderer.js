export const renderView = (target, component) => {
  const el = document.querySelector(target);
  el.innerHTML = component.template;
  bindEvents(el, component.methods, component);
};

const bindEvents = (el, events = {}, context) => {
  Object.keys(events).forEach((eventKey) => {
    const elements = el.querySelectorAll(`[app-event="${eventKey}"]`);
    elements.forEach((element) => {
        element.addEventListener('click', (e) => {
            if (e.target === element) {
                events[eventKey].call(context, e);
            }
            }
        );      
    });
  });
};
