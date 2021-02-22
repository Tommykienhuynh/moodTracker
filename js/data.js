var ctx = document.getElementById("lineChart").getContext("2d");
var ctx2 = document.getElementById("weekChart").getContext("2d");
/* var yLabels = {
  1: "Sad",
  2: "   okay   ",
  3: "Good",
  4: "great",
}; */

let monAveArr = [11, 12, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0];
let monCountArr = [5, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0];
let lastMonth;
let chartMode = "Monthly";
let weekBTN = document.getElementById("weekBTN");
let monthBTN = document.getElementById("monthBTN");

//Updates monAveArr and MonCountArr
function monthCounter(mood, num) {
  //Updates the counts of logs per month
  monCountArr[num] = monCountArr[num] + 1;
  lastMonth = num;

  //Adds up the value of each mood depending on mood
  switch (mood) {
    case "Depressed":
      monAveArr.splice(num, 1, monAveArr[num] + 1);
      break;
    case "Sad":
      monAveArr.splice(num, 1, monAveArr[num] + 2);
      break;
    case "Okay":
      monAveArr.splice(num, 1, monAveArr[num] + 3);
      break;
    case "Good":
      monAveArr.splice(num, 1, monAveArr[num] + 4);
      break;
    case "Great":
      monAveArr.splice(num, 1, monAveArr[num] + 5);
      break;
    default:
      break;
  }

  console.log(monAveArr);
  console.log(monCountArr);
}

//Return the average of months in array
function getaverageArr() {
  /*  let newArray = arr.map((el) => el / 5);
  console.log(newArray); */

  let newArray = [];

  for (i = 0; i < lastMonth; i++) {
    if (monAveArr[i] === 0) {
      newArray[i] = 0;
    } else {
      newArray[i] = Math.round(monAveArr[i] / monCountArr[i]);
    }
  }
  console.log(newArray);
  return newArray;
}

//returns average per month
function monthAverage() {
  Object.keys(accessMap).forEach((el) => {
    const entry = accessMap[el];
    const mood = entry.title;
    const date = entry.date;
    //console.log(date.split(","));
    const newDate = date.split(",");
    const newerDate = String(newDate[1].substring(1, 4));
    console.log(newerDate);
    console.log(mood);

    switch (newerDate) {
      case "Jan":
        monthCounter(mood, 0);
        break;
      case "Feb":
        monthCounter(mood, 1);

        break;
      case "Mar":
        monthCounter(mood, 2);
        break;
      case "Apr":
        monthCounter(mood, 3);
        break;
      case "May":
        monthCounter(mood, 4);
        break;
      case "Jun":
        monthCounter(mood, 5);
        break;
      case "Jul":
        monthCounter(mood, 6);
        break;
      case "Aug":
        monthCounter(mood, 7);
        break;
      case "Sep":
        monthCounter(mood, 8);
        break;
      case "Oct":
        monthCounter(mood, 9);
        break;
      case "Nov":
        monthCounter(mood, 10);
        break;
      case "Dec":
        monthCounter(mood, 11);
        break;
      default:
        break;
    }
  });

  getaverageArr();
}

monthAverage();

var myChart = new Chart(ctx, {
  type: "line",

  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],

    datasets: [
      {
        label: "Average Mood",
        data: getaverageArr(),
        fill: false,
        borderColor: "#fff",
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          labels: ["Depressed", "Sad", "Okay", "Good", "Great"],
          ticks: {
            max: 4,
            min: 0,

            display: false,
            stepSize: 1,
            fontColor: "#CCC",
            /*  callback: function (value, index, values) {
              // for a value (tick) equals to 8
              return yLabels[value];
              // 'junior-dev' will be returned instead and displayed on your chart
            }, */
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            max: 12,
            min: 0,
            stepSize: 1,
            fontColor: "#CCC",
          },
        },
      ],
    },
  },
  responsive: true,
  maintainAspectRatio: false,
});

var myChart = new Chart(ctx2, {
  type: "line",

  data: {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],

    datasets: [
      {
        label: "Average Mood",
        data: [0, 3, 4, 2],
        fill: false,
        borderColor: "#fff",
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          labels: ["Depressed", "Sad", "Okay", "Good", "Great"],
          ticks: {
            max: 4,
            min: 0,

            display: false,
            stepSize: 1,
            fontColor: "#CCC",
            /*  callback: function (value, index, values) {
              // for a value (tick) equals to 8
              return yLabels[value];
              // 'junior-dev' will be returned instead and displayed on your chart
            }, */
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            max: 12,
            min: 0,
            stepSize: 1,
            fontColor: "#CCC",
          },
        },
      ],
    },
  },
  responsive: true,
  maintainAspectRatio: false,
});

var ctx = document.getElementById("pieChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Depressed", "Sad", "Okay", "Good", "Great"],
    datasets: [
      {
        label: "# of Votes",
        data: [depressedCount, sadCount, okayCount, goodCount, greatCount],
        backgroundColor: [
          "#e45da3",
          "#6c63ff",
          "#ee8932",
          "#00e2f8",
          "#b0e62c",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    labels: {
      render: "label",
      fontColor: ["white"],
    },
  },
});

function changeSelected(el) {
  if (el === "Monthly") {
    monthBTN.classList.add("selected");
    weekBTN.classList.remove("selected");
    chartMode = "Monthly";
  } else if (el === "Weekly") {
    monthBTN.classList.remove("selected");
    weekBTN.classList.add("selected");
    chartMode = "Weekly";
  }
  changeLineChart();
}

function changeLineChart() {
  if (chartMode === "Monthly") {
    document.getElementById("weekChart").style.display = "none";
    document.getElementById("lineChart").style.display = "block";
  } else if (chartMode === "Weekly") {
    document.getElementById("lineChart").style.display = "none";
    document.getElementById("weekChart").style.display = "block";
  }
}

setMood();

console.log(new Date());

/* myChart.canvas.parentNode.style.height = "128px";
myChart.canvas.parentNode.style.width = "600px";
 */
