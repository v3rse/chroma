'use strict';

const pre = "\x1b[";

const colours = require("./colours");
const formats = require("./formats");

var colorFunctions = Object.keys(colours);
var formatFunctions = Object.keys(formats);

// Iterate over all format functions
formatFunctions.forEach(function (formatFunction) {
	// Create regular format functions
	exports[formatFunction] = function (text) {
		return formats[formatFunction](text);
	}
	// For each format function, iterate over every colour function
	colorFunctions.forEach(function (colorFunction) {
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
