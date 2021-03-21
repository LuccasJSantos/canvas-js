import Canvas from "./canvas/classes/Canvas"
import mouseHandler from "./canvas/mouseHandler"

/**
 * @param {Canvas} canvas
 * @param {function(Canvas): Canvas} initCallback
 * @param {function(Canvas): Canvas} updateCallback
 */
export default (canvas, initCallback, updateCallback) => {
  window.$canvas = canvas

  function update() {
    requestAnimationFrame(() => {
      updateCallback(canvas)
      update()
    })

    mouseHandler.update()
  }

  mouseHandler.setup()
  
  initCallback(canvas)
  update()
}