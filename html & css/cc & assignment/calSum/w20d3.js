
const InputNode1 = document.getElementById('num1');
const InputNode2 = document.getElementById('num2');

const buttonNode = document.getElementById("add_btn")

const AnsNode = document.getElementById("ans");

buttonNode.addEventListener('click', calculateSum);

function calculateSum(){
    let num1 = Number(InputNode1.value);
    let num2 = Number(InputNode2.value);
    AnsNode.innerText = num1 + num2;

}


