import { map } from "./math"

export const getStyle = (r = 0, g = 0, b = 0, a = 255) => {
  if (typeof r === 'string') {
    return r
  } else {
    const alpha = map(a, 0, 255, 0, 1)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
}