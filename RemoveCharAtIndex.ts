/*  Input: "hello", delete at index = 1
    Output: "hllo"

 */

function removeCharAtIndex1(str: string | null, index: number) {
  if (str === null) {
    console.log("String is null");
    return;
  }
  if (str.trim().length === 0) {
    console.log("String is empty");
    return;
  }
  if (index < 0 || index >= str.length) {
    console.log("Index is invalid");
    return;
  }
  let str1: string = "";
  let str2: string = "";
  str1 = str.substring(0, index);
  str2 = str.substring(index + 1);
  console.log("A new string: ", str1 + str2);
}

//Valid cases
removeCharAtIndex1("hello", 0);
removeCharAtIndex1("hello", 1);
removeCharAtIndex1("hello", 4);
//Invalid cases
removeCharAtIndex1(null, 1);
removeCharAtIndex1("", 1);
removeCharAtIndex1(" ", 1);
removeCharAtIndex1("hello ", -1);
removeCharAtIndex1("hello", 5);
removeCharAtIndex1("hello ", 6);
