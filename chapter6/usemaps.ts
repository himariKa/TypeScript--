//export {}

const heightList = new Map();
heightList.set("Tomoko",145.4);
heightList.set("Saki",156.8);
heightList.set("Yumi",149.8);

const tomokoHeight = heightList.get("Tomoko");
console.log(`Tomokoの身長は${tomokoHeight}です`);

// for (const [key,value] of heightList){
//     console.log(`キーは${key}で値は${value}だよ！`);
// }

const list : number[] = [15,36,21,48,64,59,7];
let sum = 0;

// for (let i = 0; i < list.length ;i++){
//     console.log(list[i]);
// }

// for (let i = 0; i < list.length ; i++){
//     sum += list[i];
//     console.log(sum);
// }

const classSumMenber :{[key:string]:number}={
    "い組":35,
    "ろ組":36,
    "は組":37
}

for (const key in classSumMenber){
    console.log(`${key}の人数:${classSumMenber[key]}`);
}

for (const key in classSumMenber){
    sum += classSumMenber[key];
    console.log(sum);
}

const classMates = new Map();
classMates.set("い組",35);
classMates.set("ろ組",35);
classMates.set("は組",35);

for (const [key,value] of classMates){
    console.log(`組の名前は${key}です。人数は${value}人です`);
}