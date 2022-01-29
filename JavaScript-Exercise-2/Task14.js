let arr =[
    {
        id:"1",
        name:"james",
        age:"25",
    },
    {
        id:"2",
        name:"william",
        age:"26",
    },
    {
        id:"3",
        name:"rahmaan",
        age:"23",
    },
    {
        id:"4",
        name:"jack",
        age:"20",
    },
    {
        id:"5",
        name:"maan",
        age:"33",
    },
    {
        id:"6",
        name:"raj",
        age:"28",
    },
    {
        id:"7",
        name:"rajesh",
        age:"29",
    },
    {
        id:"8",
        name:"roomal",
        age:"25",
    },
    {
        id:"9",
        name:"chloe",
        age:"29",
    },
    {
        id:"10",
        name:"mangilaal",
        age:"23",
    }
]
arr.sort((a,b)=>{
    return a.age-b.age;
})
console.log(arr);

function compareName(c,d){
    if(c.name<d.name ){
        return -1;
    }
    if(c.name>d.name ){
        return 1;
    }
    return 0;
}

let nameSort=arr;
nameSort.sort(compareName);
console.log(nameSort);