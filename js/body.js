/* CONSTANTS */

var HEADER_1 = "Just Call James!";
var HEADER_2_STANDARD = "&nbsp; &nbsp;Commercial &amp; Residential Maintenance Services";
var HEADER_2_MOBILE = "&nbsp; &nbsp;Maintenance Services";

/*
if window width < 725, change header text
*/
function setMenu() {
  var w = window.innerWidth;
  //var h = window.innerHeight;
  if (w < 725) {
    document.getElementById("header1").innerHTML = HEADER_1;
    document.getElementById("header2").innerHTML = HEADER_2_MOBILE;
  } else {
    document.getElementById("header1").innerHTML = HEADER_1;
    document.getElementById("header2").innerHTML = HEADER_2_STANDARD;
  }
}
