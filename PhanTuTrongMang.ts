/*
// let arr = [9,7,0,20,11,1,3];
// Sắp xếp tăng dần
// Tìm phần tử lớn nhất trong mảng
// Sắp xếp giảm dần
// Tìm phần tử nhỏ nhất trong mảng
// Đảo ngược mảng
// Tính tổng mảng
// Lấy ra mảng con có phần tử nhỏ hơn 5 và lớn hơn 5
*/

function basicFunctionsInArray(arr: number[]) {
  if (arr.length === 0) {
    console.log("Array is empty");
    return;
  }

  console.log("Array: ", arr);

  //Ascending array
  let newArray: number[] = [];
  newArray = arr.slice().sort((a, b) => a - b);
  console.log("Ascending array: ", newArray);
  console.log("Max value:", newArray[newArray.length - 1]);

  //Descending array
  newArray = arr.slice().sort((a, b) => b - a);
  console.log("Descending array: ", newArray);
  console.log("Min value:", newArray[newArray.length - 1]);

  //Reverse array
  newArray = arr.reverse();
  console.log("Reversed array: ", newArray);

  //Array sum
  let sum: number = 0;
  sum = arr.reduce((sum, elm) => sum + elm);
  console.log("Array sum: ", sum);

  //Filter arr
  let lessThan5: number[] = [];
  let greaterThan5: number[] = [];
  lessThan5 = arr.slice().filter((elm) => elm < 5);
  greaterThan5 = arr.slice().filter((elm) => elm > 5);
  console.log("Array with elements less than 5: ", lessThan5);
  console.log("Array with elements greater than 5: ", greaterThan5);
}
//Valid cases
let arr: number[] = [9, 7, 0, 20, 11, 1, 3];
basicFunctionsInArray(arr);

//Invalid cases
basicFunctionsInArray([]); // Mảng rỗng
