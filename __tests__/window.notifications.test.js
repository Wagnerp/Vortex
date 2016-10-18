import { windowReducer } from '../out/reducers/window';

describe('setWindowSize', () => {
  it('sets the size', () => {
    let input = {};
    let result = windowReducer.reducers.STORE_WINDOW_SIZE(input, { width: 1, height: 2 });
    expect(result.size).toEqual({ width: 1, height: 2 });
  });
});

describe('setWindowPosition', () => {
  it('sets the window position', () => {
    let input = {};
    let result = windowReducer.reducers.STORE_WINDOW_POSITION(input, { x: 1, y: 2 });
    console.log('result', result);
    expect(result.position).toEqual({ x: 1, y: 2 });
  });
});

describe('setMaximized', () => {
  it('sets the window maximized', () => {
    let input = {};
    let result = windowReducer.reducers.SET_MAXIMIZED(input, true);
    expect(result.maximized).toBe(true);
  });
});
