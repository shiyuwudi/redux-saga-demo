import test from 'tape';
import { effects, delay } from 'redux-saga';

import { incrementAsync } from './sagas';

const { call, put } = effects;


test('increment async', (assert) => {
  const gen = incrementAsync();
  console.log(111, call(delay, 1000));
  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    'incrementAsync Saga must call delay(1000)'
  );
  assert.deepEqual(
    gen.next().value,
    put({type: 'INCREMENT'}),
    'incrementAsync Saga must dispatch an INCREMENT action'
  );

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'incrementAsync Saga must be done'
  );

  assert.end();
});