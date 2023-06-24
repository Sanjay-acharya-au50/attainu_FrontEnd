console.log('hello world');

function getData(){
    fetch(' https://v6.exchangerate-api.com/v6/d18fb2906f2918f9268a78d2/latest/USD')
    .then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data);
    })
}
getData()
//     function getApi() {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((Response) => Response.json())
//         .then((data) => {
//             console.log(data);
//             console.log("data[1]: ", data[1])
//             // myNode.innerText = data[1];
//         })
// };
// getApi()

    // fetch('https://api.publicapis.org/entries')

    // // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(response=>response.json())
    // .then(data=>console.log(data))
    // .then(data=>console.log(data.entries[0].API))
    // console.log('heloo');

    // fetch('https://catfact.ninja/fact')
    // .then(d=>d.json())
    // .then(v=>console.log(v))

    // fetch('https://api.agify.io?name=meelad').then(x=>x.json()).then(y=>console.log(y))
