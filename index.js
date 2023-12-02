// Represents a menu item with a name and a price
class MenuItem {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  
    // Displays details of the menu item
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Price: $${this.price}`);
    }
  }
  
  // Represents a menu that contains a list of menu items
  class Menu {
    constructor() {
      this.menuItems = [];
    }
  
    // Adds a new menu item to the menu
    addItem(item) {
      this.menuItems.push(item);
      console.log(`${item.name} added to the menu.`);
    }
  
    // Views a menu item by name and displays details if found
    viewItemByName(itemName) {
      const foundItem = this.menuItems.find(item => item.name === itemName);
  
      if (foundItem) {
        // Use window.confirm to display details for better user interaction
        window.confirm(`Item found in the menu:\n\n${foundItem.name} - $${foundItem.price}`);
      } else {
        window.alert(`Item with name '${itemName}' not found in the menu.`);
      }
    }
  
    // Displays details of all items in the menu
    displayMenuItems() {
      if (this.menuItems.length > 0) {
        // Use window.alert to display a formatted list for better user interaction
        window.alert("Menu items:\n\n" + this.menuItems.map((item, index) =>
          `${index + 1}. ${item.name} - $${item.price}`
        ).join('\n'));
      } else {
        console.log("No items to display.");
      }
    }
  
    // Deletes a menu item by name, confirms deletion if found
    deleteItem(itemName) {
      const index = this.menuItems.findIndex(item => item.name === itemName);
  
      if (index !== -1) {
        const deletedItem = this.menuItems.splice(index, 1)[0];
        window.confirm(`Item deleted from the menu:\n\n${deletedItem.name} - $${deletedItem.price}`);
      } else {
        window.alert(`Menu item with name '${itemName}' not found.`);
      }
    }
  }
  
  // Shows the main menu options and returns the user's choice
  function showMainMenuOptions() {
    return prompt(`
      Main Menu Options:
      0) Exit
      1) Enter a new menu item
      2) View menu item by name
      3) Delete a menu item
      4) Display all items in the menu
      Enter your choice: 
    `);
  }
  

// Create a new instance of the Menu class
const menu = new Menu();

// Variable to track whether the user has requested to exit the menu app
let exitRequested = false;

// Continue displaying the main menu options until the user decides to exit
while (!exitRequested) {
  // Show the main menu options and get the user's choice
  const choice = showMainMenuOptions();

  // Switch statement to handle user's choice
  switch (choice) {
    // If the user chooses '0', exit the app and display a goodbye message
    case '0':
      console.log("Exiting the menu app. Goodbye!");
      // Set the exitRequested variable to true to exit the loop
      exitRequested = true;
      break;
    // If the user chooses '1', prompt for a new menu item and add it to the menu
    case '1':
      // Prompt the user to enter the name of the new menu item
      const itemName = prompt("Enter the name of the menu item: ");
      // Prompt the user to enter the price of the new menu item and convert it to a float
      const itemPrice = parseFloat(prompt("Enter the price of the menu item: "));
      // Create a new MenuItem instance with the entered name and price
      const newItem = new MenuItem(itemName, itemPrice);
      // Add the new menu item to the menu
      menu.addItem(newItem);
      break;
    // If the user chooses '2', prompt for the name of the menu item to view and display its details
    case '2':
      // Prompt the user to enter the name of the menu item to view
      const itemNameToView = prompt("Enter the name of the menu item to view: ");
      // Call the viewItemByName method to display details of the specified menu item
      menu.viewItemByName(itemNameToView);
      break;
    // If the user chooses '3', prompt for the name of the menu item to delete and delete it
    case '3':
      // Prompt the user to enter the name of the menu item to delete
      const itemNameToDelete = prompt("Enter the name of the menu item to delete: ");
      // Call the deleteItem method to delete the specified menu item
      menu.deleteItem(itemNameToDelete);
      break;
    // If the user chooses '4', display details of all items in the menu
    case '4':
      // Call the displayMenuItems method to show details of all items in the menu
      menu.displayMenuItems();
      break;
    // If the user enters an invalid choice, display a message
    default:
      console.log("Invalid choice. Please enter a valid option.");
  }
}

  