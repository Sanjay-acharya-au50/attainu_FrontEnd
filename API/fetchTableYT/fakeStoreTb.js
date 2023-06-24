// alert('hello world')
//  console.log('hello');

fetch('http://fakestoreapi.com/products')
.then((data)=>{
    // console.log(data); // json format
    return data.json() // converted to object
})
.then((objectData)=>{
// .then((objectData)=>console.log(objectData[0].title));
    console.log(objectData)
    let tableData = "";
    objectData.map((values)=>{
    tableData += ` <tr>
    <td>${values.title}</td>
    <td>${values.description}</td>
    <td>${values.price}</td>
    <td><img src = "${values.image}"/></td>
  </tr>`
});
    document.getElementById('table_body').innerHTML = tableData;

});

