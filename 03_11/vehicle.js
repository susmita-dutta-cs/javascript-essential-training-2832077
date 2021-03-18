function vehicle(
  name,
  volume,
  color,
  pocketNum,
  strapLengthL,
  strapLengthR,
  doorOpen
) {
  this.name = name;
  this.volume = volume;
  this.color = color;
  this.pocketNum = pocketNum;
  this.strapLength = {
    left: strapLengthL,
    right: strapLengthR,
  };
  this.doorOpen = doorOpen;
  this.toggleLid = function (doorStatus) {
    this.doorOpen = doorStatus;
  };
  this.newcountLength = function (windowLeft, windowRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  };
}

const car = new vehicle("Everyday car", 30, "grey", 15, 26, 26, false);
