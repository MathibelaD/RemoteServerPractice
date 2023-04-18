// Retrieve the JSON data from the file
const toBackend = []
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
      localStorage.setItem("Population", JSON.stringify(letsProcessData))
    };
});

// fetchData()