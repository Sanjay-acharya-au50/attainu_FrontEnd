let date = new Date();
console.log("date:",date)

let myLocationTime = new Date().toLocaleTimeString();
console.log("myLocation time:",myLocationTime);



// 01/01/1970

let nextDayDate = new Date(24 * 60 * 60 * 1000);
console.log("next day date:",nextDayDate);

// 01/01/1970 till now 
let startDayToTillNow = Date.now();
console.log("start day to till now mislisec:",startDayToTillNow);

// to check some days querry operation
// Parameters r (year,month index,day,hour,second,milisecond) 
let startDayToProvidedDate = Date.UTC(2022,1,1,0,0,0,0)
console.log("start day to provided day misllisec:",startDayToProvidedDate);

let providedDate = new Date(2022,1,3,0,0,0,0)
console.log("date:",providedDate.getDate());

// its give output in index number not string
let providedDay = new Date(2022,1,1,0,0,0,0)
console.log("day:", providedDay.getDay());

// computer started date
const start_date = Date.UTC(1970,0,1,0,0,0,0);
console.log("start dat;", start_date);

// to get year
let year = new Date(2023,1,1,0,0,0);
console.log("year:", year.getFullYear());

// to get month

monthsInArr = ["jan","feb","mar"]; 
let month = new Date(2023,1,1,0,0,0);
console.log("month:", monthsInArr[month.getMonth()]);



// to get hours tht we provided

let toGetHour = new Date(2023,1,1,23,0,0,0) // 0 - 23 0 means 1 hour / also 24 means-1 / 25 means-2
console.log("hour:",toGetHour.getHours());

// to get minutes tht we provided

let toGetMinutes = new Date(2023,1,1,1,59,0,0) // 0-59
console.log("minute:",toGetMinutes.getMinutes());

// to get seconds tht we provided

let toGetSeconds = new Date(2023,1,1,1,0,59,0) // 0-59
console.log("seconds:",toGetSeconds.getSeconds());

let toGetMilliSeconds = new Date(2023,1,1,1,0,0,900) // 0-999
console.log("toGetMilliSeconds:",toGetMilliSeconds.getMilliseconds());