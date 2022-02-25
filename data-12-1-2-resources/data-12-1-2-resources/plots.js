// // // Line Graph
// // Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);
// //// This is a pretty unruly way to write the line graph, see below for a more compact way to write graphs with plotly


// ////Line Graph Compact Code 
// var trace = {
//     x: [1,2,3], 
//     y: [10,20,30]
// }; 
// Plotly.newPlot("plotArea", [trace])


// // Bar Chart
// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// };
// Plotly.newPlot("plotArea", [trace]);
// // Use the same index.html file,
// // Make sure that the html includes everything that is in that file because that's what's rendering this code.  
// // In the html file there are two <script> tags; the first one pulls in teh library to render this code; the last one connects that page to this "plots.js" code file.  It's like importing a library, you have to do that importing stuff into html because that is what is going to be rending the information. 
// // NOTE: Above, the [trace] portion specifices the charts as bar chart, with type: bar. 


// // //How to add axis labels to your bar chart
// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// };

// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };

// Plotly.newPlot("plotArea", [trace], layout);


// ////SKILL DRILL 
// var trace = { 
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'bar'
// };

// var layout = {
//     title: "Percent Drinks Order by Type of Drink",
//     xaxis: {title: "Drinks"},
//     yaxis: {title: "Percent of Drinks Ordered"}
// };

// Plotly.newPlot("plotArea", [trace], layout);
// ////NOTE: DONT FORGET; COMMAS AFTER THE OBJECT ENTRIES; NOT LIKE PYTHON 


////CREATING A PIE CHART
var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine",      "nonalcoholic martini", "nonalcoholic margarita",
        "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
};

var data = [trace];

var layout = {
    title: "'Pie' Chart",
};

Plotly.newPlot("plotArea", data, layout); // Note that "trace" was renamed as data, just for giggles. 
////NOTE: THE X AND Y TRACE LABELS ARE "LABELS" = "X" AND "VALUES" = "Y"

//// HOW TO MAKE SCATTER PLOTS IN JS: https://plotly.com/javascript/line-and-scatter/

