console.log("hello world!");
async function foo(){
    return 46;
};
foo().then((data)=>console.log(data));

async function foo1(){
    // this is not working as i expeccted!
    // return Promise.resolve(93);
    return 93;
}
foo1().then((val)=>console.log(val))

async function foo2(){
    return await Promise.resolve(1);
}
foo2().then((d)=> console.log(d));