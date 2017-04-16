// Feature: Foreign Exchange
//   As a user of a ForEx machine
//   I want to inquire about rates
//   So that I can exchange currencies

// Scenario: Asking a question
//   Given a question prompt
//   When I ask a stupid question
//   Then I should see "I have no idea."
import { roman2decimal } from "./roman";
interface INumeralAssignment {
  left: string;
  right: string;
}
interface IMineralValue {
  name: string;
  value: number;
}
export class QuKuanJi {
  public localCurrency: string;
  private romanList: INumeralAssignment[] = [];
  private mineralList: IMineralValue[] = [];
  constructor(localCurrency: string = 'simoleans') {
    this.localCurrency = localCurrency;
  }

  public trainRoman(s: string) {
    this.romanList.push({ left: s.split(" is ")[0].trim(), right: s.split(" is ")[1].trim() });
  }

  public trainMineral(s: string) {
    const left = s.split(" is ")[0];
    const right = s.split(" is ")[1];
    const mineral = left.split(" ")[left.split(" ").length - 1];
    const numericalValue: number = +right.replace(this.localCurrency, "").trim();
    const foreignValue = left.replace(mineral, "").trim();
    const roman = foreignValue.split(" ")
      .map((x) => (x && this.whatIs(x)))
      .toString()
      .replace(/,/g, "");
    const arabic = roman2decimal(roman);
    this.mineralList.push({ name: mineral, value: numericalValue / arabic });
  }

  public whatIs(s: string): string {
    const a = this.romanList.filter((x) => x.left === s)[0];
    return a && a.right;
  }

  public whatIsTheUnitValueOf(s: string): number {
    const a = this.mineralList.filter((x) => x.name === s)[0];
    return a && a.value;
  }

  public howMany(s: string): number {
    const left = s.split(" is ")[0];
    let right = s.split(" is ")[1];
    right = right.replace("?", "").trim();
    const mineral = right.split(" ")[right.split(" ").length - 1];
    right = right.replace(mineral, "").trim();
    const roman = right.split(" ")
      .map((x) => (x && this.whatIs(x)))
      .toString()
      .replace(/,/g, "");
    return roman2decimal(roman) * this.whatIsTheUnitValueOf(mineral);
  }

  public howMuch(s: string): number {
    let right = s.split(" is ")[1];
    // if (!right) { return "I have no idea."; }
    right = right.substring(0, right.length - 1);
    const roman = right.split(" ")
      .map((x) => (x && this.whatIs(x)))
      .toString()
      .replace(/,/g, "");
    return roman2decimal(roman);
  }

  public ask(s: string) {
    if (s.startsWith("how many")) {
      return this.howMany(s);
    } else if (s.startsWith("how much")) {
      return this.howMuch(s);
    } else if (s.includes(this.localCurrency)) {
      this.trainMineral(s);
      return "OK.";
    } else if (s.includes("is")) {
      this.trainRoman(s);
      return "OK.";
    }
    return "I have no idea.";
  }
}
