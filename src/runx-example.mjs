import assert from 'node:assert/strict';
import { checkContentCondition } from '@x12i/runx/condition';
const input = { content: { score: 7 }, conditionType: 'json', condition: { all: [
  { path: 'input.score', op: 'exists' }, { path: 'input.score', op: 'type', value: 'number' }, { path: 'input.score', op: 'gte', value: 5 },
] }, mode: 'deterministic', options: { jsonConditionFormat: 'filter-predicate' } };
const accepted = await checkContentCondition(input);
assert.equal(accepted.ok, true, JSON.stringify(accepted));
assert.equal(accepted.meetsCondition, true);
const rejected = await checkContentCondition({ ...input, content: { score: 2 } });
assert.equal(rejected.ok, true);
assert.equal(rejected.meetsCondition, false);
assert.equal((await checkContentCondition({ ...input, content: {} })).meetsCondition, false);
console.log({ accepted, rejected });
