var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#datetime");

// Select table body
var tbody = d3.select("tbody");

// Event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Event handler function
function runEnter () {
    
    // Prevent page from refreshing
    d3.event.preventDefault();
    
    // Select input element and get raw HTML
    var inputElement = d3.select("#datetime");
    
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    
    // Filter data where datetime equals user input 
    var filteredData = tableData.filter(record => record.datetime === inputValue);
    console.log(filteredData);

    // Append filtered data to table
    filteredData.forEach(function(filteredData) {
        var row = tbody.append("tr");
        Object.entries(filteredData).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td").text(value);
        });
    });
    
};
