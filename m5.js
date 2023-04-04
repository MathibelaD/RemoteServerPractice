const url = "http://localhost:4377/";
const getData = document.getElementById("lessons")

// const manipulate = (test) => {
//   return getData = test
// }

const fetchData = async () => {
  const req = new XMLHttpRequest();
  req.open("GET", "http://localhost:4377/", true);

  try {
    req.send();
    req.responseType = 'json'; // assign response type to json
    req.onreadystatechange = () => { 
    if(req.readyState === 4){ // readyState 4 is done/request finished/response is ready
      console.log(req.response)
      let data = req.response
      Object.values(data.lessons).map((e) => {
        getData.appendChild(
        Object.assign(document.createElement("p"),{
          innerText: e.id + " " + e.topic + " " +  e.description 
        }))
      })
     
      return data
    }
  }
  } catch (error) {
    return error
  }

};

fetchData()
