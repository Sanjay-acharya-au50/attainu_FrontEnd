console.log("hello word");

var a = [];

function pushToStac(x){
    a.push(x);
    x = [];

};
pushToStac(2);
console.log(a);


// var myId = document.getElementById("stack");

// var arr = [];
// function myPush(){

//     arr.push(myId.value);
//     myId.value = [];
//     printMyAns.innerText = arr;
//     myId.focus()

// }

// function myPop(){
//     arr.pop();
//     printMyAns.innerText = arr;
// }

// function myClear(){
//     arr = [];
//     printMyAns.innerText = arr;
// }