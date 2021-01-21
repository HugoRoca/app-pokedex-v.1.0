export const isNullOrUndefined = (obj: object): boolean => {
  return obj === null || obj === undefined
}

export const fillZero = (number: number, width: number) => {
  const numberOutput = Math.abs(number)
  const length = number.toString().length
  const zero = '0'

  if (width <= length) {
    if (number < 0) {
      return '-' + numberOutput.toString()
    }
    return numberOutput.toString()
  }
  if (number < 0) {
    return '-' + zero.repeat(width - length) + numberOutput.toString()
  }
  return zero.repeat(width - length) + numberOutput.toString()
}
