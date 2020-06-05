console.log("hello world"); //tester

let continueButton = document.getElementById("idxButton"); // index page
const body = document.body;
const name = document.getElementById("name");
let nameUser


continueButton.onclick = function () {  // index page
    nameUser = name.value;
    if (!nameUser) {
        alert (`name required.`)
    } else {
        const mainPage = document.querySelector('#main-page strong');
        mainPage.textContent = nameUser;
        document.querySelector('#landing').style.display = 'none';
        document.querySelector('#main-page').style.display = 'block';
        document.body.style.overflow = 'scroll';
    }
}

// let doneChecklist = document.getElementById('checklist');
// doneChecklist.addEventListener("click", function() {
//     this.classList.toggle("red-white")
// })

let addList = document.getElementById('add-list');
let tbody = document.querySelector('.original');
let table = document.querySelector('table');

let groceryCell = document.getElementById('Grocery');
let descCell = document.getElementById('Description');
let qtyCell = document.getElementById('qty');
let checklistCell = document.getElementById('checklist');

addList.addEventListener("click", function() {
    var row = tbody.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    
    cell1.innerHTML = groceryCell.innerHTML;
    cell2.innerHTML = descCell.innerHTML;
    cell3.innerHTML = qtyCell.innerHTML;
    cell4.innerHTML = checklistCell.innerHTML;

    cell4.setAttribute("id", "checklist")
})

let deleteList = document.getElementById('delete-list');
deleteList.addEventListener("click", function() {
    if (tbody.childElementCount < 2) {
        alert   (`Can't delete the last one.`)
    } else {
        tbody.deleteRow(0);
    }
})


// doneChecklist.style.color = "white";
// doneChecklist.style.backgroundColor = "red";



