// Receive the worker data from the main thread
onmessage = event => {
    const workerData = event.data;
  
    // Process the worker data
    const processedData = letsProcessData(workerData);
  
    // Send the processed data back to the main thread
    postMessage(processedData);
  };
  
  function letsProcessData(data) {
   for (let i = 0; i < data.length; i++) {
    let populations = data[i].population
    let pop = populations.sort()
        console.log(pop)
    }
    return populations;
  }
  