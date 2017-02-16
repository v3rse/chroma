var chroma = require('./chroma.js')();


console.log(chroma.bold(chroma.underline("Basic Colors:")));

console.log(chroma.normal("normal\t"),chroma.black("black\t"),chroma.red("red\t"),chroma.green("green\t"),chroma.yellow("yellow\t"),chroma.blue("blue\t"));

console.log(chroma.bold(chroma.underline("\nExtra Colors:")));

console.log(chroma.lgray("light gray\t"),chroma.dgray("dark gray\t"),chroma.lred("light red\t"),chroma.lgreen("light green\t"),chroma.lyellow("light yellow\t"),chroma.lblue("light blue\t"),chroma.white("white"));

console.log(chroma.bold(chroma.underline("\nText Formats:")));
console.log(chroma.underline("underline\t"),chroma.bold("bold\t"),chroma.dim("dim\t"),chroma.italics("italics\t"),chroma.strikethrough("strikethrough\t"));

console.log(chroma.bold(chroma.underline("\nText Formats with Colour:")));
console.log(chroma.underline.red('Underline Red\t'),chroma.bold.blue('Underline Blue\t'),chroma.italics.lgreen('Italics Light Green\t'));

console.log(chroma.bold(chroma.underline("\nText Formats with Background Colour:")));
console.log(chroma.bold.bggreen('Bold Background Green\t'),chroma.underline.bgcyan('Underline Background Cyan\t'),chroma.italics.bgmagenta('Italics Background Magenta\t'));
