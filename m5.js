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

// create circular svg image  with red background and purple boder. add  text to the image 'I am SVG' centered.
const svgholder = document.getElementById("imageX")
// const svg = document.createElementNS("http://www.w3.org/2000/svg",'svg')
// svgholder.appendChild(
//   Object.assign(document.createElementNS("http://www.w3.org/2000/svg",'svg'),{
//     height : "100",
//     width: "100"
//   })).appendChild(
//     Object.assign(document.createElementNS("http://www.w3.org/2000/svg",'circle'),{
//       cx: "50",
//       cy: "50",
//       r: "40"
//     })
//   )

const svg1 = document.createElementNS("http://www.w3.org/2000/svg",'svg')
svg1.setAttribute('width', '100')
svg1.setAttribute('height', '100')  
  
const circle1 = document.createElementNS("http://www.w3.org/2000/svg",'circle')
circle1.setAttribute("cx",50)
circle1.setAttribute("cy",50)
circle1.setAttribute("r",40)
circle1.setAttribute('style', 'fill: red; stroke: purple; stroke-width: 4px;')
// circle1.setAttribute("stroke",red)
svg1.appendChild(circle1)
svgholder.appendChild(svg1)
fetchData()
