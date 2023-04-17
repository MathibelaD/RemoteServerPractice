// Receive the worker data from the main thread
onmessage = event => {
    const workerData = event.data;
  
    // Process the worker data
    const processedData = letsProcessData(workerData);
    // Send the processed data back to the main thread
    postMessage(processedData);
  };

  function letsProcessData(data) {

    let newData = []
    let MaxPopulation = data.reduce ((max, popu) => max.population > popu.population ? max : popu)
    let MinPopulation = data.reduce((min, popu) => min.population < popu.population ? min : popu)
    let medianPopulation = data[Math.round((data.length - 1) / 2)]


    newData.unshift({mostPopulates: MaxPopulation},
      {leastPopulated: MinPopulation},{medianPopulates: medianPopulation})
    return newData
  }
  
  // {
  //   mostPopulates: {countryname: '', population: '', percentage: 0},
  //   leastPopulated: {countryname: '', population: '', percentage: 0},
  //   medianPopulates: {countryname: '', population: '', percentage: 0}
  //   }