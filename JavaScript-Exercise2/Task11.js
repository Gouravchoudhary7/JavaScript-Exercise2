let static_string = "This is a sample string";
let inp="Insert me";
let input_position = 2;
let output = [static_string.slice( 0,input_position), inp, static_string.slice(input_position)].join('');
console.log(output);