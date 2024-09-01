"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nameList = ["山田", "田中", "佐藤"];
console.log(nameList);
nameList[4] = "森";
console.log(nameList);
var heightList = {
    "Yukimi": 123,
    "Yumi": 155,
    "Kento": 169
};
for (var key in heightList) {
    console.log("".concat(key, "\u3055\u3093\u306E\u8EAB\u9577\u306F").concat(heightList[key]));
}
heightList["Yukimi"] = 144;
heightList["Saki"] = 155;
for (var key in heightList) {
    console.log("".concat(key, "\u3055\u3093\u306E\u8EAB\u9577\u306F").concat(heightList[key]));
}
