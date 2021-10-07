import demo from '../src/js/app';

test('testing', () => {
  const received = demo('Ok');
  const expected = 'Ok';

  expect(received).toBe(expected);
});
