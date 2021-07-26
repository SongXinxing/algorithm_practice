const MODE_WAIT = 0
const MODE_TEXT = 1
const MODE_TAGNAME = 2
const MODE_ATTRIBUTES = 3
const MODE_WHITESPACE = 4

function compile(xml) {
  let mode = MODE_TEXT
  let propsName = ''
  let buffer = ''
  let current = [0] // parent, tag, attribute, ...children

  function commit() {
    if (mode === MODE_TEXT && buffer) {
      
    } else if (mode === MODE_TAGNAME && buffer) {
      current[1] = buffer
      mode = MODE_WHITESPACE
    } else if (mode === MODE_WHITESPACE && buffer) {
      (current[2] = current[2] || {})[buffer] = true
    } else if (mode === MODE_ATTRIBUTES && propsName) {
      (current[2] = current[2] || {})[propsName] = buffer
    }

    buffer = ''
  }
}