const url = "http://localhost:4377/";

// const fetchData = async (url) => {
//   const req = new XMLHttpRequest();
//   try {
//     req.open("GET", url); // open channel
//     req.send(); // send request
//     const resp = await req.response;
//     return resp;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

function load(url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      callback(xhr.response);
      console.log(xhr.response);
    }
  }

  xhr.open('GET', url, true);
  xhr.send();
}

load(url, () => {})
// await fetchData(url)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));
//========================================
 let lesson_data = document.getElementById("lessons")

//  lesson_data.innerText = fetchData(url)