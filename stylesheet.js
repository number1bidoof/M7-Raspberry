// Create elements for each element in the table
const table = document.createElement("table");
const tr1 = document.createElement("tr");

// creates child nodes into the document
document.body.appendChild(table);
table.appendChild(tr1);

// Creates header cells for the first row to display the info
const th1 = document.createElement('th');
const th2 = document.createElement('th');
const th3 = document.createElement('th');
th1.textContent = "Car";
th2.textContent = "Top Mph"
th3.textContent = "Price"
tr1.appendChild(th1);
tr1.appendChild(th2);
tr1.appendChild(th3);

// Adds data
const tableData = [
  ['Chevrolet', '120mph', '$10,000'],
  ['Pontiac', '140mph', '$20,000']
];
// Use a for loop to iterate over data 
for (let i = 0; i < tableData.length; i++){
  const dataRow = tableData[i];
  const tr = document.createElement('tr')
  for (let x = 0; x < dataRow.length; x++){
    const td = document.createElement('td');
    td.textContent = dataRow[x];
    tr.appendChild(td)
  }
  table.appendChild(tr)
}

// Set attribute for the table
table.setAttribute("style","color:green");
table.setAttribute("name","carTable");
table.id = "carTable";
table.style.fontFamily = "Times New Roman, Times, serif";
table.style.textAlign = "center";