let month_name = function (dat){
    month_list = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  return month_list[dat.getMonth()];
}
console.log(month_name(new Date("07/01/2020")));