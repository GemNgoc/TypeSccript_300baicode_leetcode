/*  Input: "hello", delete "l"
    Output: "heo"

 */
function removeChar1(str: string | null, deletedChar: string | null) {
  if (str === null || deletedChar === null) {
    console.log("String or deleted char is null");
    return;
  }

  if (str.trim().length === 0 || deletedChar.trim().length === 0) {
    console.log("String or deleted char is empty ");
    return;
  }

  if (!str.includes(deletedChar)) {
    console.log("String does not contain the deleted char");
    return;
  }
  let newString: string = "";
  newString = str.split(deletedChar).join("");
  console.log(newString);
}

//Valid cases
removeChar1("hello", "l");
removeChar1("hello", "lo");

//Invalid cases
removeChar1(null, "l");
removeChar1("hello", null);
removeChar1(" ", "l");
removeChar1("hello", " ");
removeChar1("hello", "a");
