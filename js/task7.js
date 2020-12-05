/**
 * You are developing an image hosting website.

You have to create a function for generating random and unique image filenames.

Create a function for generating a random 6 character string which will be used to access the photo URL.

To make sure the name is not already in use, you are given access to an PhotoManager object.

You can call it like so to make sure the name is unique

// at this point, the website has only one photo, hosted on the 'ABCDEF' url
photoManager.nameExists('ABCDEF'); // returns true
photoManager.nameExists('BBCDEF'); // returns false
Note: We consider two names with same letters but different cases to be unique.
 */

 
const photoManager = {
  nameStorage: new Set(),
  nameExists(name) {
    return this.nameStorage.has(name);
  },
};

const getRandom = (min = 1, max = 7) =>
  Math.round(Math.random() * (max - min) + min);

const generateName = () => {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g"];
  let imageName = "";

  for (let i = 0; i < 6; i++) {
    imageName += alphabet[getRandom() - 1].toUpperCase();
    photoManager.nameStorage.add(imageName);
  }

  return imageName;
};
