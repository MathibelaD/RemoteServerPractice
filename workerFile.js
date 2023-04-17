// Retrieve the JSON data from the file
const workerDisplay = document.getElementById("worker");
fetch('data.json')
  .then(response => response.json())
  .then(workerData => {
    // Create a web worker
    const worker = new Worker('/scripts/worker.js');
    // console.log(workerData)
    // Send the worker data to the web worker
    worker.postMessage(workerData);

    // Receive the processed data from the web worker
    worker.onmessage = event => {
      const letsProcessData = event.data;
      console.log(letsProcessData)
      workerDisplay.appendChild(
        document.body.innerHTML = letsProcessData[0].country + ' ' + letsProcessData[0].population
      )
    };
  });
