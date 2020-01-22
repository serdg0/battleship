const Ship = ({ length, name }) => ({
  length,
  name,
  hit() {
    this.length -= 1;
    return this;
  },
  isSunk() {
    return this.length == 0
  },
})

export default Ship;