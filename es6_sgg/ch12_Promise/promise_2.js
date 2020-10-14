// 1. 引入模块

let fs = require('fs');

// 2. 直接读取
// fs.readFile('./resources/劝学.txt', (err, data) => {
//     if(err) throw err;

//     console.log(data.toString());
// })

// 3. 使用Promise进行读取

let p = new Promise((resolve, reject)=>{
    fs.readFile('./resources/劝学.txta', (err, data) => {
        if(err) reject(err);
        resolve(data);
    });
});

p.then((value)=>{
    console.log(value.toString());
}, (reason)=> {
    console.error(reason);
})