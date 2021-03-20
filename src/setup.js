export default () => {
  window.$canvas = window.init()

  function update () {
    requestAnimationFrame(() => {
      window.update($canvas)
      update()
    })
  }

  update()
}