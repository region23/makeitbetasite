import test from "node:test";
import assert from "node:assert/strict";

import {
  computeProfile,
  serializeState,
  scorecardToMarkdown,
} from "../ai_native_book/assets/book-v2.js";

test("profile keeps all eight dimensions and never hides the minimum", () => {
  const values = [3, 3, 2, 3, 4, 3, 3, 3];

  assert.deepEqual(computeProfile(values), {
    values,
    minimum: 2,
    managed: false,
  });
});

test("profile is managed only when every dimension is at least three", () => {
  assert.deepEqual(computeProfile([3, 3, 3, 3, 3, 3, 3, 3]), {
    values: [3, 3, 3, 3, 3, 3, 3, 3],
    minimum: 3,
    managed: true,
  });
  assert.equal(computeProfile([4, 4, 4, 4, 4, 4, 4, 2]).managed, false);
});

test("profile requires exactly eight integer levels from zero to four", () => {
  for (const values of [
    [],
    [0, 1, 2, 3, 4, 0, 1],
    [0, 1, 2, 3, 4, 0, 1, 2, 3],
    [0, 1, 2, 3, 4, 0, 1, 4.5],
    [0, 1, 2, 3, 4, 0, 1, -1],
    [0, 1, 2, 3, 4, 0, 1, 5],
    [0, 1, 2, 3, 4, 0, 1, "2"],
  ]) {
    assert.throws(() => computeProfile(values), /восемь|0.+4|цел/i);
  }
  assert.throws(() => computeProfile(null), /восемь|массив/i);
});

test("state contains only integer levels and boolean checks", () => {
  assert.deepEqual(
    serializeState({ levels: [0, 1, 2, 3, 4, 2, 1, 0], checks: [true, false] }),
    { levels: [0, 1, 2, 3, 4, 2, 1, 0], checks: [true, false] },
  );
});

test("state drops strings, free text, invalid levels, and extra fields", () => {
  const source = {
    levels: [0, "1", 2.5, 3, 9, 4],
    checks: [true, "false", false, 1],
    processName: "Секретный процесс",
    notes: "Свободный текст",
  };

  assert.deepEqual(serializeState(source), {
    levels: [0, 3, 4],
    checks: [true, false],
  });
  assert.deepEqual(serializeState({}), { levels: [], checks: [] });
  assert.deepEqual(serializeState(null), { levels: [], checks: [] });
});

test("state returns fresh arrays instead of exposing input arrays", () => {
  const levels = [0, 1, 2, 3, 4, 2, 1, 0];
  const checks = [true, false];
  const result = serializeState({ levels, checks });

  assert.notEqual(result.levels, levels);
  assert.notEqual(result.checks, checks);
});

test("markdown export names the profile", () => {
  const result = scorecardToMarkdown([0, 1, 2, 3, 4, 2, 1, 0]);

  assert.match(result, /Карта зрелости/);
  assert.match(result, /Ценность и портфель/);
  assert.doesNotMatch(result, /средний балл/i);
});

test("markdown contains all eight dimensions, minimum, and managed status", () => {
  const dimensions = [
    "Ценность и портфель",
    "Люди и полномочия",
    "Контекст и память",
    "Среда исполнения",
    "Контур управления",
    "Проверка и наблюдаемость",
    "Поставка и эксплуатация",
    "Управление и экономика",
  ];
  const result = scorecardToMarkdown([3, 3, 3, 3, 3, 3, 3, 3]);

  for (const dimension of dimensions) {
    assert.match(result, new RegExp(dimension));
  }
  assert.match(result, /Минимальный балл:\s*3/i);
  assert.match(result, /Управляемый процесс:\s*да/i);
  assert.doesNotMatch(result, /средн/i);
});
