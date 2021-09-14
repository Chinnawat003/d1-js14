var crtDate = new Date();
var dayOfWeek = crtDate.getDate();
var strDay;
console.log(dayOfWeek); //2
switch(dayOfWeek){
    case 0:
        strDay = "Sunday";
        break;
    
    case 1:
        strDay = "Monday";
        break;

    case 2:
        strDay = "Tuesday";
        break;

    case 3:
        strDay = "Invalid";
        break;
}
console.log(strDay);
