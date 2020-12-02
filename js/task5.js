/**
 *
 * "aabc" => 2
 */

const duplicateCount = (text) => {
  if (text && typeof text === "string") {
    const letters = text.toLowerCase().split("");
    const alphabet = [];

    letters.forEach((char, _, arr) => {
      if (!alphabet.includes(char)) {
        const charRepeats = arr.filter((currentChar) => currentChar === char);
        charRepeats.length && charRepeats.length > 1 && alphabet.push(char);
      }
    });

    return alphabet.length;
  }

  return 0;
};
