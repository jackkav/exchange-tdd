import { QuKuanJi } from './qukuan'
import { createInterface, ReadLine } from "readline";
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
rl.setPrompt("Prompt> ");
rl.prompt();

rl.on("line", (line) => {
  const x = new QuKuanJi().ask(line);
  console.log(x);
  rl.prompt();
}).on("close", () => {
  console.log("Have a great day!");
  process.exit(0);
});
