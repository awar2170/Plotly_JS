console.log(cityGrowths);

// Sort and Select the Cities 
    var sortedCities = cityGrowths.sort((a,b) =>
    a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

    var topFiveCities = sortedCities.slice(0,5);

// Create Arrays of City Names and Growth Figures 
    var topFiveCityNames = topFiveCities.map(city => city.City);
    var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// Create a Bar Chart with the Arrays 
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

  // WHAT IS HAPPENING ABOVE:
        // The trace specifies the type of graph as a bar chart as well as defines the x- and y-axis data.
        // The variable data encloses trace in an array to meet Plotly's format requirement.
        // The variable layout is assigned to an object that specifies the chart's title and axis labels.
        // Finally, the graph is rendered with Plotly.newPlot().

// // SKILL DRILL 
//     var sortedCities_pop = cityGrowths.sort((a,b) =>
//     a.population - b.population).reverse(); 

//     var topFiveCities_pop = sortedCities_pop.slice(0,7);

//     var topFiveCityNames_pop = topFiveCities_pop.map(city => city.City);
//     var topFiveCityGrowths_pop = topFiveCities_pop.map(city => parseInt(city.population));

//     var trace = {
//         x: topFiveCityNames_pop,
//         y: topFiveCityGrowths_pop,
//         type: "bar"
//      };
//       var data = [trace];
//       var layout = {
//         title: "Most Rapidly Growing Cities",
//         xaxis: {title: "City" },
//         yaxis: {title: "Population"}
//       };
//       Plotly.newPlot("bar-plot", data, layout);