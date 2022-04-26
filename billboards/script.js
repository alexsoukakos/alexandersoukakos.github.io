window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("eyes").style.width = "433px";
  } else {
    document.getElementById("eyes").style.width = "1155px";
  }
}


// console.log("Is Our Script File Working?");

// Load the airtable library, call it "Airtable";

var Airtable = require("airtable");
// console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keyOInlFujAUpPC0f" }).base(
  "appHDQMQG8i3Nms7C"
);

// get our collection base, select all the records
// specify functions that will receive the data
base("billboards")
  .select({})
  .eachPage(gotPageOfBillboards, gotAllBillboards);

  // an empty array to hold our data
var billboards = [];

// callback function that receives our data
function gotPageOfBillboards(records, fetchNextPage) {
  console.log("gotPageOfBillboards()");
  // add the records from this page to our array
  billboards.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllBillboards(err) {
  console.log("gotAllBillboards()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogBillboards();
  showBillboards();
}

// just loop through the books and console.log them
function consoleLogBillboards() {
  console.log("consoleLogBillboards()");
  billboards.forEach(billboard => {
    console.log("Billboard:", billboard);
  });
}

// look through our airtable data, create elements
function showBillboards() {
  console.log("showBillboards()");
  billboards.forEach(billboard => {

    // creating a new div container where billboard info will go
    var billboardContainer = document.createElement("div");
    billboardContainer.classList.add("billboard-container");
    document.querySelector(".gallery").append(billboardContainer);

    // add billboard image
    var photo = document.createElement("img");
    photo.classList.add("billboard-image");
    photo.src = billboard.fields.photo[0].url;
    billboardContainer.append(photo);

    // creating a new div container where billboard info will go
    var informationContainer = document.createElement("div");
    informationContainer.classList.add("information-container");
    document.querySelector(".information").append(informationContainer);

    //click to get info
    

    // add billboard titles
    var billboard_message = document.createElement("h2");
    billboard_message.classList.add("billboard-title");
    billboard_message.innerText = billboard.fields.billboard_message;
    informationContainer.append(billboard_message);

      // add billboard address
      var location = document.createElement("h2");
      location.classList.add("location");
      location.innerText = billboard.fields.location;
      informationContainer.append(location);

      // get billboard type from airtable and loop thru array and add each genre ass a class to container
      var billboardState = billboard.fields.state;
      billboardState.forEach(function(state) {
      billboardContainer.classList.add("state")
      })

      //add event listener to filter

      var filterGeorgia = document.querySelector('.tagbutton3');
      filterGeorgia.addEventListener("click" , function(){

        if (billboardContainer.classList.contains("georgia")){
          billboardContainer.style.display = "none";
        }
      })


    // var billboard_message = document.createElement("h2");
    // billboard_message.innerText = billboard.fields.billboard_message;
    // document.body.append(billboard_message);

    // var location = document.createElement("p");
    // location.innerText = billboard.fields.location;
    // document.body.append(location);

    // var photo = document.createElement("img");
    // photo.src = billboard.fields.photo[0].url;
    // document.querySelector(".galleryimage").append(photo);
  });
}