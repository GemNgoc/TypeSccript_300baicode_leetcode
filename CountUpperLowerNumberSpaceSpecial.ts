/*
Cho 1 string, đếm chữ hoa, chữ thường, số, khoảng trắng, ký tự đặc biệt
*/

function countUpperLowerNumberSpaceSpecial2(str: string | null) {
  if (str === null) {
    console.log("String is null");
    return;
  }
  if (str.length === 0) {
    console.log("String is empty");
    return;
  }

  let regexUpper: RegExp = /[A-Z]/;
  let regexLower: RegExp = /[a-z]/;
  let regexNumber: RegExp = /[0-9]/;
  let regexSpace: RegExp = /\s/;
  let regexSpecial: RegExp = /[^a-zA-Z0-9\s]/;
  let countUpper: number = 0;
  let countLower: number = 0;
  let countNumber: number = 0;
  let countSpace: number = 0;
  let countSpecial: number = 0;

  str.split("").forEach((elm) => {
    if (regexUpper.test(elm)) {
      countUpper++;
    } else if (regexLower.test(elm)) {
      countLower++;
    } else if (regexNumber.test(elm)) {
      countNumber++;
    } else if (regexSpace.test(elm)) {
      countSpace++;
    } else if (regexSpecial.test(elm)) {
      countSpecial++;
    } else console.log("Other words. The code might be incorrect somewhere");
  });
  console.log("String length is ", str.length);
  console.log("Upper: ", countUpper);
  console.log("Lower: ", countLower);
  console.log("Number: ", countNumber);
  console.log("Space: ", countSpace);
  console.log("Special: ", countSpecial);
}

//Valid cases
countUpperLowerNumberSpaceSpecial2("Toi () di hoc @ 0123 %&*%");
countUpperLowerNumberSpaceSpecial2(" ");

//Invalid cases
countUpperLowerNumberSpaceSpecial2(null);
countUpperLowerNumberSpaceSpecial2("");
