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
const canvas = document.getElementById('details')
const topCountries = JSON.parse(localStorage.getItem('Population'))
var xValues = [];
var yValues = []

xValues.push(topCountries[0].mostPopulates.country)
xValues.push(topCountries[1].leastPopulated.country)
xValues.push(topCountries[2].medianPopulates.country)

yValues.push(topCountries[0].MaxPerc)
yValues.push(topCountries[1].MinPerc)
yValues.push(topCountries[2].MidPerc)


var barColors = ["yellow", "green","blue"];

new Chart("myChart", {
  type: "doughnut",
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
      text: "Countries Population"
    }
  }
});

Object.values(xValues).map((e,i) => {
canvas.appendChild(
  Object.assign(document.createElement('p'), {
    innerText: ` ${e} has population of`
  })
)
})

  //         getData.appendChild(
  //         Object.assign(document.createElement("p"),{
  //           innerText: e.id + " " + e.topic + " " +  e.description 
  //         }))
  //       })