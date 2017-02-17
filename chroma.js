'use strict';

const pre = "\x1b[";

const colours = require("./colours");
const formats = require("./formats");

module.exports = (opts = {
  bindToCosole: false
}) => {
  const exports = {};
  // Iterate over all format functions
  Object.keys(formats).forEach(function (formatFunction) {
    // Create regular format functions
    exports[formatFunction] = function (text) {
      return formats[formatFunction](text);
    }
    // For each format function, iterate over every colour function
    Object.keys(colours).forEach(function (colorFunction) {
      // Check if regular function is not alreaady set.
      if (!exports[colorFunction]) {
        exports[colorFunction] = function (text) {
          return colours[colorFunction](text);
        }
      }
      // Create composite function. ie. chroma.underline.red()
      exports[formatFunction][colorFunction] = function (text) {
        return colours[colorFunction](formats[formatFunction](text));
      }
    });

  });

  if (opts.bindToCosole) {
    // if opts.bindToConsole is true
    // Iterate over all format functions
    Object.keys(formats).forEach(function (formatFunction) {
      // Create regular format functions
      console.log[formatFunction] = function (text) {
        return console.log(formats[formatFunction](text));
      }
      // For each format function, iterate over every colour function
      Object.keys(colours).forEach(function (colorFunction) {
        // Check if regular function is not alreaady set.
        if (!console.log[colorFunction]) {
          console.log[colorFunction] = function (text) {
            return console.log(colours[colorFunction](text));
          }
        }
        // Create composite function. ie. chroma.underline.red()
        console.log[formatFunction][colorFunction] = function (text) {
          return console.log(colours[colorFunction](formats[formatFunction](text)));
        }
      });

      // For each format function, iterate over every formats again. Want to allow 2 formats. ie. bold.underline
      Object.keys(formats).forEach(function (secondFormatFunction) {
        // Create composite function. ie. chroma.underline.red()
        console.log[formatFunction][secondFormatFunction] = function (text) {
          return console.log(formats[secondFormatFunction](formats[formatFunction](text)));
        }

        // For each format function, iterate over every colour function
        Object.keys(colours).forEach(function (colorFunction) {
          // Check if regular function is not alreaady set.
          if (!console.log[colorFunction]) {
            console.log[colorFunction] = function (text) {
              return console.log(colours[colorFunction](text));
            }
          }
          // Create composite function. ie. chroma.underline.red()
          console.log[formatFunction][secondFormatFunction][colorFunction] = function (text) {
            return console.log(colours[colorFunction](formats[secondFormatFunction](formats[formatFunction](text))));
          }
        });
      });
    });
  }

  return exports;
}
