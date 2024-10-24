//Fallið skilar lengsta orði í streng
function split(str, separator = ' ') {
    if (typeof str !== 'string') {
      return [];
    }
  
    return str.split(separator);
  }
export function longest(str) {
    if (typeof str !== 'string') {
      return null;
    }
  
    const words = split(str, ' ');
  
    let longestWord = '';
    for (const word of words) {
      if (word.length > longestWord.length) {
        
        longestWord = word;
      }
    }
    return longestWord;
  }
  console.assert(
    longest('halló hæ') === 'halló',
    'longest: skilar lengsta orðinu',
  );
  console.assert(
    longest('halló halli') === 'halló',
    'longest: skilar fyrsta orðinu ef þau eru jafn löng',
  );
  console.assert(
    longest(null) === null,
    'longest: skilar null ef ekki er gefinn strengur',
  );
  console.assert(
    longest('') === '',
    'longest: skilar tómum streng ef tómur strengur er gefinn',
  );
  