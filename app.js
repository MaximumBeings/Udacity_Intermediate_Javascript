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

        for (let i = 0; i < 9 - 1; i++) {

          if (i == 0) {
            specieType = PigeonData[i].species;
            imgLoc = specieType.toLowerCase().split(" ", 1);
            specieFact = PigeonData[i].fact;

            res += createContents(specieType, imgLoc, specieFact)

          } else if (i == 5 - 1) {
            specieType = human.name;
            imgLoc = "human";
            specieFact = "There are 7.5 billion people in the world";
            res += createContents(specieType, imgLoc, specieFact);

            specieType = filtered[i - 1].species;
            imgLoc = specieType.toLowerCase().split(" ", 1);
            specieFact = filtered[i - 1].fact;
            res += createContents(specieType, imgLoc, specieFact);
          } else {
            specieType = filtered[i - 1].species;
            imgLoc = specieType.toLowerCase().split(" ", 1);
            specieFact = filtered[i - 1].fact;
            res += createContents(specieType, imgLoc, specieFact);
          }
        };

        res += "</div>"
        container.innerHTML += res;

        function weightCompare(human, filtered) {
          let res = []
          for (let i = 0; i < filtered.length; i++) {
            toUse = {
              species: filtered[i].species,
              Dinoweight: filtered[i].weight,
              humanName: human.name,
              humanWeight: human.weight,
              Difference: (filtered[i].weight - human.weight).toFixed(2),
              PercentDiff: ((filtered[i].weight - human.weight) / human.weight).toFixed(2)

            };
            res.push(toUse);
          }

          return res;
        };

        console.log(weightCompare(human, filtered));
        const listOfWeights = weightCompare(human, filtered);






        let mainDiv1 = document.querySelector(".container");
        mainDiv1.innerHTML = "";
        mainDiv1.innerHTML +=" <h3>Dinosaurs Versus Human Weights</h3>";
        var table = document.createElement("table");
        table.innerHTML += " <thead><tr><th scope='col'>Dinosaur</th> <th scope='col'>Weight</th> <th scope='col'>Human</th> <th scope='col'>Weight</th><th scope='col'>Weight Difference</th><th scope='col'>% Difference</th></tr></thead>"
        table.setAttribute("class", "table table-border table-success");


        // iterate on the array of users
        listOfWeights.forEach(function(currentWeight) {
          // creates a row
          var row = table.insertRow();

          row.innerHTML = "<td>" + currentWeight.species + "</td>" +
            "<td>" + currentWeight.Dinoweight + "</td>" +
            "<td>" + currentWeight.humanName + "</td>" +
            "<td>" + currentWeight.humanWeight + "</td>" +
            "<td>" + currentWeight.Difference + "</td>" +
            "<td>" + currentWeight.PercentDiff + "</td>"
        });

        // adds the table to the div
        mainDiv1.appendChild(table);
        console.log(table);



        let mainDiv2 = document.querySelector("#container2");
        mainDiv2.innerHTML = "";
        mainDiv2.innerHTML +=" <h3>Dinosaurs Versus Human Heights</h3>";
        var table = document.createElement("table");
        table.setAttribute("class", "table table-border table-success");
        table.innerHTML += " <thead><tr><th scope='col'>Dinosaur</th> <th scope='col'>Height</th> <th scope='col'>Human</th> <th scope='col'>Height</th><th scope='col'>Height Difference</th><th scope='col'>% Difference</th></tr></thead>"

        function heightCompare(human, filtered) {
          let res = []
          for (let i = 0; i < filtered.length; i++) {
            toUse = {
              species: filtered[i].species,
              Dinoheight: filtered[i].height,
              humanName: human.name,
              humanHeight: human.feet,
              Difference: (filtered[i].height - (human.feet + (human.inches) / 12.0)).toFixed(2),
              PercentDiff: ((filtered[i].height - (human.feet + (human.inches) / 12.0)) / ((human.feet + (human.inches) / 12.0))).toFixed(2)

            };
            res.push(toUse);
          }

          return res;
        };

        console.log(heightCompare(human, filtered));
        const listOfHeights = heightCompare(human, filtered);
        // iterate on the array of users
        listOfHeights.forEach(function(currentHeight) {
          // creates a row
          var row = table.insertRow();

          row.innerHTML = "<td>" + currentHeight.species + "</td>" +
            "<td>" + currentHeight.Dinoheight + "</td>" +
            "<td>" + currentHeight.humanName + "</td>" +
            "<td>" + currentHeight.humanHeight + "</td>" +
            "<td>" + currentHeight.Difference + "</td>" +
            "<td>" + currentHeight.PercentDiff + "</td>"
        });

        // adds the table to the div
        mainDiv2.appendChild(table);
        console.log(table);


        function dietCompare(human, filtered) {
          let res = []
          for (let i = 0; i < filtered.length; i++) {
            toUse = {
              species: filtered[i].species,
              DinoDiet: filtered[i].diet,
              humanName: human.name,
              humandiet: human.diet,                    

            };
            res.push(toUse);
          }

          return res;
        };

        console.log(dietCompare(human, filtered));
        const listOfDiets = dietCompare(human, filtered);


        let mainDiv3 = document.querySelector("#container3");
        mainDiv3.innerHTML = "";
        mainDiv3.innerHTML +=" <h3>Dinosaurs Versus Human Diets</h3>";
        var table = document.createElement("table");
        table.setAttribute("class", "table table-border table-success");
        table.innerHTML += " <thead><tr><th scope='col'>Dinosaur</th> <th scope='col'>Dino Diet</th> <th scope='col'>Human</th>  <th scope='col'>Human Diet</th></tr></thead>"

        listOfDiets.forEach(function(currentDiet) {
          // creates a row
          var row = table.insertRow();

          row.innerHTML = "<td>" + currentDiet.species + "</td>" +
            "<td>" + currentDiet.DinoDiet + "</td>" +
            "<td>" + currentDiet.humanName + "</td>" +
            "<td>" + currentDiet.humandiet + "</td>" 
        });

        // adds the table to the div
        mainDiv3.appendChild(table);
        console.log(table);

      })
      .catch(function(error) {
        console.log('Error during fetch: ' + error.message);
      });

  };

  search();
});