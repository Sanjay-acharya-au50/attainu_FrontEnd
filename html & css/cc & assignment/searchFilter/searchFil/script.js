
function myFunction() {

    let input = document.getElementById("myInput");

    let filter = input.value.toUpperCase();

    let ul = document.getElementById("myUL");

    let li = ul.getElementsByTagName("li");
    
    for (i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0];
        let txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    };
}
console.log("hello world");

// let arr = [ 1,2,3,4,5,6,7,8,9,12,20];



// let fil = arr.filter(myFun);

// function myFun(age){
//     if(age){
//         return age;
//     }
// }
// console.log(myFun(5));
// console.log(fil);


let a = "san";

console.log(a.indexOf("m"));