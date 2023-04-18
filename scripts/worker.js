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
    const totalPopulation = data.reduce((sum, item) => sum + item.population, 0);
    // console.log("here",totalPopulation)
    let MaxPopulation = data.reduce ((max, popu) => max.population > popu.population ? max : popu)
    let MinPopulation = data.reduce((min, popu) => min.population < popu.population ? min : popu)
    let medianPopulation = data[Math.round((data.length - 1) / 2)]
    
    let MaxPerc = (MaxPopulation.population / totalPopulation).toPrecision(3);
    let MinPerc = (MinPopulation.population / totalPopulation).toPrecision(3);
    let midPerc = (medianPopulation.population / totalPopulation).toPrecision(3);

    console.log(MaxPerc,MinPerc,midPerc)
    newData.unshift({mostPopulates: MaxPopulation, MaxPerc},
      {leastPopulated: MinPopulation,MinPerc},{medianPopulates: medianPopulation,midPerc})
    return newData
  }
