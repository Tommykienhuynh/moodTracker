let depressedBGColor = "linear-gradient(0.25turn, #2D022F, #5E0644)";

//popUp = document.getElementById("popUp");
//popUpFace = document.querySelector(".popSVG");
editMood = document.getElementById("editMood");
/// document.querySelector(".emotionContainer")
moodDescription = document.getElementById("moodDescription");
confirmButton = document.getElementById("confirmBTN");
depressed = document.getElementById("depressed");
colorDepressedFace = document.querySelector(".colorDepressed");
depressedFace = document.querySelector(".faceDepressed");
allColorFaces = document.querySelectorAll(".mood");
logButton = document.querySelector(".colorBtn");
deleteButton = document.getElementById("delete-btn");
popUpContainer = document.querySelector(".popUp-Container");

var Sad, Depressed, Okay, Good, Great;
let selected;

function addPoints(mood) {
  console.log(mood);
  switch (mood) {
    case "depressed":
      sad = sad + 1;
      console.log(123);
      break;
    case sad:
      // code block
      break;
    case okay:
      break;
    case good:
      break;
    case great:
      break;
    default:
      break;
  }
}

//event listeners
logButton.addEventListener("click", function () {
  //checks to see if user has selected an emotion
  if (selected === undefined) {
    return;
  }

  //If users has selected an emotion than show Popup
  changeSVG();
  showPopUp();
});

confirmButton.addEventListener("click", function () {
  //console.log(moodDescription.value);
  const theDate = getDate();
  const startDate = dateStartFormat(theDate);
  const theTime = getTime();

  /*   let ticket = {
    mood: selected,
    date: theDate,
    description: moodDescription.value,
    time: theTime,
  }; */

  let ticket = {
    title: selected,
    date: theDate,
    description: moodDescription.value,
    time: theTime,
    start: startDate,
    color: findColor(selected),
    textColor: "black",
  };

  count++;
  accessMap[`log${count}`] = ticket;
  console.log(accessMap);

  //update local storage
  localStorage.setItem("count", JSON.stringify(count));
  localStorage.setItem("logs", JSON.stringify(accessMap));

  moodDescription.value = null;
  removePopUp();
});

function showPopUp() {
  popUpContainer.style.display = "flex";
  document.getElementById("popUpMoodName").innerHTML = selected;
}

function removePopUp() {
  popUpContainer.style.display = "none";
}

function selectEmotion(emotion) {
  selected = String(emotion);
  console.log(emotion);
}

function changeSVG() {
  let aMood = updateMood(selected);
  //console.log(aMood);
  document.querySelector(".emotionContainer").innerHTML = aMood;
}

allColorFaces.forEach((el) => {
  let wordMood = el.childNodes[5].innerHTML;
  el.addEventListener("hover", function () {
    selectEmotion(wordMood);
  });

  $(el).hover(
    function () {
      selectEmotion(wordMood);
      allColorFaces.forEach((el) => {
        let colorChild = el.childNodes[1];
        let nonColorChild = el.childNodes[3];
        let title = el.childNodes[5];

        colorChild.style.display = "none";
        nonColorChild.style.display = "block";
        nonColorChild.style.opacity = ".30";
        title.className = "moodHeading ghost ";
      });

      document.querySelector(`.color${wordMood}`).style.display = "block";
      document.querySelector(`.face${wordMood}`).style.display = "none";

      el.childNodes[5].classList.remove("ghost");

      /*   const body = document.body.parentElement;
        body.className = `body ${wordMood}`; */

      document.body.className = `body ${wordMood}`;
      logButton.className = `colorBtn ${wordMood} grow`;
    },
    function () {
      allColorFaces.forEach((el) => {
        let colorChild = el.childNodes[1];
        let nonColorChild = el.childNodes[3];
        let title = el.childNodes[5];
        title.classList.remove("ghost");

        //colorChild.style.display = "block";
        nonColorChild.style.display = "block";
      });
      el.childNodes[3].style.display = "none";
      document.body.className = `body `;
    }
  );
});
