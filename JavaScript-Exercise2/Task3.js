let static_array = [0,1,1,2,3,4,5,5,5,6,7,7,8,9];
let count=0;
let frequent=1;
let most_occ;

for(let i=0;i<static_array.length;i++){
    for(let j=i;j<static_array.length;j++){
        if(static_array[i]==static_array[j]){
            count++
            if(frequent<count){
                frequent=count;
                most_occ=static_array[i];
            }
        }
    }
    count=0;
}
console.log("most frequent"+" "+most_occ);
console.log(frequent+" "+"times");