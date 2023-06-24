
    var num1 = document.getElementById("dev1");
    var signLogic = document.getElementById("sel")
    var num2 = document.getElementById("dev2");
    var result = document.getElementById("displayShow") 





function calcuLate(){
    // alert("hellow")
    // alert(num1.value);
    // alert(signLogic.value)
    // alert(num2.value);

    if(signLogic.value == '+'){
      var result =  parseInt(num1.value)+parseInt(num2.value)
    }
    if(signLogic.value == '-'){
        var result =  parseInt(num1.value)-parseInt(num2.value)
      }
      if(signLogic.value == '/'){
        var result =  parseInt(num1.value)/parseInt(num2.value)
      }
      if(signLogic.value == 'x'){
        var result =  parseInt(num1.value) * parseInt(num2.value)
      }
      



    // alert(result)
    displayShow.innerText = parseInt(result);


}