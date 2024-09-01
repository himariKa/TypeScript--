"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showSigma2N(n) {
    var ans = 0;
    for (var i = 1; i <= n; i++) {
        ans += i;
    }
    console.log("\u7D50\u679C".concat(ans));
}
var num = 100;
showSigma2N(num);
function showCircumference(radius, pi) {
    if (pi == undefined) {
        pi = 3.14;
    }
    var circumference = 2 * pi * radius;
    console.log("\u534A\u5F84".concat(radius, "\u306E\u5186\u5468\u306E\u9577\u3055:").concat(circumference));
}
showCircumference(4, 3.142);
showCircumference(8);
function showCircumference2(radius, pi) {
    if (pi === void 0) { pi = 3.14; }
    var circumference = 2 * pi * radius;
    console.log("\u534A\u5F84".concat(radius, "\u306E\u5186\u5468\u306E\u9577\u3055:").concat(circumference));
}
showCircumference2(4, 3.142);
showCircumference2(8);
function sumScores() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, scores_1 = scores; _a < scores_1.length; _a++) {
        var score = scores_1[_a];
        total += score;
    }
    return total;
}
var total6 = sumScores(3, 4, 5, 6, 7);
console.log(total6);
function showTriangleArea(width, height) {
    var triangleArea = width * height * 0.5;
    return triangleArea;
}
var totalTriangleArea = 0;
var triangle1 = showTriangleArea(2, 3);
totalTriangleArea += triangle1;
console.log(totalTriangleArea);
var triangle2 = showTriangleArea(25, 15);
console.log(triangle2);
function calcRectangleArea(height, width) {
    if (width === void 0) { width = height; }
    var rectangleArea = height * width;
    return rectangleArea;
}
var total4 = calcRectangleArea(11, 24);
console.log("\u7E2611\u3067\u6A2A24\u306E\u9577\u65B9\u5F62\u306E\u9762\u7A4D:".concat(total4));
var total5 = calcRectangleArea(13);
console.log("\u4E00\u8FBA\u304C13\u306E\u6B63\u65B9\u5F62\u306E\u9762\u7A4D".concat(total5));
function showGrossProfit(revenue, gross) {
    if (gross === void 0) { gross = 0.7; }
    var profit = revenue * 0.9 * gross;
    console.log("".concat(revenue, "\u306E\u7C97\u5229:").concat(profit, "(\u7C97\u5229\u7387").concat(gross, ")"));
}
showGrossProfit(1245615, 0.8);
showGrossProfit(2214568);
