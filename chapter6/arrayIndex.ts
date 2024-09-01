export{}

const nameList:string[] = ["山田","田中","佐藤"];
console.log(nameList);
nameList[4]="森";
console.log(nameList);

const heightList:{[key:string]:number} = 
{
    "Yukimi":123,
    "Yumi":155,
    "Kento":169
};

for (const key in heightList){
    console.log(`${key}さんの身長は${heightList[key]}`);
}

heightList["Yukimi"] = 144;
heightList["Saki"] = 155;

for (const key in heightList){
    console.log(`${key}さんの身長は${heightList[key]}`);
}