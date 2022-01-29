let static_array = [ "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z" ];

for (let i = static_array.length - 1; i >= 0; i--) {
  if (i % 2 == 1)
    static_array.splice(i, 1);
}


console.log(static_array);