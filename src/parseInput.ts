export const parseInput = (sentence: string): object => {
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
