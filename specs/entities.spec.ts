import { parseInput } from "../src/parseInput";

test("can model entity", () => {
  expect(parseInput("a is b")).toEqual({ entityOne: "a", relationship: "is", entityTwo: "b" });
});
test("can model another entity", () => {
  expect(parseInput("c is d")).toEqual({ entityOne: "c", relationship: "is", entityTwo: "d" });
});

test("can model more complex entity", () => {
  expect(parseInput("a b c is d e f")).toEqual({ entityOne: "a b c", relationship: "is", entityTwo: "d e f" });
});

test("can model question entity", () => {
  expect(parseInput("how much is a b c d ?")).toEqual({ question: "how much", source: "a b c d", relationship: "is" });
});

test("can model more complex question entity", () => {
  expect(parseInput("how many simoleans is a b c d ?")).toEqual({ question: "how many", source: "a b c d", target: "simoleans", relationship: "is" });
});
