let infoContainer = document.getElementById("info-container");

function showInfo(name, info) {
  const rectInfo = name;

  infoContainer.innerHTML = `<h3>${name}</h3>
    <p>This is ${info}</p>`;

  if (infoContainer.hasAttribute("hidden", true)) {
    infoContainer.removeAttribute("hidden");
  } else {
    infoContainer.setAttribute("hidden", true);
  }
}

function checkIfChecked(radioButton) {
  if (radioButton.checked) {
    console.log(`${radioButton.value} is checked.`);
    callFunctionForSelectedOption(radioButton.value);
  }
}

function callFunctionForSelectedOption(value) {
  const firstFloor = document.querySelector(".first-floor");
  const secondFloor = document.querySelector(".second-floor");
  const thirdFloor = document.querySelector(".third-floor");
  const floorHeader = document.querySelector(".floor-header");

  // Perform the action depending on the selected radio button
  if (value === "firstF-btn") {
    // Function for Option 1
    console.log("Function for Option 1");
    firstFloor.setAttribute("style", "display:flex;");
    secondFloor.setAttribute("style", "display:none;");
    thirdFloor.setAttribute("style", "display:none;");
    floorHeader.innerHTML = `<h2>JMC 1st Floor</h2>`;
    infoContainer.setAttribute("hidden", true);
  } else if (value === "secondF-btn") {
    // Function for Option 2
    console.log("Function for Option 2");
    firstFloor.setAttribute("style", "display:none;");
    secondFloor.setAttribute("style", "display:flex;");
    thirdFloor.setAttribute("style", "display:none;");
    floorHeader.innerHTML = `<h2>JMC 2nd Floor</h2>`;
    infoContainer.setAttribute("hidden", true);
  } else if (value === "thirdF-btn") {
    // Function for Option 3
    console.log("Function for Option 3");
    firstFloor.setAttribute("style", "display:none;");
    secondFloor.setAttribute("style", "display:none;");
    thirdFloor.setAttribute("style", "display:flex;");
    floorHeader.innerHTML = `<h2>JMC 3rd Floor</h2>`;
    infoContainer.setAttribute("hidden", true);
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
