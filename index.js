// fill in javascript code here
document.querySelector("form").addEventListener("submit", getData);
let dataArr = [];
function getData(event) {
  event.preventDefault();
  let name = document.querySelector("#name").value;
  let id = document.querySelector("#docID").value;
  let special = document.querySelector("#dept").value;
  let exp = document.querySelector("#exp").value;
  let email = document.querySelector("#email").value;
  let mblNumber = document.querySelector("#mbl").value;

  let dataobj = {
    docName: name,
    docId: id,
    docSpecial: special,
    docExp: exp,
    docEmail: email,
    docNumber: mblNumber,
  };

  dataArr.push(dataobj);

  docData(dataArr);
}

function docData(dataArr) {
  document.querySelector("tbody").innerHTML = "";
  dataArr.map(function (elem, i) {
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerText = elem.docName;
    let col2 = document.createElement("td");
    col2.innerText = elem.docId;
    let col3 = document.createElement("td");
    col3.innerText = elem.docSpecial;
    let col4 = document.createElement("td");
    col4.innerText = elem.docExp;
    let col5 = document.createElement("td");
    col5.innerText = elem.docEmail;
    let col6 = document.createElement("td");
    col6.innerText = elem.docNumber;
    let col7 = document.createElement("td");
    if (elem.docExp <= 1) {
      col7.innerText = "Trainee";
    } else if (elem.docExp >= 2 && elem.docExp <= 5) {
      col7.innerText = "Junior";
    } else {
      col7.innerText = "Senior";
    }
    let col8 = document.createElement("td");
    col8.innerText = "Delete";
    col8.addEventListener("click", function (event) {
      event.target.parentNode.remove();
      dataArr.splice(i, 1);
    });
    col8.style.backgroundColor = "red";
    row.append(col1, col2, col3, col4, col5, col6, col7, col8);
    document.querySelector("tbody").append(row);
  });
}
