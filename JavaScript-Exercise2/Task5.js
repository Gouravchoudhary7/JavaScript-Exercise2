let array_a = [0,1,2,3];
let array_b = [3,4,5];
let intersection_array=[];

var union = [...new Set([...array_a, ...array_b])];
console.log(union);



for(let i=0;i<array_a.length;i++){
    for(let j=0;j<array_b.length;j++){
        if(array_a[i]==array_b[j]){
            intersection_array=array_a[i];
        }
    } 
}
console.log(intersection_array);

let ab_array = array_a.filter(arr => array_b.indexOf(arr) === -1);
console.log(ab_array);

let ba_array = array_b.filter(arr => array_a.indexOf(arr) === -1);
console.log(ba_array);