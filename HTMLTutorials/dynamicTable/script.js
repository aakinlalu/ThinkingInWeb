const person =  [
    {name: "John", age: 30, city: "New York"},
    {name: "Jane", age: 25, city: "San Francisco"},
];

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

document.addEventListener("DOMContentLoaded", (event) => {
    createTable(person);
});
