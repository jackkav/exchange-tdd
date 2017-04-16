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
  numeral: string;
  assignedTo: string;
}
interface IMineralPrice {
  name: string;
  price: number;
}
export class QuKuanJi {
  public localCurrency: string;
  private romanList: INumeralAssignment[] = [];
  private mineralList: IMineralPrice[] = [];

  constructor(localCurrency: string = "simoleans") {
    this.localCurrency = localCurrency;
  }

  public trainRoman(s: string) {
    this.romanList.push({
      assignedTo: this.leftOfIs(s),
      numeral: this.rightOfIs(s),
    });
  }
  public trainMineral(s: string) {
    const left = this.leftOfIs(s);
    const right = this.rightOfIs(s);
    const numericalValue: number = +right.replace(this.localCurrency, "").trim();

    const mineral = this.getLastWord(left);
    const foreignValue = left.replace(mineral, "").trim();

    const roman = this.lookupRomanNumerals(foreignValue);
    const arabic = roman2decimal(roman);
    this.mineralList.push({ name: mineral, price: numericalValue / arabic });
  }

  public whatIs(s: string): string {
    const a = this.romanList.filter((x) => x.assignedTo === s)[0];
    return a && a.numeral;
  }

  public whatIsTheUnitValueOf(s: string): number {
    const a = this.mineralList.filter((x) => x.name === s)[0];
    return a && a.price;
  }

  public howMany(s: string): number {
    const left = this.leftOfIs(s);
    let right = this.rightOfIs(s);
    right = right.replace("?", "").trim();
    const mineral = this.getLastWord(right);
    right = right.replace(mineral, "").trim();
    const roman = this.lookupRomanNumerals(s);
    return roman2decimal(roman) * this.whatIsTheUnitValueOf(mineral);
  }

  public howMuch(s: string): number {
    let right = this.rightOfIs(s);
    if (!this.romanList.some((x) => right.split(" ").includes(x.assignedTo))) {
      return null;
    }
    right = right.substring(0, right.length - 1);
    const roman = this.lookupRomanNumerals(s);
    return roman2decimal(roman);
  }

  public ask(s: string) {
    if (s.startsWith("how many ")) {
      return this.howMany(s);
    } else if (s.startsWith("how much ")) {
      return this.howMuch(s) !== null || "I have no idea.";
    } else if (s.includes(this.localCurrency)) {
      this.trainMineral(s);
      return "OK.";
    } else if (s.includes(" is ")) {
      this.trainRoman(s);
      return "OK.";
    }
    return "I have no idea.";
  }
  private lookupRomanNumerals(s: string): string {
    return s.split(" ")
      .map((x) => (x && this.whatIs(x)))
      .toString()
      .replace(/,/g, "");
  }
  private getLastWord(s: string): string {
    return s.split(" ")[s.split(" ").length - 1];
  }
  private leftOfIs(s: string): string {
    return s.split(" is ")[0];
  }
  private rightOfIs(s: string): string {
    return s.split(" is ")[1];
  }
}
