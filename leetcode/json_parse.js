var rx_one = /^[\],:{}\s]*$/;
var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
JSON.parse = function(text, reviver) {
    var j;
    text = String(text);
    rx_dangerous.lastIndex = 0;
    if (rx_dangerous.test(text)) {
        text = text.replace(rx_dangerous, function(a) {
            return (
                "\\u" +
                ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            );
        });
    }
    if (
      rx_one.test(
          text
          .replace(rx_two, "@")
          .replace(rx_three, "]")
          .replace(rx_four, "")
      )
    ) {

        j = eval("(" + text + ")");

        return j;
    }

    throw new SyntaxError("JSON.parse");
};


JSON.parse(`{"a":1,"b":[1,2,3]}`)
