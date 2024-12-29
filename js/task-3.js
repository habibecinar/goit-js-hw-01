function getElementWidth(content, padding, border) {
  const contentNumber = parseFloat(content);
  const paddingNumber = parseFloat(padding);
  const borderNumber = parseFloat(border);
  const totalPrice = 2 * (paddingNumber + borderNumber) + contentNumber;

  return parseFloat(totalPrice);
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
