let colorSelected; 

//Adds a row
function addR() {
    //alert("Clicked Add Row")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    let cols = document.getElementsByTagName("td");
    console.log(rows.length);
    
    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);
    }
    else{
        let row = document.createElement("tr");
        let col = document.createElement("td");
        row.appendChild(col);
        grid.appendChild(row);

    }
    
}
//Adds a column
function addC() {
    //alert("Clicked Add Col")
    let cols = document.getElementsByTagName("td");
    console.log(cols.length); 
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    let row = document.createElement("tr");
    let col = document.createElement("td");
    if(cols.length ===0){
        grid.appendChild(col);
        col.appendChild(row);
    }
    
    for(let i =0;i<rows.length;i++)
    {
        
    }
}

//Removes a row
function removeR() {
    //alert("Clicked Remove Row")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");    
    if(rows.legnth ===0){
        alert("Empty");
    }
    let lastRow = grid.lastElementChild;
    grid.removeChild(lastRow);
}
//Remove a column
function removeC() {
    //alert("Clicked Remove Col")
    let grid = document.getElementById("grid");
    let cols = document.getElementsByTagName("td");    
    if(cols.legnth ===0){
        alert("Empty");
        return;
    }
    let lastCol = grid.lastElementChild;
    grid.removeChild(lastCol);
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
