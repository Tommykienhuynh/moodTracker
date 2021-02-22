var testMAP = [
  {
    title: `hel`,
    start: "2020-07-11",
    description: "Sad",
    color: "#8E43E7",
    textColor: "white",
    date: "feb- 2121",
  },
  {
    title: `happy`,
    start: "2020-07-11",
    description: "Sad",
    color: "#8E43E7",
    textColor: "white",
  },
];

var calMap = [];
Object.keys(accessMap).forEach((el) => {
  let key = accessMap[el];

  calMap.push(key);
});
console.log(calMap);

/* var testMAP = [];
Object.keys(accessMap).forEach((el) => {
  let eventData = accessMap[el];

  testMAP.push(eventData);
});

Object.entries(testMAP).forEach((el) => {
  el["title"] = el.mood;
  console.log(testMAP);
  delete el.mood;
}); */

console.log(testMAP);
document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    events: calMap,
  });

  calendar.render();
});
