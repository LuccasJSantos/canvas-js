import { getStyle } from "../utils"

export default class Canvas {
  /**
   * @param {number} w 
   * @param {number} h 
   */
  constructor(w, h) {
    this.width = w
    this.height = h
    this.c = document.querySelector('canvas')
    this.ctx = this.c.getContext('2d')

    this.c.width = this.width
    this.c.height = this.height
  }

  /**
   * @param {number | string} r 0-255 | 'blue', 'red'
   * @param {*} g 
   * @param {*} b 
   * @param {*} a 
   */
  setBackground(r, g, b, a) {
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.ctx.fillStyle = getStyle(r, g, b, a)
    this.ctx.fillRect(0, 0, this.width, this.height)
  }

  setStroke(stroke) {
    this.ctx.strokeStyle = stroke
    this.ctx.stroke()
  }

  setFill(fill) {
    this.ctx.fillStyle = fill
    this.ctx.fill()
  }
}