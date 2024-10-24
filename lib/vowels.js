/** Íslenskir sérhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');
function split(str, separator = ' ') {
  if (typeof str !== 'string') {
    return [];
  }

  return str.split(separator);
}

function countGivenCharactersInString(str, characters) {
  if (typeof str !== 'string') {
    return 0;
  }

  const splitStr = split(str, '');

  let count = 0;

  for (const char of splitStr) {
    if (characters.includes(char)) {
      count += 1;
    }
  }

  return count;
}
//Fallið skilar hve margir sérhjólðar eru í streng
export function vowels(str) {
  return countGivenCharactersInString(str, VOWELS);
}
console.assert(
  vowels('halló') === 2,
  'vowels: skilar fjölda sérhljóða í streng',
);
console.assert(vowels('') === 0, 'vowels: skilar 0 ef tómur strengur');
console.assert(
  vowels(null) === 0,
  'vowels: skilar 0 ef ekki er gefinn strengur',
);
