const models = document.getElementsByClassName("models");
const just = document.getElementById("justification");

const modelSelector = document.querySelector("#model-select");
const textureSelector = document.querySelector("#texture-type-select");
const colorSelector = document.querySelector("#color-select");

const colorOption1 = document.createElement("option");
colorOption1.setAttribute("value", "dark");
colorOption1.innerText = "Negro";
colorOption1.id = 'black-option';

const assetPath = './assets/'

let queryPath = '';

function updatePath(e) {
  e.preventDefault();
  const modelPath = modelSelector.options[modelSelector.selectedIndex].value;
  const texturePath = textureSelector.options[textureSelector.selectedIndex].value;
  const colorPath = colorSelector.options[colorSelector.selectedIndex].value;

  queryPath = '';
  queryPath = `${assetPath}${modelPath}-${texturePath}-${colorPath}.glb`;

  const viewer = document.getElementById("model-viewer");
  
  if (viewer.hasAttribute('src')) {
    viewer.removeAttribute('src');
    viewer.toggleAttribute('src', true)
    viewer.setAttribute("src", queryPath);
  } else {
    viewer.toggleAttribute("src", true);
    viewer.setAttribute("src", queryPath);
  }
  
  
}

function handleDavidChange() {
  const modelSelection = modelSelector.options[modelSelector.selectedIndex].value;
  const textureSelection = textureSelector.options[textureSelector.selectedIndex].value;
  if (modelSelection === 'david' && (textureSelection === 'big' || textureSelection === 'small')) {
    //console.log(colorSelector.childNodes);
    if (colorSelector.children.namedItem("black-option") === null) {
      colorSelector.appendChild(colorOption1);
    } else {
      colorSelector.removeChild(colorOption1);
      colorSelector.appendChild(colorOption1);
    }
  } else if (modelSelection === "david" && (textureSelection !== "big" || textureSelection !== "small")) {
    if (colorSelector.children.namedItem("black-option") !== null) {
      colorSelector.removeChild(colorOption1);
    }
  } else if (modelSelection === 'sphere') {
     if (colorSelector.children.namedItem("black-option") === null) {
       colorSelector.appendChild(colorOption1);
     }
  }
  console.log(queryPath);
}

handleDavidChange();

modelSelector.addEventListener("change", handleDavidChange);
textureSelector.addEventListener('change', handleDavidChange);
colorSelector.addEventListener("change", handleDavidChange);

modelSelector.addEventListener('change', updatePath);
textureSelector.addEventListener("change", updatePath);
colorSelector.addEventListener("change", updatePath);


console.log('running');