import { createInterface, ReadLine } from "readline";
import { QuKuanJi } from "./qukuan";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.setPrompt("Prompt> ");

rl.prompt();

const ji = new QuKuanJi("Credits");

rl.on("line", (line) => {
  const x = ji.ask(line);
  console.log(x);
  rl.prompt();
}).on("close", () => {
  console.log("Have a great day!");
  process.exit(0);
});
