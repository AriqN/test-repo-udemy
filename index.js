const fs = require ('fs');

// const textIn = fs.readFileSync('./txt/input.txt','utf-8');
// console.log(textIn)
// const textOut = `Review tentang alpukat: ${textIn}.\n Created on : ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt',textOut)
// console.log(textOut)

const textStart = () =>{ fs.readFile('./txt/startd.txt','utf-8',(err,data1)=>{
    if (err) return console.log('hey its error!')
    fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2)=>{
        console.log(data2);
        fs.writeFile(`./txt/final.txt`, `${data1}is${data2}` ,'utf-8', err =>{
            console.log('data already exist')
        })
    })               
});
console.log('loading...')
}

textStart()
