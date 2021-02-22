//get local storage variables
var localAccessMap = JSON.parse(localStorage.getItem("logs"));
var accessMap = localStorage.getItem("logs") !== null ? localAccessMap : {};

var localCount = JSON.parse(localStorage.getItem("count"));
var count = localStorage.getItem("logs") !== null ? localCount : 0;
