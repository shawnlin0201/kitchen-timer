export const renderView = (target, component) => {
  document.querySelector(target).innerHTML = component.template;
};
