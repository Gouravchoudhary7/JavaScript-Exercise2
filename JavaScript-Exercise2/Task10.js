today = new Date(2020,04,03)
past = new Date(2018,06,01) 

function calcDate(date1,date2) {
    var diff = Math.floor(date1.getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;
    var diff2 =(date1.getTime() - date2.getTime())/1000;
    diff2 /=(60 * 60 * 24 * 7);
    var weeks= Math.floor(diff2);
    var days = Math.floor(diff/day);
    var months = Math.floor(days/31);
    var years = Math.floor(months/12);
    var message = date2.toDateString();
    message += " was "
    message += days + " days " 
    message += weeks + " weeks "
    message += months + " months "
    message += years + " years ago \n"

    return message
    }


a = calcDate(today,past);
console.log(a)