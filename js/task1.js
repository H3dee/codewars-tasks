/**
 * Given: an array containing hashes of names

 Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

 list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
 returns 'Bart, Lisa & Maggie'

 list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
 */

const list = (namesList) => {
  if (namesList instanceof Array && namesList.length > 0) {
    const formated = namesList.reduce((accum, item, index, arr) => {
      if (item.name && typeof item.name === "string") {
        const separator =
          index + 1 === arr.length || index + 1 === arr.length - 1
            ? " & "
            : ", ";

        return accum + item.name + separator;
      }
      return accum;
    }, "");
    
    return formated.substring(0, formated.length - 3);
  }

  return "";
};
