import test from "node:test";
import assert from "node:assert/strict";

import {
  computeProfile,
  decodeState,
  encodeState,
  routeStepsFor,
  serializeState,
  scorecardToMarkdown,
} from "../ai_native_book/assets/book-v2.js";

const READING_CHECK_COUNT = 99;

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

test("profile returns a copy of values instead of aliasing the input", () => {
  const values = [0, 1, 2, 3, 4, 2, 1, 0];
  const profile = computeProfile(values);

  assert.notEqual(profile.values, values);
  values[0] = 4;
  assert.equal(profile.values[0], 0);
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

test("state rejects an entire mixed array and drops extra fields", () => {
  assert.deepEqual(
    serializeState({
      levels: [0, "1", 2],
      checks: [true, false],
      processName: "Секретный процесс",
      notes: "Свободный текст",
    }),
    {
      levels: [],
      checks: [true, false],
    },
  );
  assert.deepEqual(
    serializeState({
      levels: [0, 1, 2],
      checks: [true, "false", false],
    }),
    {
      levels: [0, 1, 2],
      checks: [],
    },
  );
  assert.deepEqual(serializeState({}), { levels: [], checks: [] });
  assert.deepEqual(serializeState(null), { levels: [], checks: [] });
});

test("partial scorecard roundtrips without nulls or strings in storage", () => {
  const partialLevels = [3, null, 2, null, 4, null, null, 1];
  const readingChecks = Array.from(
    { length: READING_CHECK_COUNT },
    (_, index) => index % 3 === 0,
  );

  const encoded = encodeState({
    levels: partialLevels,
    checks: readingChecks,
  });

  assert.deepEqual(encoded.levels, [3, 2, 4, 1]);
  assert.deepEqual(encoded.checks.slice(0, 8), [
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
  ]);
  assert.deepEqual(encoded.checks.slice(8), readingChecks);
  assert.equal(encoded.checks.length, 8 + READING_CHECK_COUNT);
  assert.doesNotMatch(JSON.stringify(encoded), /null|"3"|"2"|"4"|"1"/);
  assert.deepEqual(decodeState(encoded), {
    levels: partialLevels,
    checks: readingChecks,
  });
});

test("decode rejects corrupt positional state instead of shifting levels", () => {
  const readingChecks = Array(READING_CHECK_COUNT).fill(false);
  const valid = {
    levels: [3, 2],
    checks: [
      true,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      ...readingChecks,
    ],
  };

  assert.deepEqual(decodeState(valid), {
    levels: [3, null, null, 2, null, null, null, null],
    checks: readingChecks,
  });

  for (const corrupt of [
    { ...valid, levels: [3, "2"] },
    { ...valid, checks: valid.checks.slice(0, -1) },
    { ...valid, checks: [...valid.checks, false] },
    { ...valid, checks: [1, ...valid.checks.slice(1)] },
    {
      ...valid,
      checks: [
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        ...readingChecks,
      ],
    },
  ]) {
    assert.equal(decodeState(corrupt), null);
  }
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

test("reading routes expose an explicit ordered list of table-of-contents anchors", () => {
  const startup = [
    "#ch1",
    "#ch2",
    "#first-managed-loop",
    "#ch3",
    "#ch4",
    "#ch12",
  ];
  const mature = [
    "#ch1",
    "#ch2",
    "#first-managed-loop",
    "#ch3",
    "#context-memory-skills",
    "#ch6",
    "#ch7",
    "#ch9",
    "#ch8",
    "#ch5",
    "#ch12",
  ];

  assert.deepEqual(routeStepsFor("startup"), startup);
  assert.deepEqual(routeStepsFor("mature"), mature);
  assert.deepEqual(routeStepsFor("unknown"), []);

  const returned = routeStepsFor("startup");
  returned.push("#sources");
  assert.deepEqual(routeStepsFor("startup"), startup);
});
