const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

// What the above code is doing: 
    // // 
    // In the first line, the URL to the SpaceX is defined.
    // In the second line, d3.json() method places a call to SpaceX's API, retrieves the data, and prints it to the browser console.

// How to retrieve the full name of the Vanderburg Air Force Base 
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// d3.json("samples.json").then(function(data){
//     console.log("hello");
// });

// The above code won't run because: 
//     What gives? What is a CORS request?

//     The short explanation is that, for security reasons, a local server must be run when loading an external file into a JavaScript script file. If you don't understand these security issues right now, don't worry. We will come back to it later.

//     To load the page, navigate to the directory where samples.json and index.html, as well as the script file, plots.js, are located. Open the command line (Terminal or Git Bash) and type the following:

// python -m http.server

// IMPORTANT NOTE: When reading an external data file such as a CSV or JSON file into a script, you must run a server. You cannot directly open index.html with your browser.