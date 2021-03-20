export default class Vector2D {
  constructor (x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  /** @param {Vector2D} vector */
  add(vector) {
    this.x += vector.x
    this.y += vector.y
  }

  /** @param {Vector2D} vector */
  subtract(vector) {
    this.x -= vector.x
    this.y -= vector.y
  }

  /** @param {number} val */
  mult(val) {
    this.x *= val
    this.y *= val
  }

  /** @param {number} val */
  divide(val) {
    this.x /= val
    this.y /= val
  }

  /**
   * @param {number} x 
   * @param {number} y 
   */
  max(x, y) {
    if (x || x === 0) {
      this.x = this.x >= x ? x : this.x
    }

    if (y || y === 0) {
      this.y = this.y >= y ? y : this.y
    }
  }

  /** @returns {Vector2D} */
  copy() {
    return new Vector2D(this.x, this.y)
  }
}