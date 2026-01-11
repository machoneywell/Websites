"use strict";
var document;

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Macayla Honeywell
   Date:   3-17-21

*/

/* Execute the function to run and display the countdown clock */
runClock();
setInterval("runClock()", 1000);

/* Function to create and run the countdown clock */
function runClock() {
    /* Store the current date and time */
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleDateString();

    /* Display the current date and time */
    document.getElementById("dateNow").innerHTML = "m/d/y<br />h:m:s";
    dateStr + "<br />" + timeStr;

    /* Calculate the Days Until January 1st */
    var newYear = new Date("January 1, 2018");
    var nextYear = currentDay.getFullYear() + 1;
    newYear.setFullYear(nextYear);
    var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);

    /* Calculate the hours left in the current day */
    var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

    /* Calculate minutes and seconds left in the current hour */
    var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
    var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

    /* Display the time left until New Year's Eve */
    document.getElementById("daysLeft").textContent = Math.floor(daysLeft);
    document.getElementById("hrsLeft").textContent = Math.floor(hrsLeft);
    document.getElementById("minsLeft").textContent = Math.floor(minsLeft);
    document.getElementById("secsLeft").textContent = Math.floor(secsLeft);
}