/**
 * Write an efficient method that tells us whether or not an input string brackets ("{", "}",
"(", ")", "[", "]") opened and closed properly. Example: “{[]}” => true, “{(])}” => false,
“{([)]}” => false
 */

console.log(`#4 QUESTION - Write an efficient method that tells us whether or not an input string brackets ("{", "}",
"(", ")", "[", "]") opened and closed properly. Example: “{[]}” => true, “{(])}” => false,
“{([)]}” => false`);

function isValidBrackets(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")") {
      const last = stack.pop();
      if (last !== "(") {
        return false;
      }
    } else if (char === "]") {
      const last = stack.pop();
      if (last !== "[") {
        return false;
      }
    } else if (char === "}") {
      const last = stack.pop();
      if (last !== "{") {
        return false;
      }
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidBrackets("{[]}"));
console.log(isValidBrackets("{(])}"));
console.log(isValidBrackets("{([)]}"));
console.log(isValidBrackets(""));
console.log(isValidBrackets("{[()]}"));
