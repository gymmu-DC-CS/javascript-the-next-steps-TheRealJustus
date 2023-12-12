export function exercise01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement.charCodeAt() === 101) result.push("")
    else if (currentElement.charCodeAt() === 69) result.push("")
    else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

export function exercise02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    const capitalizedElment = currentElement.toUpperCase()
    result.push(capitalizedElment)
  }
  return result.join("")
}

export function exercise03(args) {
  const input = args
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      count = count + 1
    } else if (currentElement === "0") count = count - 1
    if (currentElement === "E") {
      count = count + 1
    } else if (currentElement === "0") count = count - 1
  }
  return count
}

export function exercise04(args) {
  const input = args
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "Word") {
      count = count + 1
    } else if (currentElement === "0") count = count - 1
  }
  return count
}