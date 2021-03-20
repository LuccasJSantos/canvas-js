import Canvas from './canvas/classes/Canvas'
import setup from './setup'

const canvas = new Canvas(700, 700)

// setup canvas
setup(canvas,
  () => {
    // user setup goes here
  },
  () => {
    // loop logic goes here (60 fps)
  })
