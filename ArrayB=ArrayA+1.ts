// 18.Cho môt mảng số nguyên int[] A, Viết một chương trình xuất ra mảng B = A + 1
// ví dụ: A = {1,3,2,4} ==> B = {1,3,2,5} A = {9,9,9} ==> B = {1,0,0,0}

function incrementArray1(arr: any[]) {
  if (arr.length === 0) {
    console.log("Array is empty");
    return;
  }

  let regexNumber: RegExp = /[0-9]/;
  let str: string = "";

  for (let i = 0; i < arr.length; i++) {
    if (!regexNumber.test(arr[i])) {
      console.log("Array contains non-numeric value");
      return;
    }
    str = str.concat(arr[i]);
  }

  str = (Number(str) + 1).toString();
  let newArray: number[] = [];
  newArray = str.split("").map(Number);

  console.log("New array: ", newArray);
}
// Valid cases
incrementArray1(["1", 3, 2, 4]);
incrementArray1([9, 9, 9]);

// Invalid cases
incrementArray1([]);
incrementArray1([1, 2, "a"]); // Non-numeric value
incrementArray1([1, 2, null]); // Non-numeric value
