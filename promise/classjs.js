// async function f() {
//     let result = 'first!';
//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve('done!'));
//     });
   
//     result = await promise;
   
//     console.log(result);
//   }
   
//   f();
//   console.log("hlo")
//   console.log("hlo")


const myPromise = () => Promise.resolve('I have resolved!');
 
function firstFunction() {
  myPromise().then(res => console.log(res));
  console.log('second');
}
 
async function secondFunction() {
  console.log(await myPromise());
  console.log('second');
}
 
firstFunction();
secondFunction();