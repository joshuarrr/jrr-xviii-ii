module.exports = (pxval, context) => {
  const c = !context ? 10 : context
  return `${pxval / c}em`
}
