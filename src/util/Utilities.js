export function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.replace(word[0], word[0].toUpperCase()))
    .join(' ')
}

export function replaceUnderscoreWithSpace(str) {
  return str.replace(/_/g, ' ')
}
