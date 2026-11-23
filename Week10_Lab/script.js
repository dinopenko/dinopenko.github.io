// Grocery List Application
// Dino Penko
// Week 10 Lab

// Create an empty array to store the grocery items
let groceries = [];

// Function used to add an item to the grocery list
function addItem() {

    // Get the selected item from the dropdown list
    let item = document.getElementById("groceryItem").value;

    // Check if the user selected an item
    if (item == "") {
        alert("Please select a grocery item.");
        return;
    }

    // Add the selected item to the array
    groceries.push(item);

    // Reset the dropdown list
    document.getElementById("groceryItem").value = "";

    // Display the updated grocery list
    displayList();
}


// Function used to display all items in the grocery list
function displayList() {

    // Create an empty variable for the HTML output
    let output = "";

    // Loop through every item stored in the array
    for (let i = 0; i < groceries.length; i++) {

        output +=
            "<li>" +
                "<span>" + groceries[i] + "</span>" +
                "<button onclick='removeItem(" + i + ")'>Remove</button>" +
            "</li>";
    }

    // Display the grocery items as an unordered list
    document.getElementById("groceryList").innerHTML = output;

    // Display the number of items currently in the array
    document.getElementById("itemCount").innerHTML =
        "Items in list: " + groceries.length;
}

// Function used to remove an item from the grocery list
function removeItem(index) {

    // Remove one item from the array at the selected position
    groceries.splice(index, 1);

    // Display the updated grocery list
    displayList();
}