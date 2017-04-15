import { ask } from "../src/ask";

test("can model entity", () => {
  expect(ask("how much wood would a woodchuck chuck?")).toEqual("I have no idea.");
});
