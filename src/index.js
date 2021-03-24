import Canvas from './canvas/classes/Canvas'
import setup from './setup'

/** @param {{ canvas: Canvas, manager: ObjectManager }} payload */
const init = (payload) => {

}

const canvas = new Canvas(700, 700)
// setup canvas
setup(canvas, init)
