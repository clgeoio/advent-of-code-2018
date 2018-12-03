let input = document.body.innerText.split('\n').filter(c=>c).map(Number);
let p1 = input.reduce((a,c) => a+c);
let p2 = (input) => {
	let seen = new Set([0]);
	let a = 0;
	while(true){
		for(let i = 0; i < input.length; i++){
			a += input[i];
			if(seen.has(a)){
				return a;
			}
			seen.add(a);
		}
	}
}
console.log("Part 1", p1);
console.log("Part 2", p2(input));
