
// const getTodos = async () => {

// const response = await fetch('dino.json');
// const data = await response.json();

// return data;
// };

// const a = getTodos().then(data => {return data})
// var myJSON = JSON.stringify(a);

// console.log();


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
                users["Dinos"].forEach(element => console.log(element));
                return users;
});

}

renderUsers();





function getJsonData(url, callback) {
    let request = new XMLHttpRequest;
    let timer = setTimeout(function() {
        getJsonData(url, callback);
    }, 10000);
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            clearTimeout(timer);
            return callback(JSON.parse(request.responseText));
        }
    }
    request.open('GET', url);
    request.send();
}



var jsonUrl = "dino.json";
var myData;
getJsonData(jsonUrl, function(data) {
    myData = data;
    console.log(myData);
});


