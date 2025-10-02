/*
Input: ab12c3
Output: abc and 123
*/

function separateLettersAndNumbers2(str: string | null) {
  if (str === null) {
    console.log("String is null");
    return;
  }
  if (str.trim().length === 0) {
    console.log("String is empty");
    return;
  }

  let str1: string = "";
  let str2: string = "";

  str.split("").forEach((elm) => {
    if (isNaN(Number(elm)) || elm.trim().length === 0) {
      str1 = str1.concat(elm);
    } else {
      str2 = str2.concat(elm);
    }
  });
  console.log("String with letters: ", str1);
  console.log("String with numbers: ", str2);
}
//Valid cases
separateLettersAndNumbers2("ab    45    d12c3");

//Invalid cases
separateLettersAndNumbers2(null);
separateLettersAndNumbers2("");
separateLettersAndNumbers2("  ");
