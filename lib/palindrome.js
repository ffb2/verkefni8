//Fallið skilar hvort strengur er sjálfhverfur
export function palindrome(str) {
  if (typeof str !== 'string' || str === '') {
    return false;
  } else {
    const lengd = str.length;
    const midja = Math.floor(lengd / 2);

    const fyrriHluti = str.toLowerCase()
    .slice(0, midja).split("");
    const seinniHluti = str.toLowerCase()
      .slice(lengd % 2 === 0 ? midja : midja + 1)
      .split("")
      .reverse();
    return fyrriHluti.join("") === seinniHluti.join("");
  }
}
console.assert(
    palindrome('racecar') === true);
