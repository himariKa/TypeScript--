"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 問い1
var num1 = Math.round(Math.random() * 10);
console.log(num1);
if (num1 <= 4) {
    console.log("四捨五入すると0");
}
else {
    console.log("四捨五入すると10");
}
// 問い2
var num2 = Math.round((Math.random() * (70 - 0)) + 1950);
console.log(num2);
if (num2 % 4 == 0) {
    console.log("閏年です");
}
else {
    console.log("閏年ではありません");
}
// 問い3
var x = Math.round(Math.random() * 10);
var y = Math.round(Math.random() * 10);
console.log(x, y);
if (x == y) {
    console.log("同じ！");
}
else {
    console.log("違う！");
}
// 問い4・問い5
var year = Math.round(Math.random() * (121 - 1) + 1900);
console.log(year);
if (year < 1926) {
    var wareki = year - 1911;
    console.log("".concat(year, "\u5E74\u306F\u5927\u6B63").concat(wareki, "\u3067\u3059"));
}
else if (year < 1989) {
    var wareki = year - 1925;
    console.log("".concat(year, "\u5E74\u306F\u662D\u548C").concat(wareki, "\u3067\u3059"));
}
else if (year < 2019) {
    var wareki = year - 1988;
    console.log("".concat(year, "\u5E74\u306F\u5E73\u6210").concat(wareki, "\u3067\u3059"));
}
else {
    var wareki = year - 2018;
    console.log("".concat(year, "\u5E74\u306F\u4EE4\u548C").concat(wareki, "\u3067\u3059"));
}
// 問い6
var BirthDayOfA = Math.round(Math.random() * (2018 - 1950) + 1950);
var BirthDayOfB = Math.round(Math.random() * (2018 - 1950) + 1950);
console.log(BirthDayOfA);
console.log(BirthDayOfB);
if (BirthDayOfA >= 1989 && BirthDayOfB >= 1989) {
    console.log("どちらも平成生まれ");
}
else if (BirthDayOfA >= 1989 || BirthDayOfB >= 1989) {
    console.log("どちらかが平成生まれ");
}
else {
    console.log("両方とも昭和生まれ");
}
// 問い7
var contest = Math.round(Math.random() * 10);
console.log(contest);
switch (contest) {
    case 1:
        console.log("金賞！");
        break;
    case 2:
        console.log("銀賞！");
        break;
    case 3:
        console.log("銅賞！");
        break;
    default:
        console.log("ティッシュ賞！");
}
