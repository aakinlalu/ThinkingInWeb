
// Create a table
function createTable(persons) {
    const container = document.getElementById("container");
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    thead.innerHTML = '<tr><th>Name</th><th>Age</th><th>City</th></tr>';

    // Create table body
    const tbody = document.createElement("tbody");
    persons.forEach(person => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${person.name}</td><td>${person.age}</td><td>${person.city}</td>`;
        tbody.appendChild(tr);
    });
     // Append the table to the container
    table.appendChild(thead);
     // Append the table to the container
    table.appendChild(tbody);
    container.appendChild(table);

}

document.addEventListener("DOMContentLoaded", async (event) => {
    const config = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = await fetch("person.json", config);
    const persons = await response.json();
    createTable(persons);
});
