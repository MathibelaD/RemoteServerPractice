const fetchData = async () => {
    const req = new XMLHttpRequest();
    req.open("GET", "http://localhost:4377/", true);
  
    try {
      req.send();
      req.responseType = 'json'; // assign response type to json
      req.onreadystatechange = () => { 
      if(req.readyState === 4){ // readyState 4 is done/request finished/response is ready
        console.log(req.response)
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
console.log(localStorage.getItem('data'))



