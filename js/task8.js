/**
 * Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing"
 */

const solution = (str) => {
  if(str && typeof str === 'string') {
    return str
    .split("")
    .map(
      (char, index, arr) =>
        char.toUpperCase() === char && arr.splice(index, 0, " ")
    )
    .join(" ");
  }

  return ''
};
