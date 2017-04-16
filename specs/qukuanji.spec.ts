import { QuKuanJi } from "../src/";
describe("Given a question prompt", () => {
  const classUnderTest = new QuKuanJi();
  describe("When I ask a stupid question", () => {
    test("Then I should see I have no idea", () => {
      const e = classUnderTest.ask("how much wood could a woodchuck chuck ?");
      expect(e).toEqual("I have no idea.");
    });
  });
});
describe("Given numeral training data", () => {
  const classUnderTest = new QuKuanJi();
  classUnderTest.trainRoman("a is I");
  classUnderTest.trainRoman("b is V");
  describe("When I ask what is", () => {
    test("Then is should provide it", () => {
      expect(classUnderTest.whatIs("a")).toEqual("I");
      expect(classUnderTest.whatIs("b")).toEqual("V");
    });
  });
  describe("When I ask how much", () => {
    test("Then is should provide it", () => {
      expect(classUnderTest.howMuch("how much is a b ?")).toEqual(4);
      expect(classUnderTest.howMuch("how much is b a ?")).toEqual(6);
    });
  });

});

describe("Given mineral unit value training data", () => {
  const classUnderTest = new QuKuanJi();
  classUnderTest.trainRoman("a is I");
  classUnderTest.trainRoman("c is X");
  classUnderTest.trainMineral("a a Silver is 34 simoleans");
  classUnderTest.trainMineral("c c Iron is 3910 simoleans");
  describe("When I ask what is", () => {
    test("Then is should provide it", () => {
      expect(classUnderTest.whatIsTheUnitValueOf("Silver")).toEqual(17);
      expect(classUnderTest.whatIsTheUnitValueOf("Iron")).toEqual(195.5);
    });
  });
  describe("When I ask how many", () => {
    test("Then is should provide it", () => {
      expect(classUnderTest.howMany("how many simoleans is a a Silver ?")).toEqual(34);
      expect(classUnderTest.howMany("how many simoleans is a c Silver ?")).toEqual(153);
    });
  });
});
