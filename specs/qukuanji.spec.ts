// Feature: Foreign Exchange
//   As a user of a ForEx machine
//   I want to inquire about rates
//   So that I can exchange currencies

// Scenario: Asking a question
//   Given a question prompt
//   When I ask a stupid question
//   Then I should see "I have no idea."
import { roman2decimal } from "../src/roman";
class QuKuanJi {
  // public acceptedCurrency: string = "simoleans";
  // constructor(public bank: string, public branch: string) {
  //   this.fullName = firstName + " " + middleInitial + " " + lastName;
  // }
  private data = [];
  public train(s: string) {
    this.data.push({ left: s.split(" is ")[0].trim(), right: s.split(" is ")[1].trim() });
  }
  public whatIs(s: string): string {
    const a = this.data.filter((x) => x.left === s)[0];
    return a && a.right;
  }
  public howMuch(s: string): number {
    let right = s.split(" is ")[1];
    right = right.substring(0, right.length - 1);
    const roman = right.split(" ")
      .map((x) => (x && this.whatIs(x)))
      .toString()
      .replace(/,/g, "");
    return roman2decimal(roman);
  }
  public ask(s: string) {
    return "I have no idea.";
  }
}
describe("Given a question prompt", () => {
  const classUnderTest = new QuKuanJi();
  describe("When I ask a stupid question", () => {
    test("Then I should see I have no idea", () => {
      const e = classUnderTest.ask("how much wood could a woodchuck chuck ?");
      expect(e).toEqual("I have no idea.");
    });
  });
});
describe("Given training data", () => {
  const classUnderTest = new QuKuanJi();
  classUnderTest.train("a is I");
  classUnderTest.train("b is V");
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
