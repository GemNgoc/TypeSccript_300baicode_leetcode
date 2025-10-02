// Viết chương trình tính số của biển số xe: sô trả về sẽ từ 0-9
//vd Biển số xe: 29A - 12345 => 2 + 9 + 1 + 2 + 3 + 4 + 5 = 26 => 2 + 6 = 8 return 8
function calculateLicensePlateNumber2(licensePlate: string | null) {
  if (licensePlate === null) {
    console.log("licensePlate is null.");
    return;
  }

  if (licensePlate.trim().length === 0) {
    console.log("licensePlate is empty.");
    return;
  }

  let arr: number[] = [];
  licensePlate.split("").forEach((elm) => {
    if (elm.trim().length !== 0 && !isNaN(Number(elm))) {
      arr.push(Number(elm));
    }
  });

  if (arr.length === 0) {
    console.log("licensePlate does not contain any numbers");
    return;
  }
  let sum: number = 0;
  sum = arr.reduce((sum, elm) => {
    return sum + elm;
  });
  while (sum >= 10) {
    sum = sum
      .toString()
      .split("")
      .map(Number)
      .reduce((sum, elm) => sum + elm);
  }

  console.log(`Result of (${licensePlate}) is ${sum}`);
}

// Valid cases
calculateLicensePlateNumber2("29A - 12345");
calculateLicensePlateNumber2("29A - 12345B");
calculateLicensePlateNumber2("1234567890");
calculateLicensePlateNumber2("29A - 3");
calculateLicensePlateNumber2("1");
// Invalid cases
calculateLicensePlateNumber2(null);
calculateLicensePlateNumber2("");
calculateLicensePlateNumber2("   ");
calculateLicensePlateNumber2("ABC"); // No numbers in the license plate
calculateLicensePlateNumber2("AA - BBBB");
