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
    const previousElement = input[i - 1]

    if (currentElement === " " && previousElement != "-") {
      count = count + 1
    } else if (currentElement === "0") count = count - 1
  }
  return count + 1
}

export function exercise05(args) {
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i].charCodeAt()
    if (currentElement >= 65 && currentElement <= 90) {
      return true
    }
  }

  return false
}

export function exercise06(args) {
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i].charCodeAt()
    if (
      (currentElement >= 33 && currentElement <= 47) ||
      (currentElement >= 58 && currentElement <= 64) ||
      (currentElement >= 91 && currentElement <= 96) ||
      (currentElement >= 123 && currentElement <= 126)
    ) {
      return true
    }
  }

  return false
}

export function exercise07(args) {
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "97, 110, 100") {
      return true
    }
  }

  return false
}
