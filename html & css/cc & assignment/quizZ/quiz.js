const question = [{
    'que' : 'who is the founder of apple ?',
    'a' : 'shahRukh khan',
    'b' : 'salman khan',
    'c' : 'steve jobs',
    'd' : 'banana',
    'correct': 'c',

}
,

    {
        'que' : 'opposite word of plus ?',
        'a' : '1',
        'b' : 'plus',
        'c' : 'minus',
        'd' : '4',
        'correct': 'c'
    
    },
    {
        'que' : 'bisleri minerals since ?',
        'a' : '1947',
        'b' : '1950',
        'c' : '2023',
        'd' : '1969',
        'correct': 'd'
    
    }

];

let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;
const quesLoad = document.getElementById("quesLoad");
const optionInput = document.querySelectorAll('.options');
function loadQuestion(){
    if(index == total){
        return endQuiz();
    }
    reset();
    data = question[index];
    // console.log(data);
    quesLoad.innerText = `${index+1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
};

function submitQuiz(){
    data = question[index];
    let ans = getAns()
    if(ans == data.correct){
        right++
        console.log(right);
    }else{
        wrong++
    }
    index++;
    loadQuestion()
    return;
}

function getAns(){
    let answer;
    optionInput.forEach((input)=>{
        if(input.checked){
            answer = input.value;
        }
        //     console.log('yes');
        // }else{
            //     console.log('no');
            // }
        })
        return answer;
    }
    function reset(){
        optionInput.forEach(input=>{
            input.checked = false;
        })
    }
    function endQuiz(){
        document.getElementById('box').innerHTML = `
        <h3> Thank You! </h3> 
        You got  ${right} / ${total}
        `
    }
    
    
    loadQuestion();