import { getStyle } from '../utils'

export default class Drawer {
  constructor() {

  }

  /**
   * @param {number | string} r 0-255 | 'blue', 'red'
   * @param {*} g 
   * @param {*} b 
   * @param {*} a 
   */
  stroke(r, g, b, a) {
    $canvas.setStroke(
      getStyle(r, g, b, a)
    )
  }

  /**
   * @param {number | string} r 0-255 | 'blue', 'red'
   * @param {*} g 
   * @param {*} b 
   * @param {*} a 
   */
  fill(r, g, b, a) {
    $canvas.setFill(
      getStyle(r, g, b, a)
    )
  }

  /**
   * Draws a circle to the canvas
   * @param {number} x 
   * @param {number} y 
   * @param {number} r Radius
   */
   circle(x, y, r) {
    if (r < 0) { r = 0 }

    $canvas.ctx.beginPath()
    $canvas.ctx.arc(x, y, r, 0, Math.PI * 2)
    $canvas.ctx.closePath()
  }

  /**
   * Draws a rectangle to the canvas
   * @param {number} x 
   * @param {number} y 
   * @param {number} w
   * @param {number} h
   */
   rectangle(x, y, w, h) {
    if (w < 0) { w = 0 }
    if (h < 0) { h = 0 }

    $canvas.ctx.fillRect(x, y, w, h)
  }
}