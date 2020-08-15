var DropDownMultipledVal = 1;

//First-Dropdown
var BaseValueSelection = document.getElementById("exampleFormControlSelect1");
var BaseOptions = ["Under Counter Storage with shutter with out countertop", "Under Counter Storage with draws & shutter with out countertop", "Under Counter Storage with draws & shutter with out countertop (Civil verticals)",
"Wall Cabinets Wood shutter with glass", "Wall cabinets with Profile shutter with glass", "Pantry under couter, wall cabinets & wood shutter with glass", "Pantry under couter with draws, wall cabinets & wood shutter with glass",
"Pantry under counter with draws, wall cabinets & profile shutter with glass", "Pantry with tall unit, under couter, wall cabinets & wood shutter with glass", "Pantry with tall unit, under couter, wall cabinets & profile shutter with glass", 
"Pantry with tall unit, under counter with draws, wall cabinets & profile shutter with glass",
"Pantry with tall unit, under counter with draws, wall cabinets & profile shutter with glass", "Breakfast counter with storage",
"Breakfast counter without storage", "Loft with frame & shutter", "Loft cabinet with shutter"];
for(var i = 0; i < BaseOptions.length; i++) {
    var opt = BaseOptions[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    BaseValueSelection.appendChild(el);
}

var BaseOptionsVals = [1030, 1030, 900, 1030, 1030,1030, 1030,1030, 1030,1030, 1030,1030, 1030,1030, 650, 1030];
const selectElement = document.querySelector('#exampleFormControlSelect1');
var BaseSelectedVal = 0;
selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  BaseSelectedVal = `${event.target.value}`;
  BaseSelectedVal = BaseOptionsVals[BaseOptions.indexOf(BaseSelectedVal)];
});

//Second Dropdown
var ProductValueSelection = document.getElementById("exampleFormControlSelect2");
var productOptions = ["Laminate", "Acrylic",];
for(var i = 0; i < productOptions.length; i++) {
    var opt = productOptions[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    ProductValueSelection.appendChild(el);
}

var ProductOptionsVals = [70, 150];
const selectedproductElement = document.querySelector('#exampleFormControlSelect2');
var productSelectedVal = 0;
selectedproductElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  productSelectedVal = `${event.target.value}`;
  productSelectedVal = ProductOptionsVals[productOptions.indexOf(productSelectedVal)];
  productSelectedVal = Number(BaseSelectedVal) + Number(productSelectedVal);
  
});

//Third Dropdown
var SubProductSelection = document.getElementById("exampleFormControlSelect3");
var subProductOptions = ["Ebco", "Hettich", "Hafele"];
for(var i = 0; i < subProductOptions.length; i++) {
    var opt = subProductOptions[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    SubProductSelection.appendChild(el);
}
var SubProductOptionsVals = [150, 450, 500];
const selectedSubproductElement = document.querySelector('#exampleFormControlSelect3');
var subProductSelectedVal = 0;
selectedSubproductElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  subProductSelectedVal = `${event.target.value}`;
  subProductSelectedVal = SubProductOptionsVals[subProductOptions.indexOf(subProductSelectedVal)];
  DropDownMultipledVal = Number(productSelectedVal) + Number(subProductSelectedVal);
  console.log(DropDownMultipledVal);
});


//Buttons Logic
var finalTest = [];
function Test() {
  l= document.getElementById("Width").value;
  h = document.getElementById("Height").value;
  var CalculatedArr = DropDownMultipledVal * l * h;
  finalTest.push(CalculatedArr);
 console.log(finalTest[0]);
 document.getElementById("finalOutput").innerHTML = "Calculated Amount is: "+finalTest[0];
return false
}

function clearVals(){
	alert("Input values are cleared");
}