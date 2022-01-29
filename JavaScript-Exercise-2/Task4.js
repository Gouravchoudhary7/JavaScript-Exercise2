function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
  }
  
  let static_array = [0,1,2,3,4,5,6,7,8,9]
  shuffle(static_array);
 console.log(static_array);
 