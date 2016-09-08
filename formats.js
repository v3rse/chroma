const pre = "\x1b[";

//text formats
function underline(string){
	return pre+"4m"+string+pre+"24m";
}

function bold(string){
	return pre+"1m"+string+pre+"21m";
}

function dim(string){
	return pre+"2m"+string+pre+"22m";
}

function italics(string){
	return pre+"3m"+string+pre+"23m";
}

function strikethrough(string){
	return pre+"9m"+string+pre+"29m";
}

exports.underline = underline;
exports.bold = bold;
exports.dim = dim;
exports.italics = italics;
exports.strikethrough = strikethrough;