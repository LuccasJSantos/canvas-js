import ObjectManager from './ObjectManager'
import Vector2D from './Vector2D'

export default class CanvasObject {
  /** @param {ObjectManager} manager */
  constructor(manager) {
    this.pos = new Vector2D(0, 0)
    this.size = new Vector2D(0, 0)
    this.vel = new Vector2D(0, 0)
    this.acc = new Vector2D(0, 0)

    manager.add(this)
  }

  move() {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
  }

  update() {

  }

  render() {
    
  }
}