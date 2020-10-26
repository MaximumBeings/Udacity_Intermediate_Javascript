
// class getHuman {
// 	constructor(name, feet, inches, weight, diet) {
// 		this.name = name;
//     this.feet = feet;
//     this.inches = inches;
//     this.weight = weight;
//     this.diet = diet;
		
// 	}
// }



// function formSubmitted() {
// 	// Get the values from input fields
//   	let name = document.querySelector("name");
//     let feet = document.querySelector("feet");
//     let inches = document.querySelector("inches");
//     let weight = document.querySelector("weight");
//     let diet = document.querySelector("diet");

  
//     const human = {
//       name :name.value,
// 	feet :feet.value,
// 	inches : inches.value,
//   weight :weight.value,
//   diet :diet.value,
//     };

//     console.log(human);


// 	// refresh the html table
  
	
// 	// do not let your browser submit the form using HTTP
// 	return false;
// }

// formSubmitted();


// const getTodos = async () => {

// const response = await fetch('dino.json');
// const data = await response.json();

// return data;
// };

// const a = getTodos().then(data => {return data})
// var myJSON = JSON.stringify(a);

// console.log();


const form = document.querySelector('#dino-compare');


form.addEventListener('submit', e => {
  e.preventDefault();

  console.log(form.name.value);
  console.log(form.feet.value);
  console.log(form.inches.value);
  console.log(form.weight.value);
  console.log(form.diet.value);

human = {
 name :form.name.value,
feet :form.feet.value,
	inches :form.inches.value,
weight :form.weight.value,
 diet: form.diet.value };
  

});


function search() {
  var queryURL = "dino.json";

  fetch(queryURL)
    .then(function (response) {
      // response.json() returns a json string,
      // returning it will convert it
      // to a pure JavaScript
      // object for the next then's callback
      return response.json();
    })
    .then(function (users) {
      // users is a JavaScript object here
      console.log(users["Dinos"][0]["species"]);
      console.log(users["Dinos"][0]["diet"]);
      console.log(users["Dinos"][0]["fact"]);
      console.log(users["Dinos"][0]["height"]);
      console.log(users["Dinos"][0]["weight"]);
      console.log(users["Dinos"][0]["when"]);

      console.log(users["Dinos"][1]["species"]);
      console.log(users["Dinos"][1]["diet"]);
      console.log(users["Dinos"][1]["fact"]);
      console.log(users["Dinos"][1]["height"]);
      console.log(users["Dinos"][1]["weight"]);
      console.log(users["Dinos"][1]["when"]);

      let filtered = users["Dinos"].filter(function(el) { return el.species != "Pigeon"; }); 
      console.log(filtered);

      let PigeonData = users["Dinos"].filter(function(el) { return el.species === "Pigeon"; }); 
      console.log(PigeonData);


      users["Dinos"].forEach(element => console.log(element));
    })
    .catch(function (error) {
      console.log('Error during fetch: ' + error.message);
    });
}

search();

async function getUsers() {
  let url = 'dino.json';
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};


async function renderUsers() {
  let users = await getUsers().then(function (users) {
    // users is a JavaScript object here
    console.log(users["Dinos"][0]["species"]);
    someArray = users["Dinos"].slice(0, users["Dinos"].length - 1); 
    console.log(someArray);

    let filtered = users["Dinos"].filter(function(el) { return el.species != "Pigeon"; }); 
    console.log(filtered);



    users["Dinos"].forEach(element => console.log(element));
    return users;
  });

}

renderUsers();




const getTodos = (resource, callback) => {

  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {

    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, JSON.parse(request.responseText));
    } else if (request.readyState === 4) {
      callback('could not fetch the data', undefined);
    }

  });

  request.open('GET', resource);
  request.send();

};

console.log(1);
console.log(2);

getTodos('dino.json', (err, data) => {
  console.log('callback function fired');
  if (err) {
    console.log(err);
  } else {

    //obj = JSON.parse(data);
    console.log(typeof obj);
    console.log(data["Dinos"]);
    console.log(data["Dinos"][0]);
    console.log(data["Dinos"][1]);
    console.log(data["Dinos"][2]);
    console.log(data["Dinos"][3]);
    console.log(data["Dinos"][4]);
    console.log(data["Dinos"][5]);
    console.log(data["Dinos"][6]);
    console.log(data["Dinos"][7]);

  }
});

console.log(3);
console.log(4);


const getTodos2 = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('Error Getting Resource');
      }

    });

    request.open('GET', resource)
    request.send();
  });
};

getTodos2('dino.json').then(data => {
  console.log('Promise Resolved:');
  console.log(data["Dinos"]);
  console.log(data["Dinos"][1]);
  console.log(data["Dinos"][2]);
  console.log(data["Dinos"][3]);
  console.log(data["Dinos"][4]);
  console.log(data["Dinos"][5]);
  console.log(data["Dinos"][6]);
  console.log(data["Dinos"][7]);

}).catch(err => {
  console.log('Promise Rejected:', err);
})



// fetch api

fetch('dino.json').then((response) => {
  console.log('resolve', response);
  return response.json();
}).then(data => {
  console.log(data);
}).catch((err) => {
  console.log('rejected', err);
});


const getTodos3 = async () => {

  const response = await fetch('dino.json');
  const data = await response.json();  
  return data;
};

const res = getTodos3().then(data => {
console.log(data)});


// Create Dino Constructor


// Create Dino Objects


// Create Human Object

// Use IIFE to get human data from form


// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.


// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen


// On button click, prepare and display infographic