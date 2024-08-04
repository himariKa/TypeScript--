export {}

// 問い1
const num1 = Math.round(Math.random() * 10);

console.log(num1);

if (num1 <= 4){
    console.log("四捨五入すると0");
}else{
    console.log("四捨五入すると10");
}

// 問い2
const num2 = Math.round((Math.random() * (70 - 0) ) + 1950);
console.log(num2);

if (num2 % 4 == 0){
    console.log("閏年です");
}else{
    console.log("閏年ではありません");
}

// 問い3
const x = Math.round(Math.random() * 10);
const y = Math.round(Math.random() * 10);

console.log(x,y);

if (x == y){
    console.log("同じ！");
}else{
    console.log("違う！");
}

// 問い4・問い5
const year = Math.round(Math.random() * (121 -1) + 1900 );
console.log(year);

if(year < 1926){
    const wareki = year - 1911;
    console.log(`${year}年は大正${wareki}です`);
}else if(year < 1989){
    const wareki = year - 1925;
    console.log(`${year}年は昭和${wareki}です`);
}else if (year < 2019){
    const wareki = year - 1988;
    console.log(`${year}年は平成${wareki}です`);
}else{
    const wareki = year - 2018;
    console.log(`${year}年は令和${wareki}です`);
}

// 問い6
const BirthDayOfA = Math.round(Math.random() * (2018 - 1950) + 1950);
const BirthDayOfB = Math.round(Math.random() * (2018 - 1950) + 1950);

console.log(BirthDayOfA);
console.log(BirthDayOfB);

if (BirthDayOfA >= 1989 && BirthDayOfB >= 1989){
    console.log("どちらも平成生まれ");
}else if (BirthDayOfA >= 1989 || BirthDayOfB >= 1989){
    console.log("どちらかが平成生まれ");
}else{
    console.log("両方とも昭和生まれ")
}


// 問い7
const contest = Math.round(Math.random() * 10);
console.log(contest);

switch (contest){
    case 1:
        console.log("金賞！");
        break
    case 2:
        console.log("銀賞！");
        break
    case 3:
        console.log("銅賞！");
        break
    default:
        console.log("ティッシュ賞！");
}