export {}

function showSigma2N(n:number) {
    let ans = 0;
    for (let i = 1;i <=n; i++){
        ans += i;
    }
    console.log(`結果${ans}`);
}

let num = 100;
showSigma2N(num);


function showCircumference(radius:number,pi?:number){
    if (pi == undefined){
        pi = 3.14;
    }
    const circumference = 2 * pi * radius;
    console.log(`半径${radius}の円周の長さ:${circumference}`);
}

showCircumference(4,3.142);
showCircumference(8);

function showCircumference2(radius:number,pi:number = 3.14){
    const circumference = 2 * pi * radius;
    console.log(`半径${radius}の円周の長さ:${circumference}`);
}

showCircumference2(4,3.142);
showCircumference2(8);

function sumScores(...scores:number[]):number{
    let total = 0;
    for (const score of scores){
        total += score;
    }
    return total;
}

const total6 = sumScores(3,4,5,6,7);
console.log(total6);

function showTriangleArea(width:number,height:number){
    const triangleArea = width * height *0.5;
    return triangleArea;
}

let totalTriangleArea  = 0;
const triangle1 = showTriangleArea(2,3);
totalTriangleArea += triangle1;
console.log(totalTriangleArea);

const triangle2 = showTriangleArea(25,15);
console.log(triangle2);

function calcRectangleArea(height:number,width:number = height){
    const rectangleArea = height * width;
    return rectangleArea;
}

const total4 = calcRectangleArea(11,24);
console.log(`縦11で横24の長方形の面積:${total4}`);

const total5 = calcRectangleArea(13);
console.log(`一辺が13の正方形の面積${total5}`);

function showGrossProfit(revenue :number,gross:number = 0.7){
    const profit = revenue * 0.9 * gross;
    console.log(`${revenue}の粗利:${profit}(粗利率${gross})`);
}

showGrossProfit(1245615,0.8);
showGrossProfit(2214568);