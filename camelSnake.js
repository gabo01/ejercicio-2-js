const textCamel = "exampleInCamelCase";
const camelPattern = /([A-Z])/g;
const textSnake = textCamel.replaceAll(camelPattern, function (_match, letter) {
  return "_" + letter.toLowerCase();
});
console.log(textSnake);
