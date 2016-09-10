const pre = "\x1b[";
const reset = pre + "0m";

const colours = {
	normal: '39m',
	black: '30m',
	red: '31m',
	green: '32m',
	yellow: '33m',
	blue: '34m',
	magenta: '35m',
	cyan: '36m',
	lgray: '37m',
	dgray: '90m',
	lred: '91m',
	lgreen: '92m',
	lyellow: '93m',
	lblue: '94m',
	lmagenta: '95m',
	lcyan: '96m',
	white: '97m',
	bgblack: '40m',
	bgred: '41m',
	bggreen: '42m',
	bgyellow: '43m',
	bgblue: '44m',
	bgmagenta: '45m',
	bgcyan: '46m',
	bgwhite: '47'
}

Object.keys(colours).forEach(function (colour) {
	exports[colour] = function normal(string) {
		return pre + colours[colour] + string + reset;
	}
});