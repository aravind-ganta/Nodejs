const fs= require("fs");
const os= require("os");

console.log(os.cpus().length);
// Sync
// fs.writeFileSync('./test.txt', 'Hello World!');

// Async
// fs.writeFile("./test.txt","Hello world Async", (err)=>{})

const result=fs.readFile("./contacts.txt","utf-8", (err,result)=>{
    if(err){
        console.log("Error",err);
    }else{
        console.log(result);
    }
});
console.log(result);


fs.appendFileSync("./test.txt", `${Date.now()}Hey there \n`);

// fs.cpSync("./test.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");

console.log(fs.statSync('./test.txt').isFile());

fs.mkdirSync("my-docs/a/b",{recursive: true});