import test from 'ava';
import fn from './dist/hanchor';

test('title', (t) => {
  const err = t.throws(() => fn(123), TypeError);
  t.is(err.message, 'Expected a string, got number');

  t.is(fn('unicorns'), 'unicorns & rainbows');
});

console.log(fn);
