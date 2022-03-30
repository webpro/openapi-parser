import test from 'bron';
import assert from 'assert/strict';
import { isString } from './isString';

test('isString should produce correct result', () => {
  assert.ok(isString('foo'));
  assert.ok(isString('123'));
  assert.ok(isString('-1'));
  assert.ok(isString(''));
  assert.equal(isString(null), false);
  assert.equal(isString(undefined), false);
  assert.equal(isString({}), false);
});
