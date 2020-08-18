// Monday 12 Septemper 2011                

function change_datetime() {
    // document.querySelector(".datetime-margin").textContent = "Monday 17 August 2020";
    var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
    // var today = curHour + ":" + curMinute + "." + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;
    var today = dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;

    document.querySelector(".datetime-margin").textContent = today;
}

var theme = 'Dark';

function change_theme() {
    if (theme === 'Dark') {
        theme = 'Light';
        document.querySelector("#theme").href= "styles/light.css";
        document.querySelector("button").textContent = "Dark";
        document.querySelector("button").style.backgroundColor = "rgb(29, 29, 29)";
        document.querySelector("button").style.color = "white";
        document.querySelector("button").style.border = "0px";
        document.querySelector("button").style.borderRadius = "1px";
    } else {
        theme = 'Dark';
        document.querySelector("#theme").href= "styles/style.css";
        document.querySelector("button").textContent = "Light";
        document.querySelector("button").style.backgroundColor = "white";
        document.querySelector("button").style.color = "rgb(29, 29, 29)";
        document.querySelector("button").style.border = "0px";
        document.querySelector("button").style.borderRadius = "1px";
    }
}