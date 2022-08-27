const products = [
  "MacBook Air with M2 Laptop",
  "HP SPECTRE X360 14 laptop",
  "Asus ROG Zephyrus G15 Laptop",
  "LG Gram 15 laptop",
  "HP Envy x360 13 laptop",
  "Samsung Galaxy S22 Ultra Phone",
  "Google Pixel 6 Pro phone",
  "Apple iPhone 13 Pro Phone",
  "OnePlus 10 Pro phone",
  "Oppo Find X5 Pro phone",
];

const searching = "phone";
const output = [];
// indexOf():
/* 
for (product of products) {
  if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
    output.push(product);
  }
}
console.log(output);
*/

// includes():
/* 
for (product of products) {
  if (product.toLowerCase().includes(searching)) {
    output.push(product);
  }
}
console.log(output);
 */

// startsWith()
/* 
for (product of products) {
  if (product.startsWith("A")) {
    console.log(product);
  }
}
 */

// EndsWith():
for (product of products) {
  if (product.toLowerCase().endsWith("phone")) {
    console.log(product);
  }
}
