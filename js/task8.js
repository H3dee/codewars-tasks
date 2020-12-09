/**
 * Complete the solution so that the function will break up camel casing, using a space between words.
Example
solution("camelCasing")  ==  "camel Casing"
 */

const solution = (str) =>
  str.split('').reduce((acc, char) => {
    if (char === char.toUpperCase()) return (acc += ` ${char}`)
    else return acc += char
  }, '')
