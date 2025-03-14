// Create elements for each element in the table
const table = document.createElement("table");
const tr1 = document.createElement("tr");
const tr2 = document.createElement("tr");
const tr3 = document.createElement("tr");

// creates child nodes into the document
document.body.appendChild(table);
table.appendChild(tr1);

// Adds data
const tableData = [{Car:"Lamborgini", Mph: "221", Price: "600,000"},
    {Car:"Honda", Mph: "130", Price:"30,000"}
]

// Set attribute for the table
document.setAttribute("style","color:green");
document.setAttribute("name","carTable")
document.id = "carTable";
//table.style.fontFamily = "Times New Roman", Times, serif;
document.style.border = "12px";

// Adds data to the table conents
document.body.innerHTML = `<table>

  <tr>

    <td>Car</td>

    <td>Top</td>

    <td>Price</td>

  </tr>

 <tr>

    <td>Chevrolet</td>

    <td>120mph</td>

    <td>$10,000</td>

  </tr>

 <tr>

    <td>Pontiac</td>

    <td>140mph</td>

    <td>$20,000</td>

  </tr>

</table>`
