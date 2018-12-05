const input = document.body.innerText.trim();
const sameLetter = (a, b) => (Math.abs(a.charCodeAt(0) - b.charCodeAt(0)) == 32)
const removePair = (input) => {
	for(let i = 0; i < input.length - 1; i++){
		if(sameLetter(input[i], input[i + 1])){
			return [input.substring(0, i) + input.substring(i + 2), true]
		}
	}
	return [input, false];
}

const reduceProtein = (input) => {
	let s = input;
	let rem = true;

	while(rem){
		[s, rem] = removePair(s);
	}
	return s;
}

console.log("Part 1", reduceProtein(input).length);

let counts = [];
for(let i = 65; i < 91; i++){
	let s = input.match(new RegExp("[^" + String.fromCharCode(i) + "^" + String.fromCharCode(i+32) + "]", "gi")).join('');
	counts[i] = reduceProtein(s).length;
}

console.log("Part 2", Math.min(...counts.filter(c=>c)));
