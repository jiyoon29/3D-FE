export const formatRating = (value: number): string | number => {
  if (!Number.isInteger(value) || value === 0) {
    return value
  } else {
    return value.toString().padEnd(3, '.0')
  }
}
