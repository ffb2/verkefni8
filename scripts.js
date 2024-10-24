/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

import { reverse } from "./lib/reversed.js";
import { longest } from "./lib/longest.js";
import { shortest } from "./lib/shortest.js";
import { vowels } from "./lib/vowels.js";
import { consonants } from "./lib/consonants.js";
import { palindrome } from "./lib/palindrome.js";

const formElement = document.querySelector("form");
/**
 * Þetta er fall sem sér um að meðhöndla Sumbit
 * Það er virkjað við að ýtta á button geymir t.d. string
 * @param {*} event 
 */
function submitHandler(event) {
  event.preventDefault();
  const { target } = event;
  const textareaElement = target.querySelector("textarea");
  //Strengur sem fæst frá textarea
  const str = textareaElement.value;
  console.log(str);

  const inputElement = document.querySelector(".input");

  if (inputElement) {
    inputElement.textContent = str;
  }

  const longestElement = document.querySelector(".longest");

  if (longestElement) {
    longestElement.textContent = longest(str);
  }

  const shortestElement = document.querySelector(".shortest");

  if (shortestElement) {
    shortestElement.textContent = shortest(str);
  }

  const vowelsElement = document.querySelector(".vowels");

  if (vowelsElement) {
    vowelsElement.textContent = vowels(str).toString();
  }

  const consonantsElement = document.querySelector(".consonants");

  if (consonantsElement) {
    consonantsElement.textContent = consonants(str).toString();
  }

  const palindromeElement = document.querySelector(".palindrome");

  if (palindromeElement) {
    if (palindrome(str)) {
      palindromeElement.textContent = "";
    } else {
      palindromeElement.textContent = "ekki";
    }
  }

  const reversedElement = document.querySelector(".reversed");

  if (reversedElement) {
    reversedElement.textContent = reverse(str);
  }
}

const button = document.getElementById("submit");

button?.addEventListener("click", () => {
  if (formElement) {
    formElement.addEventListener("submit", submitHandler);
    /**
     * @param {Element} el
     */
    function removeHidden(el) {
      el.classList.remove("hidden");
    }

    const outputElement = document.querySelector(".output");
    if (outputElement) {
      removeHidden(outputElement);
    }
  }
});
/**
 * Þetta er addHidden fall
 * @param {Element} el
 */
function addHidden(el) {
  el.classList.add("hidden");
}
/**
 * Þetta fall gerir hidden í css aftur virkt og
 * felur það
 */
function resetHandler() {
  const outputElement = document.querySelector(".output");
  if (outputElement) addHidden(outputElement);

  const longestElement = document.querySelector(".longest");
  if (longestElement) longestElement.textContent = "";

  const shortestElement = document.querySelector(".shortest");
  if (shortestElement) shortestElement.textContent = "";

  const vowelsElement = document.querySelector(".vowels");
  if (vowelsElement) vowelsElement.textContent = "";

  const consonantsElement = document.querySelector(".consonants");
  if (consonantsElement) consonantsElement.textContent = "";

  const palindromeElement = document.querySelector(".palindrome");
  if (palindromeElement) palindromeElement.textContent = "ekki";

  const reversedElement = document.querySelector(".reversed");
  if (reversedElement) reversedElement.textContent = "";
}

const resetButton = document.getElementById("reset");
if (resetButton) {
  resetButton.addEventListener("click", resetHandler);
}
