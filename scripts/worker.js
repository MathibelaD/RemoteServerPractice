// Receive the worker data from the main thread
onmessage = event => {
    const workerData = event.data;
  
    // Process the worker data
    const processedData = doSomethingWithWorkerData(workerData);
  
    // Send the processed data back to the main thread
    postMessage(processedData);
  };
  
  function doSomethingWithWorkerData(data) {
    // Perform some processing on the data
    return data;
  }
  