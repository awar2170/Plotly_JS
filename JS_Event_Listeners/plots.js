function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] 
    }];
    Plotly.newPlot("plot", data);
  };

  init(); // Formats the above to the page, otherwise is kinda small 
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
