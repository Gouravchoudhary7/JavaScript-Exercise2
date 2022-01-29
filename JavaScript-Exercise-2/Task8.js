function calcDate(date1, date2){
    
     const dt_date1 = new Date(date1);
     const dt_date2= new Date(date2);
    
     var date1 =dt_date1.getTime();
     var date2 = dt_date2.getTime();
     
     var calc;
     if (date1 > date2){
         calc = new Date(date1 - date2) ;
     }else{
         calc = new Date(date2 - date1) ;
     }
     
     var calcFormatTmp = calc.getDate() + '-' + (calc.getMonth()+1)+ '-'+calc.getFullYear();
     
     var calcFormat = calcFormatTmp.split("-");
     var days_passed = parseInt(Math.abs(calcFormat[0]) - 1);
     var months_passed = parseInt(Math.abs(calcFormat[1]) - 1);
     var years_passed = parseInt(Math.abs(calcFormat[2] -   1970));
     

     const yrsTxt =["year", "years"];
     const mnthsTxt = ["month", "months"];
     const daysTxt = ["day", "days"]; 

     const result = ((years_passed == 1) ? years_passed+ ' '+ yrsTxt[0] + ' ' : (years_passed > 1 )  ? 
     years_passed+ ' ' + yrsTxt[1] + ' ' : '') + 
     ((months_passed == 1) ? months_passed+ ' ' + mnthsTxt[0] :  (months_passed > 1) ? 
      months_passed+ ' ' + mnthsTxt[1] + ' ' : '') +
     ((days_passed == 1) ? days_passed+ ' ' + daysTxt[0] : (days_passed > 1) ? 
     days_passed+ ' ' + daysTxt[1] : '' );
    
     const retval = {
         "result" :  result
     }
     
     return retval;
     }
console.log(calcDate("05-03-2020","07-01-2018"));


