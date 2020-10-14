// Prototype for Shop
const inventory = [
  {
    name: "Apple Pie",
    price: 12.56,
    available: true
  },
  {
    name: "Banana Pastry",
    price: 6.25,
    available: true
  },
  {
    name: "Cherry Sundae",
    price: 9.99,
    available: false
  },
  {
    name: "Sharp Soda",
    price: 1.99,
    available: true
  },
  {
    name: "Tuna Sandwich",
    price: 3.29,
    available: false
  }
]

function Shop(name, location, currency, inventory) {
  this.name = name;
  this.location = location;
  this.currency = currency;
  this.inventory = inventory;

  this.isAvailable = (index) => this.inventory[index].available

  this.addItem = (name, price, available) => this.inventory.push({ name, price, available })

  this.search = (query) => {
    this.inventory.forEach((item) => {
      if (item.name.match(query) || item.name.match(query.toLowerCase())) {
        console.log(item.name)
      }
    })
  }

  this.listAvailableInventory = () => {
    this.inventory.forEach((item) => {
      console.log(`${item.name}: ${item.price}`)
    })
  }
}

const shop = new Shop("Happy Goods", "London - Old Street", "Sterling (£)", inventory);

console.log(`Is a Sharp Soda available? ==> ${shop.isAvailable(3)}`);

shop.addItem("Tomato Soup", 1.25, true);
console.log(`Is the new item available? ==> ${shop.isAvailable(5)}`);

shop.search("S");

shop.listAvailableInventory();
