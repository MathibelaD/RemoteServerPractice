const url = "http://localhost:4377/";
// const getData = document.getElementById("lessons")

// const manipulate = (test) => {
//   return getData = test
// }

const fetchData = async () => {
  const req = new XMLHttpRequest();
  req.open("GET", "http://localhost:4377/", true);

  try {
    req.send();
    req.responseType = 'json';
    req.onreadystatechange = () => {
    if(req.readyState === 4){
      console.log(req.response)
      let data = req.response
      // data.lessons.map(() => {

      // })
      Object.values(data.lessons).map((e) => {
        console.log(e)
        document.getElementById("para").innerText = e.description
      })
      document.getElementById("lessons").innerText = req.response
      return data
    }
  }
  } catch (error) {
    return error
  }

};

fetchData()
