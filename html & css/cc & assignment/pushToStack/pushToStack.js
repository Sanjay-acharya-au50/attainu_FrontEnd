let inp = document.getElementById("stack");
// console.log(inp)
var a = [];

function pushToStac(){
    a.push(inp.value);
    inp.value = [];
    ans.innerText = a;
    inp.focus();
};

function popFromStack() {
    a.pop();
    inp.value = [];
    ans.innerText = a;
};

function clearStack() {
    a = [];
    inp.value = [];
    ans.innerText = a;
};
