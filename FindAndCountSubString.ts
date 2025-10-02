/*
input: I study very hard. I want to study abroad.
Output: Count how many "study" in that text ==> 2
*/

function findAndCountSubString1(str: string | null, targetWord: string | null) {
  if (str === null || targetWord === null) {
    console.log("String or target word is null");
    return;
  }

  if (str.trim().length === 0 || targetWord.trim().length === 0) {
    console.log("String or target word is empty ");
    return;
  }

  if (!str.includes(targetWord)) {
    console.log("String does not contain the target word");
    return;
  }

  let count: number = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + targetWord.length) === targetWord) {
      count++;
    }
  }
  console.log(`Count of "${targetWord}": ${count}`);
}

//Valid case
findAndCountSubString1("I study very hard. I want to study abroad", "study");
//Invalid cases
findAndCountSubString1(null, "study");
findAndCountSubString1("I study very hard. I want to study abroad", null);
findAndCountSubString1(" ", "study");
findAndCountSubString1("I study very hard. I want to study abroad", " ");
findAndCountSubString1("I study very hard. I want to study abroad", "no");
