import Vector2D from "./classes/Vector2D"

let isMousePressed = false
let mouseDownHandler = null

const setup = () => {
  window.mouse = {
    pos: new Vector2D(),
    onClick: null,
    onDown: null
  }

  addEventListener('mouseup', (e) => {
    if (mouse.onClick) {
      mouse.onClick(e)
    }
    isMousePressed = false
  })

  addEventListener('mousedown', (e) => {
    if (mouse.onDown) {
      mouseDownHandler = () => {
        mouse.onDown(e)
      }
    }
    isMousePressed = true
  })

  addEventListener('mousemove', (e) => {
    mouse.pos.x = e.clientX
    mouse.pos.y = e.clientY
  })
}

const update = () => {
  if (isMousePressed && mouse.onDown) {
    mouseDownHandler()
  }
}

export default ({
  setup,
  update
})