let n = 6;
let string = "";

for(let i=0;i<n;i++){
    for(let j=0;j<n-1;j++){
        if(i+j===4 || i-j===0){
            string += "*";
        }
        else{
            string += " ";
        }
    }
    string += "\n";
}

console.log(string)