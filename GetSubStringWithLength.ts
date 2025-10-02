/**
 * given a string, return number of  substrings have length = 2
 * example:
 *Input: hello
 * Output: he,el,ll,lo
 */

function getSubStringWithLength1(str: string | null, strLength: number) {
  if (str === null) {
    console.log("String is null");
    return;
  }
  if (str.trim().length === 0) {
    console.log("String is empty");
    return;
  }
  if (strLength <= 0) {
    console.log("Length is invalid");
    return;
  }
  if (strLength - str.length > 0) {
    console.log("SubString does not exist");
    return;
  }

  let arr: string[] = [];
  for (let i = 0; i < str.length - strLength + 1; i++) {
    arr.push(str.substring(i, i + strLength));
  }

  console.log(arr);
}

//Valid cases
getSubStringWithLength1("hello", 1);
getSubStringWithLength1("hello", 2);
getSubStringWithLength1("hello", 3);
getSubStringWithLength1("hello", 5);

//Invalid cases
getSubStringWithLength1(null, 1);
getSubStringWithLength1(null, -1);
getSubStringWithLength1("", 1);
getSubStringWithLength1(" ", 1);
getSubStringWithLength1("abc", 0);
getSubStringWithLength1("abc", -1);
getSubStringWithLength1("hello", 6);
