// Shop object

const shop = {
  name: "Happy Goods",
  location: "London - Old Street",
  currency: "Sterling (£)",
  inventory: [
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
}

// a) Cost of Sharp Soda?

// const sharpSodaCost = shop.inventory[3].price
const sharpSodaCost = shop.inventory[3].price
console.log('a)')
console.log(sharpSodaCost)
console.log('\n')

// b) Dynamic Reading

const isAvailable = (inventoryIndex) => {
  return shop.inventory[inventoryIndex].available
}

// Uncomment line below to test
console.log('b)')
console.log("Cherry Sundae available? ==> " + isAvailable(2));
console.log('\n')

// c) Adding Dynamic Entry

const addItem = (name, price, available) => {
  shop.inventory.push({name: name, price: price, available: available})
}

addItem("Pizza", 5.99, true)

console.log('c)')
console.log("Is the new item available? ==> " + isAvailable(5))
console.log('\n')

// d) Dynamic Reading +

const search = (query) => {
  shop.inventory.forEach((item) => {
    if (item.name.match(query)) {
      console.log(item.name)
    }
  })
}

// Uncomment line below to test
console.log('d)')
search("h");
console.log('\n')

// e) List All

const listAvailableInventory = () => {
  shop.inventory.forEach((item) => {
    if (item.available) {
      console.log(`${item.name}: ${item.price}`)
    }
  })
}

// Uncomment line below to test
console.log('e)')
listAvailableInventory();
