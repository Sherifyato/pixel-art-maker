/*define variables height width as they need to be defined outside the function
*/
var width = document.getElementById("inputWidth");
var height = document.getElementById("inputHeight");
/* make function makeGrid height, width which 
height and width will be defined by the user */
function makeGrid(height, width) {
    'use strict';
    var table = document.getElementById("pixelCanvas");
    table.innerHTML = "";

    for (let i = 0; i < height.value; i++) {
var row = table.insertRow(i);
    for (let z = 0; z < width.value; z++) {
let cell = row.insertCell(z);
// make cell's background color the value of color picker which user choose it
      cell.addEventListener("click", function() {
        var color = document.getElementById("colorPicker");
        //back to non-background situation when double click the cell
        cell.style.backgroundColor = color.value;
cell.addEventListener("dblclick", function(event) {
            cell.style.backgroundColor = "";
        });
  
    });
}
}
}
var sizePicker = document.getElementById("sizePicker");
     sizePicker.addEventListener("submit", function(click) {
     click.preventDefault();
        makeGrid(height, width);
        
         });