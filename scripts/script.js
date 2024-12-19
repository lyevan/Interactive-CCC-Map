let infoContainer = document.getElementById("info-container");
let svg = document.querySelectorAll("svg");

function showInfo(name, info, path) {
  infoContainer.innerHTML = `<h3>${name}</h3>
    <p>This is ${info}</p>
    <br>
    <p>Follow the path to get to <span style="text-decoration:underline">${name}</span> for your guidance.</p>`;

  if (infoContainer.hasAttribute("hidden", true)) {
    infoContainer.removeAttribute("hidden");
    createPath(path);
  } else {
    infoContainer.setAttribute("hidden", true);
    removePath();
  }
}

function checkIfChecked(radioButton) {
  if (radioButton.checked) {
    console.log(`${radioButton.value} is checked.`);
    callFunctionForSelectedOption(radioButton.value);
  }
}

function createPath(path) {
  svg.forEach((pathHTML) => {
    pathHTML.innerHTML += `<g id="layer2">
    <path
      style="fill:none;stroke-width:2"
      d= "${path}"
      id="path1"
    />
  </g>`;
  });
}

function removePath() {
  svg.forEach((svg) => {
    let toRemoveLayer = svg.querySelector("#layer2");
    if (toRemoveLayer) {
      svg.removeChild(toRemoveLayer);
    }
  });
}

function callFunctionForSelectedOption(value) {
  const firstFloor = document.querySelector(".first-floor");
  const secondFloor = document.querySelector(".second-floor");
  const thirdFloor = document.querySelector(".third-floor");
  const floorHeader = document.querySelector(".floor-header");
  const title = document.title;

  if (title === "JMC Building Map") {
    if (value === "firstF-btn") {
      // Function for Option 1
      console.log("Function for Option 1");
      firstFloor.setAttribute("style", "display:flex;");
      secondFloor.setAttribute("style", "display:none;");
      thirdFloor.setAttribute("style", "display:none;");
      floorHeader.innerHTML = `<h2>JMC 1st Floor</h2>`;
      infoContainer.setAttribute("hidden", true);
      removePath();
    } else if (value === "secondF-btn") {
      // Function for Option 2
      console.log("Function for Option 2");
      firstFloor.setAttribute("style", "display:none;");
      secondFloor.setAttribute("style", "display:flex;");
      thirdFloor.setAttribute("style", "display:none;");
      floorHeader.innerHTML = `<h2>JMC 2nd Floor</h2>`;
      infoContainer.setAttribute("hidden", true);
      removePath();
    } else if (value === "thirdF-btn") {
      // Function for Option 3
      console.log("Function for Option 3");
      firstFloor.setAttribute("style", "display:none;");
      secondFloor.setAttribute("style", "display:none;");
      thirdFloor.setAttribute("style", "display:flex;");
      floorHeader.innerHTML = `<h2>JMC 3rd Floor</h2>`;
      infoContainer.setAttribute("hidden", true);
      removePath();
    }
  }

  if (title === "Rizal Building Map") {
    pass;
  }

  if (title === "Admin Building Map") {
    if (value === "firstF-btn") {
      // Function for Option 1
      console.log("Function for Option 1");
      firstFloor.setAttribute("style", "display:flex;");
      secondFloor.setAttribute("style", "display:none;");
      floorHeader.innerHTML = `<h2>Admin Ground Floor</h2>`;
      infoContainer.setAttribute("hidden", true);
      removePath();
    } else if (value === "secondF-btn") {
      // Function for Option 2
      console.log("Function for Option 2");
      firstFloor.setAttribute("style", "display:none;");
      secondFloor.setAttribute("style", "display:flex;");
      floorHeader.innerHTML = `<h2>Admin Basement</h2>`;
      infoContainer.setAttribute("hidden", true);
      removePath();
    }
  }
}

function showMobileMenu() {
  let navBtn = document.querySelector(".nav-btn");
  let sideNav = document.querySelector(".side-nav");

  navBtn.setAttribute("class", "fa fa-close nav-btn");
  navBtn.setAttribute("onclick", "closeMobileMenu()");

  sideNav.setAttribute("style", "display:block;");
}
function closeMobileMenu() {
  let navBtn = document.querySelector(".nav-btn");
  let sideNav = document.querySelector(".side-nav");

  navBtn.setAttribute("class", "fa fa-bars nav-btn");
  navBtn.setAttribute("onclick", "showMobileMenu()");

  sideNav.setAttribute("style", "display:none;");
}

window.onload = function () {
  const defaultRadioButton = document.querySelector(
    'input[name="floor-btn"]:checked'
  );
  checkIfChecked(defaultRadioButton); // Call the function for the default checked radio
};

function nextView() {
  let slider = document.querySelector(".slider");
  let buildings = slider.querySelector(".building-container");
  let thumbnail = document.querySelector(".thumbnail");

  thumbnail.append(thumbnail.querySelector("div:first-child"));
  buildings.append(buildings.querySelector(".buildings:first-child"));
}

function prevView() {
  let slider = document.querySelector(".slider");
  let buildings = slider.querySelector(".building-container");
  let thumbnail = document.querySelector(".thumbnail");

  thumbnail.prepend(thumbnail.querySelector("div:last-child"));
  buildings.prepend(buildings.querySelector(".buildings:last-child"));
}
