import Canvas from './canvas/classes/Canvas'
import setup from './setup'

/** @returns {Canvas} */
window.init = function () {
  // user setup goes here

  return new Canvas(700, 700)
}

/** @param {Canvas} $canvas */
window.update = function ($canvas) {
  $canvas.setBackground()
  
  $canvas.setFill('red')
  $canvas.ctx.fillRect(0, 0, 40, 40)
}

// setup canvas
setup()
