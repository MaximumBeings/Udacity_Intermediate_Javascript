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
  const human = {
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

        function createContents(specieType, imgLoc, specieFact) {
          return "<div>" +
            "<div class='nested2'>" +

            "<h3>" + `${specieType} ` + "</h3>" +

            "</div>" +
            "<div class='nested2'>" +
            "<p>" + "<img src=" + "images/" + `${imgLoc}` + ".png " + "alt=" + "Pigeon/>" + "</p>" +
            "</div>" +
            "<div class='nested2'>" +
            "<p>" + `${specieFact} ` + "</p>" +
            "</div>" +
            "</div>"
        };

        let res = " <div id='content'>";
        specieType = PigeonData[0].species;
        imgLoc = specieType.toLowerCase().split(" ", 1);
        specieFact = PigeonData[0].fact;

        res += createContents(specieType, imgLoc, specieFact)

        specieType = filtered[0].species;
        imgLoc = specieType.toLowerCase().split(" ", 1);
        specieFact = filtered[0].fact;
        res += createContents(specieType, imgLoc, specieFact)

        specieType = filtered[1].species;
        imgLoc = specieType.toLowerCase().split(" ", 1);
        specieFact = filtered[1].fact;
        res += createContents(specieType, imgLoc, specieFact)

        specieType = filtered[2].species;
        imgLoc = specieType.toLowerCase().split(" ", 1);
        specieFact = filtered[2].fact;

        res += createContents(specieType, imgLoc, specieFact)

        specieType = human.name;
        imgLoc = "human";
        specieFact = "There are 7.5 billion people in the world";

        res += createContents(specieType, imgLoc, specieFact)


        specieType = filtered[3].species;
        imgLoc = specieType.toLowerCase().split(" ", 1);
        specieFact = filtered[3].fact;
        res += createContents(specieType, imgLoc, specieFact)


        specieType = filtered[4].species;
        imgLoc = specieType.toLowerCase().split(" ", 1);
        specieFact = filtered[4].fact;

        res += createContents(specieType, imgLoc, specieFact)

        specieType = filtered[5].species;
        imgLoc = specieType.toLowerCase().split(" ", 1);
        specieFact = filtered[5].fact;
        res += createContents(specieType, imgLoc, specieFact)

        specieType = filtered[6].species;
        imgLoc = specieType.toLowerCase().split(" ", 1);
        specieFact = filtered[6].fact;
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