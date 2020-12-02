/**
 *
 * "abc" => "A-Bb-Ccc"
 */

const accum = (sequence) => {
  const separatedSeq = sequence.toLowerCase().split("");
  let accumulator = "";

  separatedSeq.forEach((char, index, arr) => {
    const subSeq = Array.from({ length: index + 1 }, (_, i) => {
      return i === 0 ? char.toUpperCase() : char;
    });
    index + 1 !== arr.length && subSeq.push("-");

    accumulator += subSeq.join("");
  });

  return accumulator;
};
