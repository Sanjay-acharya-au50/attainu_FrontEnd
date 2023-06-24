    console.log("hello world");
let obj = [{
    "question" : "what is the correct answer for 1+1?",
    "d" : "2",
    "a" : "88",
    "c" : "31",
    "b" : "22",
    "ans" : "4"
},
{
    "question" : " 3+1? what is the correct answer for",
    "d" : "0",
    "a" : "0",
    "c" : "0",
    "b" : "22",
    "ans" : "4"
}];

 
let que = document.getElementById("question")
let inpName = document.querySelectorAll(".inp");

    let index = 0;
    let end = obj.length;
    let mcq = obj[index];
    let right = 0;
    let wrong = 0;

    function loadQuestion(){

            if(index == end){
            return reset();
    
        }
        que.innerText = `${index + 1}) ${mcq.question}`
        // let log = inpName[0].nextElementSibling.innerText = mcq.a;
        // console.log("log : ",log);
        // console.log(index);
        // inpName[1].nextElementSibling.innerText = mcq.b;
        // inpName[2].nextElementSibling.innerText = mcq.c;
        // inpName[3].nextElementSibling.innerText = mcq.d;
        document.getElementById("a").innerText = obj[1].a;
    };
    loadQuestion();
    
    function submit(){
        let correctFun = getAns();
        let data = obj[0];
        if(correctFun == data.ans){
            // alert("true")
            right++
        }
        else{
            // alert("false")
            wrong++;
        }
        index++;

        console.log("right :",right);
        console.log("wrong:",wrong);
        console.log("index:",index);
        loadQuestion();
    }

    
        
    
    function reset(){
        document.getElementById("result").innerText = "thank u"
        }
    

    function getAns(){
        let inpName = document.getElementsByName("s")
        let answer;
        inpName.forEach((input) => {
            if(input.checked){
                answer = input.value;
            }
        });
        return answer;
    }


// fetch("https://randomuser.me/api/").then(v=>v.json()).then(data=>console.log(data))
