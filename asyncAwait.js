const getTodos3 = async () => {

  const response = await fetch('dino.json');
  const data = await response.json();  
  return data;
};

const res = getTodos3().then(data => {
console.log(data)});
);