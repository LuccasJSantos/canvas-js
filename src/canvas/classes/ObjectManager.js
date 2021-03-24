import CanvasObject from './CanvasObject'
import Drawer from './Drawer'

export default class ObjectManager {
  constructor() {
    /** @type {Set<CanvasObject>} */
    this.objects = new Set([])
  }

  /** @param {CanvasObject} object */
  add(object) {
    this.objects.add(object)
  }

  /** @param {CanvasObject} object */
  destroy(object) {
    this.objects.delete(object)
  }

  /** @param {Drawer} drawer */
  updateAll(drawer) {
    this.objects.forEach((object) => {
      object.update(drawer)
      object.render(drawer)
    })
  }
}