
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})
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
var selectElement = document.querySelector('#exampleFormControlSelect1');
var BaseSelectedVal = 0;
var BaseSelectedOption = "";
selectElement.addEventListener('change', (event) => {
  var result = document.querySelector('.result');
  BaseSelectedOption = `${event.target.value}`;
  BaseSelectedVal = BaseOptionsVals[BaseOptions.indexOf(BaseSelectedOption)];
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
});


//Buttons Logic
var finalTest = [];
var counter = 0;
var IndexPos = 0;
function Create() {
  l= document.getElementById("Width").value;
  h = document.getElementById("Height").value;
  var CalculatedPrice = (Number(BaseSelectedVal) + Number(productSelectedVal) + Number(subProductSelectedVal)) * l * h;
  var finalObj = {
	  BaseVal: BaseSelectedOption,
      SubProductA: productOptions[ProductOptionsVals.indexOf(productSelectedVal)],
	  SubProductB: subProductOptions[SubProductOptionsVals.indexOf(subProductSelectedVal)],
	  Width: l,
	  Height: h,
	  QuotePrice: CalculatedPrice
  };
   var found = false;
   for(var i = 0; i < finalTest.length; i++) {
    if (finalTest[i].BaseVal === finalObj.BaseVal && (finalTest[i].SubProductA === finalObj.SubProductA && finalTest[i].SubProductB === finalObj.SubProductB)) {
        found = true;
		alert("Items Already Exist in table");
        break;
    }
   }
    if(!found) {
    finalObj.indexCounter = finalTest.length;
     finalTest.push(finalObj);
	 var emptyArr = [];
	 emptyArr.push(finalObj)
	 addDataToTbody(lakeTbody, emptyArr);
	}
return false
}

function clearVals(){
	document.getElementById("createForm").reset();
}

function Edit(){
	exampleFormControlSelect1 = finalTest[IndexPos].BaseVal;
}

function addDataToTbody(nl, data) { // nl -> NodeList, data -> array with objects
  data.forEach((d, i) => {
	 var tr = nl.insertRow(i);
	 tr.id = "row" + d.indexCounter;
	 var td = document.createElement('td');
	 var chkbox = document.createElement('input');
    chkbox.type = "checkbox";
    chkbox.id = "chk" + d.indexCounter;
    chkbox.name = "chkbx" ;
	chkbox.value = 'value' + d.indexCounter;
	chkbox.onclick = function () {
     selectedCheckBox(this.id);
	 };
	td.appendChild(chkbox);
	tr.appendChild(td);
	delete d.indexCounter;
    Object.keys(d).forEach((k, j) => { // Keys from object represent th.innerHTML
      var cell = tr.insertCell(j);
      cell.innerHTML = d[k]; // Assign object values to cells   
    });
    nl.appendChild(tr);
  })
}


var lakeTbody = document.querySelector("#lake tbody");

//addDataToTbody(lakeTbody, finalTest);


function selectedCheckBox(chkboxId) {
  IndexPos = chkboxId.substring(3);
}

function removeItemFromList(){
  finalTest.splice(IndexPos, 1);
  var tableRowId = "row"+IndexPos;
  document.getElementById(tableRowId).remove(); 
}

