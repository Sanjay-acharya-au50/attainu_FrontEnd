console.log("hello world");


function fun(){
    tableData = ""
fetch("https://jsonplaceholder.typicode.com/users")
.then(val=>val.json())
.then(data => {
   
    // console.log(data);
    data.map( element => {
        tableData+= ` 
        <tr >

        <td>${element.name}</td>
        <td>${element.username}</td>
        <td>${element.email}</td>
        
        </tr>

        `


    });
    document.getElementById("list").innerHTML = tableData;

});
};

fun();

function myFun(){
    let myId = document.getElementById("myId").value.toUpperCase()
    // console.log(myId.value);

    // let fil = myId.value.toUpperCase();

    let table = document.getElementById("list");

    // let tr = document.getElementsByTagName("tr");

    let td = document.getElementsByTagName("td");


    for(let i = 0; i<td.length; i++){

        // console.log(td[i]);

        let a = td[i].textContent;

        text = a.toUpperCase() || a.innerText;

                if(text.toUpperCase().indexOf(myId) > -1){
                    td[i].style.display = "";
                }
        else{
            td[i].style.display = "none"
        }

    }


}
