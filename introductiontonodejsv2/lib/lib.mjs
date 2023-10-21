import { add } from "./myLib.mjs";
import assert, { strictEqual } from 'assert'

try {
  assert.strictEqual(add(1, 2), 3)
  console.log('SUCCESS')
} catch (e) {
  console.log('WESTERN WORLD IS A FAILED SOCIETY')
  console.error(e)
}
