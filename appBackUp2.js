
/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 * Source: StackOverFlow
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const form = document.querySelector('#dino-compare');

form.addEventListener('submit', e => {
  e.preventDefault();
 const  human = {
    name: form.name.value,
    feet: form.feet.value,
    inches: form.inches.value,
    weight: form.weight.value,
    diet: form.diet.value
  };

  function search() {
    var queryURL = "dino.json";
  
    fetch(queryURL)
      .then(function(response) {
  
        return response.json();
      })
      .then(function(data) {
  
  
        let filtered = data["Dinos"].filter(function(el) {
          return el.species != "Pigeon";
        });
        console.log(filtered);
       filtered = shuffle(filtered);
       console.log(filtered);

  
        let PigeonData = data["Dinos"].filter(function(el) {
          return el.species === "Pigeon";
        });
        console.log(PigeonData[0].species);
        console.log(human);
        let container = document.querySelector("#dino-compare");
        container.innerHTML = "";
        
        
      
      
       
  function createContents(specieType, imgLoc, specieFact){
    return  "<div>"+
    "<div class='nested2'>"+
      
          "<h3>" + `${specieType} `+ "</h3>" +
       
    "</div>" +
    "<div class='nested2'>"+
       "<p>" + "<img src=" + "images/"+ `${imgLoc}`+".png "+"alt="+"Pigeon/>"+"</p>"+
    "</div>"+
    "<div class='nested2'>"+
       "<p>"+`${specieFact} `+"</p>"+
    "</div>"+
 "</div>"
  };
     
  let res = " <div id='content'>";
        const specieType = PigeonData[0].species;
       const  imgLoc = specieType.toLowerCase();
        const specieFact = PigeonData[0].fact;
  
      res += createContents(specieType, imgLoc, specieFact)

     const  specieType = filetred[0].species;
     const  imgLoc = specieType.toLowerCase();
      const specieFact = filetred[0].fact;
      res += createContents(specieType, imgLoc, specieFact)

      specieType = filetred[1].species;
      imgLoc = specieType.toLowerCase();
      specieFact = filetred[1].fact;
      res += createContents(specieType, imgLoc, specieFact)

      res += createContents(specieType, imgLoc, specieFact)

      specieType = filetred[2].species;
      imgLoc = specieType.toLowerCase();
      specieFact = filetred[2].fact;

      res += createContents(specieType, imgLoc, specieFact)
      res += createContents(specieType, imgLoc, specieFact)
  
      res += createContents(specieType, imgLoc, specieFact)
      res += createContents(specieType, imgLoc, specieFact)
      res += createContents(specieType, imgLoc, specieFact)
  
  
      res += "</div>" 

    container.innerHTML += res;

 

    
      })
      .catch(function(error) {
        console.log('Error during fetch: ' + error.message);
      });
      

     
 
 
    };

  search();
});




//search();