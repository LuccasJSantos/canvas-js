import Canvas from "./canvas/classes/Canvas"
import Drawer from "./canvas/classes/Drawer"
import ObjectManager from "./canvas/classes/ObjectManager"
import mouseHandler from "./canvas/mouseHandler"

/**
 * @param {Canvas} canvas
 * @param {function(Canvas): Canvas} initCallback
 * @param {function(Canvas): Canvas} updateCallback
 */
export default (canvas, initCallback, updateCallback) => {
  window.$canvas = canvas

  const manager = new ObjectManager()
  const drawer = new Drawer()
  
  function update() {
    canvas.ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    manager.updateAll(drawer)
    mouseHandler.update(canvas)
    
    requestAnimationFrame(update)
  }

  mouseHandler.setup(canvas)
  
  initCallback({ canvas, manager })
  update()
}