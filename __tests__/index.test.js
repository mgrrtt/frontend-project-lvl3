import foo from '../src/app.js';

test('compare files', () => {
  expect(foo()).toEqual('Hello');
});
