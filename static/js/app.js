var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the forms
var form = d3.select("#datetime");


// Select table body
var tbody = d3.select("tbody");

// Event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Event handler function
function runEnter () {

    tbody.text("");
    
    // Prevent page from refreshing
    d3.event.preventDefault();
    
    // Select input elements and get raw HTML
    var inputElement = d3.select("#datetime");
    var inputElement2 = d3.select("#cityinput");
    
    // Get the value property of the input elements
    var inputValue = inputElement.property("value");
    var inputValue2 = inputElement2.property("value");
    console.log(inputValue2);
    
    // Filter data where datetime equals user input 
    var filteredData = tableData.filter(record => record.datetime === inputValue);
    console.log(filteredData);

    // Append filtered data to table
    filteredData.forEach(function(filteredData) {
        var row = tbody.append("tr");
        Object.entries(filteredData).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td").text("");
            var cell = row.append("td").text(value);
        });
    });
    
};

function BuildTable (data) {
    tbody.html("");
    data.forEach(function(element) {
        var row = tbody.append("tr");
        Object.entries(element).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td").text("");
            var cell = row.append("td").text(value);
        });
});}

BuildTable(tableData);
