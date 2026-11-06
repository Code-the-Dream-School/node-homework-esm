// lesson9TDD/vitestConfig/vitest.config.js
import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";
import TDDReporter from "./TDDReporter.js";

const fromHere = (p) => fileURLToPath(new URL(p, import.meta.url));
const mock = (name) => fromHere(`../mocks/${name}`);

export default defineConfig({
  root: fromHere("../../"),
  resolve: {
    alias: [
      {
        find: /^.*validation\/taskSchema.*$/,
        replacement: mock("taskSchema.js"),
      },
      {
        find: /^.*validation\/userSchema.*$/,
        replacement: mock("userSchema.js"),
      },
      {
        find: /^.*controllers\/taskController.*$/,
        replacement: mock("taskController.js"),
      },
      {
        find: /^.*controllers\/userController.*$/,
        replacement: mock("userController.js"),
      },
    ],
  },
  test: {
    include: ["**/test/**/*.{test,spec}.js"],
    fileParallelism: false,
    reporters: ["verbose", new TDDReporter()],
  },
});
