let ascii_text_generator = require('ascii-text-generator');
// output text logo to the header of file in the form of annotation
let input_text = 'Node Express Beginner';
let ascii_text = ascii_text_generator(input_text, '3');

console.log(ascii_text);
