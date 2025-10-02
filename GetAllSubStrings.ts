/**
 * given a string, return number of  substrings have length = 2
 * example:
 *Input: hello
 * Output: h, he, hel, hell, hello, e, el, ell, ello, l, ll, llo, l, lo, o
 */

function getAllSubStrings1(str: string | null) {
  if (str === null) {
    console.log("String is null");
    return;
  }
  if (str.trim().length === 0) {
    console.log("String is empty");
    return;
  }

  let arr: string[] = [];
  for (let i = 0; i < str.length; i++)
    for (let j = i + 1; j < str.length + 1; j++) {
      arr.push(str.substring(i, j));
    }
  console.log(arr);
}
//Valid cases
getAllSubStrings1("hello");

//Invalid cases
getAllSubStrings1(null);
getAllSubStrings1("");
getAllSubStrings1("  ");
