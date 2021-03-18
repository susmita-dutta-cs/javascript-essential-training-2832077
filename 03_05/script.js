/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object :", backpack);

/**
 * Creating a vehicle as object
 */

const vehicle = {
  name: " four wheeler",
  size: 4.2,
  color: "red",
  noWheels: 4,
};

console.log("The vehicle object :", vehicle);
console.log("The pocketNum value :", backpack.pocketNum);
console.log("Strap length L before:", backpack.strapLength.left);
console.log("Strap length R before:", backpack.strapLength.right);

backpack.newStrapLength(10, 15);

console.log("Strap length left:", backpack.strapLength.left);
