/*
 * Problem:
 * Write  a method to return the number of vowels in a given string.
 * Vowel characters are: a, e, i, o, u (both uppercase and lowercase).
 * if input length is empty, return 0.
 * ìf input length is not empty, return the number of vowels in the string.
 * Example: input = "Hello" => the number of vowels is 2
 */

function countVowel2(str: string | null) {
  if (str === null) {
    console.log("String is null");
    return;
  }
  if (str.trim().length === 0) {
    console.log("String is empty");
    return;
  }

  let regexVowel: RegExp = /[ueoaiUEOAI]/;
  let countVowel: number = 0;

  str.split("").forEach((elm) => {
    if (regexVowel.test(elm)) {
      countVowel++;
    }
  });

  if (countVowel === 0) {
    console.log(`There is no vowels`);
  } else {
    console.log(`Count of vowel: ${countVowel}`);
  }
}

//Valid cases
countVowel2("UEOAIueoai");
countVowel2("auefoi%$");

//Invalid cases
countVowel2(null);
countVowel2("");
countVowel2("    ");
countVowel2("bcdwqy");
countVowel2("12345");
