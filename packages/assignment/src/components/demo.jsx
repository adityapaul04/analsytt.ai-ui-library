import { init } from 'snabbdom';
import { h, propsModule, eventListenersModule, styleModule } from 'snabbdom';

const patch = init([propsModule, eventListenersModule, styleModule]);

let state = {
  count: 0
};

let vnode = null;

function createTemplate(state) {
  return h('div', {}, [
    h('div', {}, [
      h('h1', {}, state.count),
      h('button', { on: { mouseenter: handleMouseEnter, mouseleave: handleMouseLeave, click: increment } }, "Increment"),
      h('button', { on: { mouseenter: handleMouseEnter, mouseleave: handleMouseLeave, click: decrement } }, "Decrement")
    ])
  ]);
}

function handleMouseLeave(event) {
  event.target.style.background = '';
}

function handleMouseEnter(event) {
  event.target.style.background = '';
}

function updateState(newState) {
  state = { ...state, ...newState };
  render();
}

function increment() {
  updateState({ count: state.count + 1 });
  console.log("State Changed");
}

function decrement() {
  updateState({ count: state.count - 1 });
  console.log("State Changed")
}

function render() {
  const newVNode = createTemplate(state);
  if (vnode === null) {
    vnode = newVNode;
    patch(document.getElementById('root'), vnode);
  } else {
    patch(vnode, newVNode);
    vnode = newVNode;
  }
}

export const mount = () => {
  console.log('Component mounted');
  render();
}

export const useEffect = (effect) => {
  effect();
}
