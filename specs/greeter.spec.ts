import { greeter } from '../src/greeter'

test('says hello', () => {
  expect(greeter({ firstName: 'a', lastName: 'b' })).toBe('Hello, a b');
});
