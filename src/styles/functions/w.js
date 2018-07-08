module.exports = width => {
  const min = 'screen and (min-width: '
  const max = 'screen and (max-width: '
  const units = 'px)'

  if (width.charAt(0) === '<') {
    return min + width.substr(1) + units
  } else if (width.charAt(0) === '>') {
    return max + width.substr(1) + units
  } else if (width.charAt(0) <= '9') {
    return min + width + units
  }
}
