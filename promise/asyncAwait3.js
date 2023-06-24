console.log("hello world");



const myPromise = (() => Promise.resolve("hellow 1"));
// function myPromise(){
//     new Promise((resolve)=>resolve("hello 1"))
// }


function foo() {
    myPromise().then((data) => console.log(data));
    console.log("hello 2");
}
foo();

async function foo1() {

    console.log(await myPromise());
    console.log("hello 3")

}

                

foo1();

