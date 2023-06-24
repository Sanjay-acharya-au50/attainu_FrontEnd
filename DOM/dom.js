

// console.log(myId);
// console.log(myPara);
// console.log(myHead2);

// lis[0].innerText = "man"

// myId.innerText = "san"


//  main-heading -----------------------------
const myId = document.getElementById("main-heading");
myId.style.backgroundColor = "orange"
myId.addEventListener( "clicks", ()=> {
    console.log("some one clicked")
});

myId.addEventListener( "mouseover", ()=> {
    console.log("someone hovering")
});



function myAction (){
    myId = myId.style.backgroundColor = "blue";
}

myId.addEventListener("click" , myAction);

//  paragraph! -----------------------------
const myPara = document.getElementById("para");
myPara.addEventListener("click", ()=>{

    myPara = myPara.style.backgroundColor = "red";

});




// collection example! -----------------------------

// const collection = document.getElementsByClassName("example");
// collection[1].innerText = "Hello World!";
// console.log(collection);


//  first button ! -----------------------------
const btn = document.querySelector("button");
// console.log(btn);
// btn.innerText = "clicked"
btn.addEventListener("click", ()=>{
    btn.innerText = "Be Patience!"
});


//  heading 2! -----------------------------
const myHead2 = document.getElementsByClassName("head2");

    btn.addEventListener("click", ()=>{
        myHead2[0].innerText = "Do you know good thing about time? it changes. One day everything will be fine";
    })



//  list items! -----------------------------
const lis = document.getElementsByClassName("items");
// console.log(lis);

    function itemsClick (){
        lis[0].style.backgroundColor = "red"
    };
    lis[0].addEventListener("mouseover", itemsClick);

    lis[0].addEventListener("mouseout", ()=> {
        lis[0].style.backgroundColor = "aqua"
    });
    

    lis[1].addEventListener("mouseover", ()=> {
        lis[1].style.backgroundColor = "red"
    });
    lis[1].addEventListener("mouseout", ()=>{
        lis[1].style.backgroundColor = "aqua"
    });

    lis[2].addEventListener("mouseover",()=>{
        lis[2].style.backgroundColor = "red"
    });
    lis[2].addEventListener("mouseout",()=>{
        lis[2].style.backgroundColor = "aqua"
    });


//  last button
const btn2 = document.getElementById("last-btn");
    btn2.addEventListener("click", ()=>{
        btn2.innerText = "clicked"
    });

    // motivational Quotes

    const moti = document.getElementById("example");

    btn2.addEventListener("click",()=>{
        moti.innerText = "dont give UP! DONT FORGET THAT YOU DREAMED! just do one last try!"
    })








