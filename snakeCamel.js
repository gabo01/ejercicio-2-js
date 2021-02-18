const textSnake = "example_in_snakecase";
const snakePattern = /_([a-z])/g;
const textCamel = textSnake.replaceAll(snakePattern, function (_match, letter) {
  return letter.toUpperCase();
});
console.log(textCamel);
