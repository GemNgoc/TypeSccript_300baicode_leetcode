//Viết hàm kiểm tra password hợp lệ
// password hợp lệ là password có ít nhất 8 ký tự, không chứ khoảng trắng, chứa chữ hoa, chữ thường, số và ký tự đặc biệt
function checkValidPassword1(password: string | null) {
  if (password === null) {
    console.log("Password is null");
    return;
  }

  if (password.length === 0) {
    console.log("Password is empty");
    return;
  }
  if (password.length < 8) {
    console.log("Password has its length less than 8 chars");
    return;
  }
  let regexSpace: RegExp = /\s/;
  if (regexSpace.test(password)) {
    console.log("Password contains space(s)");
    return;
  }

  let regexUpper: RegExp = /[A-Z]/;
  let regexLower: RegExp = /[a-z]/;
  let regexNumber: RegExp = /[0-9]/;
  let regexSpecial: RegExp = /[^a-zA-Z0-9\s]/;

  if (
    !regexUpper.test(password) ||
    !regexLower.test(password) ||
    !regexNumber.test(password) ||
    !regexSpecial.test(password)
  ) {
    console.log("Password is invalid");
  } else {
    console.log("Password is valid");
  }
}

// Password hợp lệ
checkValidPassword1("AAAfdf@1");
checkValidPassword1("AAAfdf@1=");
// Password không hợp lệ
checkValidPassword1(null);
checkValidPassword1("");
checkValidPassword1("AAfdf@1");
checkValidPassword1("AAA df@1");
checkValidPassword1("bAAA df@1");
checkValidPassword1("aaafdf@1");
checkValidPassword1("AAAFDF@1");
checkValidPassword1("AAAfdf@)");
checkValidPassword1("AAAfdf31");
checkValidPassword1("baaafdf@1");
checkValidPassword1("BAAAFDF@1");
checkValidPassword1("@AAAfdf@)");
checkValidPassword1("1AAAfdf31");
