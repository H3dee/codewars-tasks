/**
 *
 * "abc" => "A-Bb-Ccc"
 */

const accum = (sequence) => {
  const separatedSeq = sequence.toLowerCase().split("");
  let accumulator = "";

  separatedSeq.forEach((char, index) => {
    const subSeq = Array.from({ length: index + 1 }, (_, i) => {
      return (
        (i === 0 ? char.toUpperCase() : char) + (i === index + 1 ? "" : "-")
      );
    });

    accumulator += subSeq;
  });

  return accumulator;
};


