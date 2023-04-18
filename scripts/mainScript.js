const fetchData = async () => {
    const req = new XMLHttpRequest();
    req.open("GET", "http://localhost:4377/", true);
  
    try {
      req.send();
      req.responseType = 'json'; // assign response type to json
      req.onreadystatechange = () => { 
      if(req.readyState === 4){ // readyState 4 is done/request finished/response is ready
        // console.log(req.response)
        const data = JSON.stringify(req.response)
        return data
      }
    }
    } catch (error) {
      return error
    }
  
  };

fetchData()
//===================================================================
// console.log(localStorage.getItem('data'))

const topCountries = JSON.parse(localStorage.getItem('data'))
var xValues = [];


xValues.push(topCountries[0].mostPopulates.country)
xValues.push(topCountries[1].leastPopulated.country)
xValues.push(topCountries[2].medianPopulates.country)

// var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Top 3 Countries Population"
    }
  }
});


