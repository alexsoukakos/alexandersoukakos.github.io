
let flags = [
    {name: "American", amount: 12},
    {name: "Greek", amount: 2},
    {name: "Japan", amount: 5},
    {name: "Canada", amount: 2},
    {name: "Brazil", amount: 7},
    {name: "Mexico", amount: 12}
    ];
  
  // First show all the flowers and create divs for each of them
  let container = document.querySelector(".garden");
  // create a counter variable that will give us each flowers number in the array
  let i = 0;
  let b;
  
  function displayFlags(flag) {
    // create a for loop that will run based on the flower amount
    for (var b = 0; b < flag.amount; b++) {
      // creates a new div; appends that div to the container
    let newItem = document.createElement("div");
    let flagDiv = container.appendChild(newItem);
    // increase the counter variable by one
    i++;
    // adds a shared class to each new div
    newItem.classList.add("flag");
    // adds a specific class to each new div
    newItem.classList.add(flag.name);
    newItem.classList.add(flag.name + [i]);
    // places the flower name and amount to the div
    // flowerDiv.innerHTML = flower.name;
    }



    
  }
  // loops through the flowers and runs the displayFlowers function for each one
  flags.forEach(displayFlags);