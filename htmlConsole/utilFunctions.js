const attSetter = (elm, att) => {
  for (const at in att) {
    elm.setAttribute(at, att[at])
  }
}

module.exports = {
  attSetter,
}