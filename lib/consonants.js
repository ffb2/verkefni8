/** Íslenskir samhljóðar */
const CONSONANTS = "bcdfghjklmnpqrstvwxz".split("");
function split(str, separator = " ") {
  if (typeof str !== "string") {
    return [];
  }

  return str.split(separator);
}

function countGivenCharactersInString(str, characters) {
  if (typeof str !== 'string') {
    return 0;
  }

  const splitStr = split(str, "");

  let count = 0;

  for (const char of splitStr) {
    if (characters.includes(char)) {
      count += 1;
    }
  }

  return count;
}
//Fallið skilar fjölda samhljóða í streng
export function consonants(str) {
  return countGivenCharactersInString(str, CONSONANTS);
}
console.assert(
  consonants("halló") === 3,
  "consonants: skilar fjölda samhljóða í streng"
);
console.assert(consonants("") === 0, "consonants: skilar 0 ef tómur strengur");
console.assert(
  consonants(null) === 0,
  "consonants: skilar 0 ef ekki er gefinn strengur"
);
