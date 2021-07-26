// 遍历处理字符所处于的模式
const MODE_WAIT = 0;
const MODE_TEXT = 1; // 进入普通模式
const MODE_TAGNAME = 2; // 进入元素模式
const MODE_ATTRIBUTE = 3; // 进入属性模式
const MODE_WHITESPACE = 4; // 进入空格模式

function compile(tmpl) {
  let mode = MODE_TEXT;
  let buffer = '';
  let propName = '';
  let quote = '';
  let current = [0]; // vnode, tab, attributes, children
  let i = 0
  function create(tab, attributes, ...children) {
    if (attributes) {
      attributes = Object.keys(attributes).reduce((total, curr) => {
        total.push({
          key: curr,
          value: attributes[curr]
        })
        return total
      }, [])
    }
    return { tab, attributes, children };
  }
  function commit() {
    // if (mode === MODE_TEXT && (buffer = buffer.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) {
    //   current.push(buffer);
    // } else 
    if (mode === MODE_TAGNAME && buffer) {
      current[1] = buffer; // buffer 便是type
      mode = MODE_WHITESPACE;
    } else if (mode === MODE_WHITESPACE && buffer) {
      (current[2] = current[2] || {})[buffer] = true;
    } else if (mode === MODE_ATTRIBUTE && propName) {
      (current[2] = current[2] || {})[propName] = buffer;
      propName = '';
    }
    buffer = '';
    tmpl = tmpl.substring(i)
    i = 0
  };
  while (i < tmpl.length) {
    const char = tmpl[i++]
    if (mode === MODE_TEXT) {
      if (char === "<") {
        commit();
        current = [current, '', null];
        mode = MODE_TAGNAME;
        if (tmpl[i] !== '/') {
          tmpl = tmpl.replace(/(?<==)\s*|\s*(?==)(?=.*>)/g, '')
        }
      } else {
        buffer += char
      }
    } else if (quote) {
      if (char === quote) {
        quote = ''; // 重置
      } else {
        buffer += char
      }
    } else if (char === `"` || char === `'`) {
      quote = char;
    } else if (char === '>') {
      commit();
      mode = MODE_TEXT;
    } else if (mode === MODE_WAIT) {
    } else if (char === '=') {
      mode = MODE_ATTRIBUTE;
      propName = buffer; // 属性名
      buffer = '';
    } else if (char === '/') {
      commit();
      if (mode === MODE_TAGNAME) {
        current = current[0];
      }
      const temp = current;
      ;(current = current[0]).push(create(...temp.slice(1)));
      mode = MODE_WAIT;
    } else if (/\s/.test(char)) {
      commit();
      mode = MODE_WHITESPACE;
    } else {
      buffer += char;
    }
  }
  return current.length > 2 ? current.slice(1) : current[1];
}

/**

const MODE_WAIT = 0;
const MODE_TEXT = 1; // 进入普通模式
const MODE_TAGNAME = 2; // 进入元素模式
const MODE_ATTRIBUTE = 3; // 进入属性模式
const MODE_WHITESPACE = 4; // 进入空格模式

// MODE_TAGNAME && buffer
// MODE_WHITESPACE && buffer
// MODE_ATTRIBUTE && propName

1 // MODE_TEXT -> '<' else
// quote -> char === quote else
// " '
1 // >
// MODE_WAIT
// =
1 // /
1 // /\s/.test(char)
// else


*/


var xml = `<div id="container" >
  <label id="footer" text="this is footer" >
  </label>
</div>`;

xml = `
<div id="container" />
  <label id="footer" text="this is footer" />`

console.log(JSON.stringify(compile(xml), null, 2))


