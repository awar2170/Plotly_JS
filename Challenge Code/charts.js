function init() {
  // Grab a reference to the dropdown select element
  const selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    const sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);

}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    const metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    const resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    const result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    const PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}
// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a constiable that holds the samples array. 
    const sample_array = data.samples
    // console.log(sample_array)
    // console.log(sample)
    // 4. Create a constiable that filters the samples for the object with the desired sample number.
    const first_value = sample_array.find((item) => item.id === sample)
    // console.log(first_value)

    //  5. Create a constiable that holds the first sample in the array.
    //It's up there

    // 6. Create constiables that hold the otu_ids, otu_labels, and sample_values.
    const name_otu_ids = first_value.otu_ids
    const name_otu_labels = first_value.otu_labels
    const name_sample_values = first_value.sample_values

    const displayArray = []
    first_value.otu_ids.forEach((item, index) => {
      const sortableData = {
        otu_labels: first_value.otu_labels[index],
        otu_id: item,
        otu_value: first_value.sample_values[index]
      }
      displayArray.push(sortableData);
    })
    console.log(displayArray);

    const orderedDisplayArray = displayArray.sort(function (a, b) { return b.otu_value - a.otu_value });

    console.log(orderedDisplayArray)

    const smolDisplayData = orderedDisplayArray.slice(0, 10);
    console.log(smolDisplayData)

    const labeledDisplaydata = smolDisplayData.map((item) => {
      item.otu_id = "OTU " + item.otu_id.toString();
      return item 
    });

    console.log(labeledDisplaydata);

    const xArray = [];
    const yArray = [];
    const hoverArray = [];

    labeledDisplaydata.forEach((item)=>{
    xArray.push(item.otu_value);
    yArray.push(item.otu_id);
    hoverArray.push(item.otu_labels);
    });

    // console.log(name_otu_labels)

    //const sample_values = 

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    // const yticks = name_otu_ids.sort((a,b) => a.id - b.id).reverse();
    // console.log(yticks)

    const arr = name_sample_values.sort(function (a, b) { return b - a });
    // console.log(arr)

    const firstTen = arr.slice(0, 10);

    console.log(firstTen)
    // 8. Create the trace for the bar chart. 
    const barData = [{
      x: xArray.reverse(),
      y: yArray.reverse(),
      text: hoverArray.reverse(),
      type: "bar",
      orientation: "h"
    }];
    console.log(barData)
    // 9. Create the layout for the bar chart. 
    const barLayout = {
      title: "Top 10 Bacteria Cultures Found"
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout)
    // 1. Create the trace for the bubble chart.
    const bubbleData = [{
      x: name_otu_ids,
      y: name_sample_values,
      text: hoverArray,
      mode: "markers", 
      marker: {
        size: name_sample_values,
        color: name_otu_ids,
        colorscale: "Portland",
      }
    }
    ];    
    
    // 2. Create the layout for the bubble chart.
    const bubbleLayout = {
      title: "Bacteria Cultures Per Sample", 
      xaxis: { title: "OTU ID"}
      // showlegend: false, 
      
    };
    
    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout); 

    // 4. Create the trace for the gauge chart.
    const metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    const resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    const result = resultArray[0];

    const gaugeData = [{
      domain: { x: [0,1], y:[0,1] },
      value: result.wfreq,
      title: { text: "Belly Button Washing Frequency: <br> Scrubs per Week" }, 
      type: "indicator", 
      mode: "gauge+number",
      delta: { reference: 2}, 
      gauge: {
        axis: { range: [null, 10] }, 
        steps: [
          {range: [0,2], color: "red"}, 
          {range: [2,4], color: "orange"}, 
          {range: [4,6], color: "yellow"}, 
          {range: [6,8], color: "lightgreen"}, 
          {range: [8,10], color: "green"}
        ]
      }
    }
    ];
    
    // 5. Create the layout for the gauge chart.
    const gaugeLayout = { 
      
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);

  });
}

