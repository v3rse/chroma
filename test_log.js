var chroma = require('./chroma.js')({ bindToCosole: true });


console.log.underline("Basic Colors:");

console.log.normal("normal\t")
console.log.black("black\t")
console.log.red("red\t")
console.log.green("green\t")
console.log.yellow("yellow\t")
console.log.blue("blue\t");

console.log.underline(chroma.bold("\nExtra Colors:"));

console.log.lgray("light gray\t")
console.log.dgray("dark gray\t")
console.log.lred("light red\t")
console.log.lgreen("light green\t")
console.log.lyellow("light yellow\t")
console.log.lblue("light blue\t")
console.log.white("white")

console.log.underline.bold("\nText Formats:");
console.log.underline("underline\t")
console.log.bold("bold\t")
console.log.dim("dim\t")
console.log.italics("italics\t")
console.log.strikethrough("strikethrough\t");

console.log.bold.underline("\nText Formats with Colour:");
console.log.underline.red('Underline Red\t')
console.log.bold.blue('Underline Blue\t')
console.log.italics.lgreen('Italics Light Green\t');

console.log.underline.bold("\nText Formats with Background Colour:");
console.log.bold.bggreen('Bold Background Green\t')
console.log.bold.italics.bggreen('Bold Italics Background Green\t')
console.log.underline.bgcyan('Underline Background Cyan\t')
console.log.dim.italics.bgmagenta('Dim Italics Background Magenta\t');
