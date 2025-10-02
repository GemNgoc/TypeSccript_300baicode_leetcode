/*
###### Quy tắc phần username
✅Được chứa:
Chữ cái (a–z, A–Z)
Chữ số (0–9)
Các ký tự đặc biệt: . _ - +
Có thể có dấu . nhưng không được đứng đầu, không được đứng cuối, và không được lặp liên tiếp
❌ Không được chứa:
Khoảng trắng ( )
Ký tự đặc biệt lạ như , ; : <> () []
####### Quy tắc phần domain
✅ Được chứa:
Chữ cái (a–z, A–Z)
Chữ số (0–9)
Dấu gạch ngang - (nhưng không được đứng đầu hoặc cuối).
Dấu chấm . để phân tách các cấp miền (subdomain).
Ví dụ hợp lệ:
gmail.com
mail.yahoo.co.jp
❌ Không được chứa:
Ký tự đặc biệt khác (_ ! @ # $ % ...)
Khoảng trắng.
2 dấu chấm liên tiếp (..).
#######Điều kiện tối thiểu
Có duy nhất 1 dấu @.
Tên miền sau @ phải có ít nhất 1 dấu . (ví dụ: abc@domain ❌, abc@domain.com ✅).
Tổng độ dài địa chỉ email ≤ 254 ký tự.
Độ dài username ≤ 64 ký tự.
*/

function checkValidEmail2(email: string | null) {
  if (email === null) {
    console.log(`Email "${email}" is null`);
    return;
  }
  if (email.trim().length === 0) {
    console.log(`Email "${email}" is empty`);
    return;
  }
  if (!email.includes("@")) {
    console.log(`Email "${email}" does not contain @`);
    return;
  }
  if (email.length > 254) {
    console.log(`Email "${email}" has more than 254 chars`);
    return;
  }

  let indexofAt: number = email.indexOf("@");
  let username: string = email.substring(0, indexofAt);
  let domain: string = email.substring(indexofAt + 1);

  if (username.length > 64) {
    console.log(`Username "${username}" has more than 64 chars`);
    return;
  }
  if (username.startsWith(".") || username.endsWith(".")) {
    console.log(`Username "${username}" has a dot at the beginning or end`);
    return;
  }
  let regexInvalidDot = /[\.]{2,}/;

  if (regexInvalidDot.test(username)) {
    console.log(`Username "${username}" contains two consecutive dots`);
    return;
  }

  if (domain.startsWith(".") || domain.endsWith(".")) {
    console.log(`Domain "${domain}" has a dot at the beginning or end`);
    return;
  }

  if (domain.startsWith("-") || domain.endsWith("-")) {
    console.log(`Domain "${domain}" has a - at the beginning or end`);
    return;
  }
  if (regexInvalidDot.test(domain)) {
    console.log(`Domain "${domain}" contains two consecutive dots`);
    return;
  }

  let regexEmail: RegExp =
    /^[\w\.\-+]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]{2,})*\.[a-zA-Z0-9-]{2,}/;

  if (!regexEmail.test(email)) {
    console.log(`Email "${email}" is invalid`);
  } else {
    console.log(`Email "${email}" is valid`);
  }
}

//Email hợp lệ
checkValidEmail2("te.st@example.com");
checkValidEmail2("test_test+01@example.com");
checkValidEmail2("-test_test-@example.com");
checkValidEmail2("test@example--01.com");
checkValidEmail2("lan.man+test123@gmail.com");
checkValidEmail2("abc@domain.com");
checkValidEmail2("user.name+tag@gmail.com");
checkValidEmail2("test_123-xyz@mail.co.uk");

//  Email không hợp lệ:
checkValidEmail2(null);
checkValidEmail2("");
checkValidEmail2("   ");
checkValidEmail2("test");
checkValidEmail2(".test@example.com");
checkValidEmail2("test.@example.com");
checkValidEmail2("te..st@example.com");
checkValidEmail2("test@-example.com");
checkValidEmail2("test@example.com-");
checkValidEmail2("test@example..com");
checkValidEmail2("te st@example.com");
checkValidEmail2("test@ex ample.com");
checkValidEmail2("test@.example.com");
checkValidEmail2("test@example.com.");
checkValidEmail2("te@#$st@example.com");
checkValidEmail2("test@exa*^()mple.com");
checkValidEmail2("test@.ex_ample.com");
checkValidEmail2("abc@domain");
checkValidEmail2("test@example.c");
checkValidEmail2("test_123-xyz@mail.o.uk");
