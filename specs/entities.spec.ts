// import { greeter } from '../src/greeter'
const entityModel = (sentence) => {
  const relationship = "is";
  if (sentence.includes("?")) {
    const left = sentence.split("is")[0];
    const right = sentence.split("is")[1];
    const question = left.split(" ")[0] + " " + left.split(" ")[1];
    const target = left.split(" ")[2];
    const source = sentence.split("is")[1].substring(0, sentence.split("is")[1].length - 1).trim();
    const result = { question, source, relationship };
    if (target) result.target = target;
    return result;
  } return { entityOne: sentence.split("is")[0].trim(), relationship, entityTwo: sentence.split("is")[1].trim() };
};

test("can model entity", () => {
  expect(entityModel("a is b")).toEqual({ entityOne: "a", relationship: "is", entityTwo: "b" });
});
test("can model another entity", () => {
  expect(entityModel("c is d")).toEqual({ entityOne: "c", relationship: "is", entityTwo: "d" });
});

test("can model more complex entity", () => {
  expect(entityModel("a b c is d e f")).toEqual({ entityOne: "a b c", relationship: "is", entityTwo: "d e f" });
});

test("can model question entity", () => {
  expect(entityModel("how much is a b c d ?")).toEqual({ question: "how much", source: "a b c d", relationship: "is" });
});

test("can model more complex question entity", () => {
  expect(entityModel("how many simoleans is a b c d ?")).toEqual({ question: "how many", source: "a b c d", target: "simoleans", relationship: "is" });
});
