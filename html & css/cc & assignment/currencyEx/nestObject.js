
let obj = {
    'name' : 'san',
    'cast' : 'acharya',
    'nested' : {
        'div' : 'nav',
        'div1' : 'nav1'
    }
}
// console.log(obj);
// console.log(obj.nested);
// for(items in obj){
//     // console.log(items);
//     for( items1 in obj[items]){
//         console.log(items1);
//     }
// }

let a = Object.values(obj);
console.log(a);

