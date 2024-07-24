export const renderView = (target, component) => {
  const el = document.querySelector(target);
  el.innerHTML = component.template;
  bindEvents(el, component.events, component);
};

const bindEvents = (el, events = {}, context) => {
  Object.keys(events).forEach((eventKey) => {
    const elements = el.querySelectorAll(`[app-event="${eventKey}"]`);
    elements.forEach((element) => {
      element.addEventListener("click", events[eventKey].bind(context));
    });
  });
};
