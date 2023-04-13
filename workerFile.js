// Retrieve the JSON data from the file
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
      const processedData = event.data;
      console.log(processedData);
    };
  });
