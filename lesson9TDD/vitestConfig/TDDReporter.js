// Vitest reporter for the lesson 9 TDD assignment.
// Each student test title starts with its number, e.g. "46. creates a task".
// The reporter records whether each test passed or failed and compares that
// with the expected result for the assignment.

export default class TDDReporter {
  constructor() {
    this.required = {
      "46.": { expected: "passed", observed: "not implemented" },
      "47.": { expected: "passed", observed: "not implemented" },
      "48.": { expected: "passed", observed: "not implemented" },
      "49.": { expected: "passed", observed: "not implemented" },
      "50.": { expected: "passed", observed: "not implemented" },
      "51.": { expected: "passed", observed: "not implemented" },
      "52.": { expected: "failed", observed: "not implemented" },
      "14.": { expected: "passed", observed: "not implemented" },
      "15.": { expected: "passed", observed: "not implemented" },
      "16.": { expected: "passed", observed: "not implemented" },
      "17.": { expected: "passed", observed: "not implemented" },
      "18.": { expected: "passed", observed: "not implemented" },
      "19.": { expected: "failed", observed: "not implemented" },
      "20.": { expected: "failed", observed: "not implemented" },
      "21.": { expected: "passed", observed: "not implemented" },
      "22.": { expected: "passed", observed: "not implemented" },
      "23.": { expected: "passed", observed: "not implemented" },
      "24.": { expected: "failed", observed: "not implemented" },
      "25.": { expected: "failed", observed: "not implemented" },
      "26.": { expected: "passed", observed: "not implemented" },
      "27.": { expected: "failed", observed: "not implemented" },
      "28.": { expected: "failed", observed: "not implemented" },
      "29.": { expected: "failed", observed: "not implemented" },
      "30.": { expected: "failed", observed: "not implemented" },
      "31.": { expected: "passed", observed: "not implemented" },
      "32.": { expected: "failed", observed: "not implemented" },
      "1.": { expected: "failed", observed: "not implemented" },
      "2.": { expected: "failed", observed: "not implemented" },
      "3.": { expected: "failed", observed: "not implemented" },
      "4.": { expected: "failed", observed: "not implemented" },
      "5.": { expected: "failed", observed: "not implemented" },
      "6.": { expected: "failed", observed: "not implemented" },
      "7.": { expected: "passed", observed: "not implemented" },
      "8.": { expected: "passed", observed: "not implemented" },
      "9.": { expected: "failed", observed: "not implemented" },
      "10.": { expected: "failed", observed: "not implemented" },
      "11.": { expected: "passed", observed: "not implemented" },
      "12.": { expected: "failed", observed: "not implemented" },
      "13.": { expected: "passed", observed: "not implemented" },
    };
    this.optional = {
      "33.": { expected: "passed", observed: "not implemented" },
      "35.": { expected: "passed", observed: "not implemented" },
      "36.": { expected: "failed", observed: "not implemented" },
      "37.": { expected: "passed", observed: "not implemented" },
      "38.": { expected: "passed", observed: "not implemented" },
      "39.": { expected: "passed", observed: "not implemented" },
      "40.": { expected: "failed", observed: "not implemented" },
      "41.": { expected: "failed", observed: "not implemented" },
      "42.": { expected: "passed", observed: "not implemented" },
      // "43.": { expected: "passed", observed: "not implemented" },
      // "45.": { expected: "failed", observed: "not implemented" },
      "61.": { expected: "passed", observed: "not implemented" },
      "62.": { expected: "passed", observed: "not implemented" },
      "63.": { expected: "passed", observed: "not implemented" },
      "64.": { expected: "passed", observed: "not implemented" },
      "65.": { expected: "passed", observed: "not implemented" },
    };
  }

  // Called by Vitest once for each test as it finishes.
  // Replaces Jest's onTestResult, which received all of a file's tests at once.
  onTestCaseResult(testCase) {
    const title = testCase.name; // the test's own title, like Jest's test.title
    const i = title.indexOf(".");
    if (i === -1) return;
    const key = title.slice(0, i + 1);
    const entry = this.required[key] ?? this.optional[key];
    if (entry) {
      // Vitest states: "passed", "failed", "skipped" or "pending"
      entry.observed = testCase.result().state;
      entry.title = title;
    }
  }

  // Called by Vitest once after all test files have run.
  // Replaces Jest's onRunComplete.
  onTestRunEnd() {
    this.report("Required", this.required);
    this.report("Optional", this.optional);
  }

  report(label, tests) {
    const correct = [];
    const notImplemented = [];
    const errorList = [];
    for (const key in tests) {
      const t = tests[key];
      if (t.expected === t.observed) {
        correct.push(parseInt(key));
      } else if (t.observed === "not implemented") {
        notImplemented.push(parseInt(key));
      } else {
        errorList.push({
          testNumber: parseInt(key),
          title: t.title,
          expected: t.expected,
          returned: t.observed,
        });
      }
    }
    correct.sort((a, b) => a - b);
    notImplemented.sort((a, b) => a - b);
    errorList.sort((a, b) => a.testNumber - b.testNumber);

    console.log(`${label} part of the Assignment:`);
    console.log("The following tests gave correct results: ", correct);
    if (notImplemented.length > 0) {
      console.log("The following tests were not implemented: ", notImplemented);
    } else {
      console.log("All tests were implemented.");
    }
    if (errorList.length > 0) {
      console.log("The following tests did not report the expected results:");
      for (const row of errorList) {
        console.log(
          `⚠️   ${row.title} should have returned ${row.expected} but instead returned ${row.returned}.`,
        );
      }
    } else {
      console.log("All implemented tests gave the expected results.");
    }
  }
}
