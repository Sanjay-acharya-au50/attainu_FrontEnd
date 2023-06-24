

const x = document.getElementById("demo");
// console.log(x)


function getLocation(){

navigator.geolocation.getCurrentPosition(showPosition, failurefunction);

}

function showPosition(position){
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br> longitude: " + position.coords.longitude;
}
function failurefunction(){
    alert("api failed")
}


const myNode = document.getElementById("gApi")
console.log(myNode);

function getApi(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((Response)=> Response.json())
    .then((data)=>{
        console.log(data);
    console.log("data[1]: ", data[1])
        myNode.innerText = data[1];
    })
};