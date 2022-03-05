// function init() {
//     data = [{
//       x: [1, 2, 3, 4, 5],
//       y: [1, 2, 4, 8, 16] 
//     }];
//     Plotly.newPlot("plot", data);
//   };

//   init(); // Formats the above to the page, otherwise is kinda small 
  // In this part of the code, a simple line chart, with x and y axes, is rendered with Plotly.newPlot(). By default, when a user opens index.html in a browser, this is the chart that is displayed:

  d3.selectAll("#dropdownMenu").on("change", updatePlotly);
  function updatePlotly() {
    var dropdownMenu = d3.select("#dropdownMenu");
    var dataset = dropdownMenu.property("value");
  
    var xData = [1, 2, 3, 4, 5];
    var yData = [];
  
    if (dataset === 'dataset1') {
      yData = [1, 2, 4, 8, 16];
    };
  
    if (dataset === 'dataset2') {
      yData = [1, 10, 100, 1000, 10000];
    };
  
    var trace = {
      x: [xData],
      y: [yData],
    };
    Plotly.restyle("plot", trace);
  };
  
  init();

// What the above code is doing: 
// Let's break down this code:

//     The x-axis values, or xData, remain the same. However, the y-axis values, or yData, depend on which dropdown menu option was selected. yData is initially a blank array.
//     If the value of the dropdown menu option is 'dataset1', yData is assigned an array of integers. If 'dataset2' is chosen, another array of integers is assigned to yData.
//     The xData and yData arrays are assembled inside the trace object. Unlike the Plotly.newPlot() method, thePlotly.restyle() method defaults to accepting an object (trace in this case) as its data argument, rather than an array.
//     The Plotly.restyle() method is used to re-render the page on the browser. This method is more efficient than calling the Plotly.newPlot() method, as it does not create a brand new chart from scratch, but instead modifies the previously displayed chart with the updated information.

// DYNAMICALLY GENERATE DROPDOWN MENU ITEMS
function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

init();

// What the above code is doing: 
  // Let's break down what this code is doing:

    // All the code is enclosed inside the init() function, which is called on the last line.
    // Insideinit(), the d3.select() method is used to select the dropdown menu, which has an id of #selDataset. The dropdown menu is assigned to the variable selector.
    // The d3.json() method is used to read the data from samples.json. The data from the entire JSON file is assigned the (arbitrary) argument name data.
    // Inside the data object, the names array, as seen from console.log(data), contains the ID numbers of all the study participants. The variable sampleNames is assigned to this array.

// THE OPTIONCHANGED FUNCTION 
function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}

function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    // PANEL.append("h6").text(result.id);
    // PANEL.append("h6").text(result.ethnicity);
    // PANEL.append("h6").text(result.gender);
    // PANEL.append("h6").text(result.age);
    // PANEL.append("h6").text(result.location);
    // PANEL.append("h6").text(result.bbtype);
    // PANEL.append("h6").text(result.wfreq);

    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    } )
  });
}

// What the Above Code is doing: 
  // Here's a breakdown of what's happening in this code:

  // The function buildMetadata() takes in sample, or an ID number, as its argument. That is, when a dropdown menu option is selected, the ID number is passed in as sample.
  // Then d3.json() pulls in the entire dataset contained in samples.json. Once the dataset is read in, it is referred to as data.
  // The metadata array in the dataset (data.metadata) is assigned the variable metadata.
  // Then the filter() method is called on the metadata array to filter for an object in the array whose id property matches the ID number passed into buildMetadata() as sample. Recall that each object in the metadata array contains information about one person.
  // Because the results of the filter() method are returned as an array, the first item in the array (resultArray[0]) is selected and assigned the variable result.
  // The id of the Demographic Info panel is sample-metadata. The d3.select() method is used to select this <div>, and the variable PANEL is assigned to it.
  // PANEL.html("") ensures that the contents of the panel are cleared when another ID number is chosen from the dropdown menu.
  // Finally, the append() and text() methods are chained to append a H6 heading to the panel and print the location of the volunteer to the panel, respectively.
