allLogs = document.getElementById("allLogs");
console.log(accessMap);

/*  accessMap.forEach((el) => {
    console.log(el);
  });
 */

//Gets data from accessMap and updates the DOM

Object.keys(accessMap)
  .reverse()
  .forEach((el) => {
    let eventData = accessMap[el];

    let mood = eventData.title;
    let description = eventData.description;
    let date = eventData.date;
    let time = eventData.time;

    let div = document.createElement("div");
    let face = document.createElement("div");

    face.className = "faceImage-Container";

    face.innerHTML = updateMood(mood);

    div.className = "container";

    div.innerHTML = `
    

  
  <div  class="moodName-Container ${mood}">
      <h2 >${mood}</h2>
  </div>
  <div class="logs-Container">
      <h3> ${date} </h3>
      <span> ${time}</span>
      <p> ${description}
         </p>
         
  </div>
  `;

    div.prepend(face);
    allLogs.appendChild(div);

    /*  if ((mood = "Depressed")) {
    document.querySelector(".moodName-Container").style.color = "#e45da3";
  } else if ((mood = "Great")) {
    document.querySelector(".moodName-Container").style.color = "#b0e62c";
  } */
  });
