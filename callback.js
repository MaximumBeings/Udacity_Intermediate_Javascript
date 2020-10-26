const getTodos = (callback) => {

    const request = new XMLHttpRequest();
  
    request.addEventListener('readystatechange', () => {
  
      if(request.readyState === 4 && request.status === 200){
        callback(undefined, request.responseText);
      } else if (request.readyState === 4){
        callback('could not fetch the data', undefined);
      }
  
    });
    
    request.open('GET', 'dino.json');
    request.send();
  
  };
  
  console.log(1);
  console.log(2);
  
  getTodos((err, data) => {
    console.log('callback function fired');
    if(err){
      console.log(err);
    } else {
  
      obj = JSON.parse(data);
      console.log(typeof obj);
      console.log( obj["Dinos"]);
      console.log( obj["Dinos"][0]);
      console.log( obj["Dinos"][1]);
      console.log( obj["Dinos"][2]);
      console.log( obj["Dinos"][3]);
      console.log( obj["Dinos"][4]);
      console.log( obj["Dinos"][5]);
      console.log( obj["Dinos"][6]);
      console.log( obj["Dinos"][7]);
  
    }
  });
  
  console.log(3);
  console.log(4);