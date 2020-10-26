fetch('dino.json').then((response)=> {
  console.log('resolve', response);
  return response.json();
}).then(data => {
    console.log(data);
}).catch((err) => {
  console.log('rejected', err);
});