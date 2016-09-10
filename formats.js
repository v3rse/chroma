const pre = "\x1b[";

const formats = {
	underline: {
		prefix: '4m',
		suffix: '24m'
	},
	bold: {
		prefix: '1m',
		suffix: '21m'
	},
	dim: {
		prefix: '2m',
		suffix: '22m'
	},
	italics: {
		prefix: '3m',
		suffix: '23m'
	},
	strikethrough: {
		prefix: '9m',
		suffix: '29m'
	}
}

Object.keys(formats).forEach(function (format) {
	exports[format] = function underline(string) {
		return pre + formats[format].prefix + string + pre + formats[format].suffix;
	}
});