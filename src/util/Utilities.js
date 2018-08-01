export function toTitleCase(str) {
  return str.replace(/(^|[\s-])\S/g, function (match) {
    return match.toUpperCase();
});
}

export function replaceUnderscoreWithSpace(str) {
  return str.replace(/_/g, " ");
}
