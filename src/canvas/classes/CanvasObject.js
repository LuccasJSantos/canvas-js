import Drawer from './Drawer'
import Vector2D from './Vector2D'

export default class CanvasObject extends Drawer {
  constructor() {
    super()
    this.pos = new Vector2D(0, 0)
    this.size = new Vector2D(0, 0)
    this.vel = new Vector2D(0, 0)
    this.acc = new Vector2D(0, 0)
  }

  move() {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
  }
}