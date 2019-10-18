import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { act } from "react-dom/test-utils";

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('App render and button click without crashing', () => {
  act(() => {
    ReactDOM.render(<App />, container);
  })
  const button = container.querySelector(".btn-test");
  expect(button.textContent).toBe("Click Me!");
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  const msg = container.querySelector('.msg');
  expect(msg.textContent).toBe("Hello World!");
});
