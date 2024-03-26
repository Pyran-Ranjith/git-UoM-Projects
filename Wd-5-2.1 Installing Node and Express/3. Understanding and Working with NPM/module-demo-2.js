// cd "E:\Users\Public\PUBLIC.PREVIOUS\Public\MY\UoM Projects\Wd-5-2.1 Installing Node and Express - Copy\3. Understanding and Working with NPM"
// npm init -y <= this will creata nodemodules ad necessary files
// npm i ascii-text-generator <= this will install aschi text generator
// copy followig code from node.js site ana change apropreate
// run the code

let aschi_text_generator = require("ascii-text-generator");
let input_text = "Node express begnner";
let ascii_text = aschi_text_generator(input_text,"3");
 
console.log(ascii_text);
//console.log(chalk.blue.bold.bgGreen(ascii_text)); // make output colorful by using chalk module
 
// console