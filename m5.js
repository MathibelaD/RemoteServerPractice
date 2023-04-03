const url = "http://localhost:4377/";
const getData = document.getElementById("lessons")

const manipulate = (test) => {
  return getData.innerText = test
}

const fetchData = async () => {
  const req = new XMLHttpRequest();
  req.open("GET", "http://localhost:4377/");

  try {
    req.send();
    req.responseType = 'json';
    req.onreadystatechange = () => {
    if(req.readyState === 4){
      console.log(req.response)
      let data = req.response
      // manipulate("data hehehehe")
    }else {
      console.log("Loading", req.readyState)
    }
  }
  } catch (error) {
    return error
  }

};

fetchData()
// function load(url, callback) {
//   const xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       return callback(JSON.parse(xhr.response));
//       //  console.log(JSON.parse(xhr.response));
//     }
//   }
//   xhr.open('GET', url, true);
//   xhr.send({message: "a ke sure"});
// }

// console.log(load(url, () => {}))

//  let lesson_data = document.getElementById("lessons")

// //  lesson_data.innerText = load(url, () => {})