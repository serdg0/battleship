const Ship = ({ length, name, imgArrV, imgArrH }) => ({
  length,
  name,
  imgArrV,
  imgArrH,
  hit() {
    this.length -= 1;
    return this;
  },
  isSunk() {
    return this.length === 0;
  },
});

export default Ship;