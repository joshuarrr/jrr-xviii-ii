module.exports = height => {
  const min = 'screen and (min-height: '
  const max = 'screen and (max-height: '
  const units = 'px)'

  if (height.charAt(0) === '<') {
    return min + height.substr(1) + units
  } else if (height.charAt(0) === '>') {
    return max + height.substr(1) + units
  } else if (height.charAt(0) <= '9') {
    return min + height + units
  }
}
