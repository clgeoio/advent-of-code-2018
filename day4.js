const sleepMin = (a, b, prev) => {
	let o = a.getMinutes();
	prev = prev || {};
	for(let i = 0; i < new Date(b-a).getMinutes(); i++){
		prev[o+i] = prev[o+i] ?  prev[o+i]+1 : 1;
    }
	return prev;
}

const sortByIndex = (array, i, asc) => {
	return array.slice().sort((a,b)=>{
			if(a[i]<b[i])
				return -1*asc; 
			if(a[i]>b[i])
				return asc; 
		return 0;
	});
}

const input = sortByIndex(document.body.innerText.split('\n').filter(c=>c).map(c=>{let m = c.match(/\[([^\]]*)\] (.+)/); return [new Date(m[1]), m[2]]}), 0, 1);
const g = {};
let currentGuard = 0;
let sleepsAt = null;
for(let i = 0; i < input.length; i++){
	let time = input[i][0];
	let s = input[i][1];

	var n = s.match(/Guard #([0-9]+)/);
	if(n != null){
		currentGuard = n[1];	
	}
	else if(s == "wakes up"){
		g[currentGuard] = sleepMin(sleepsAt, time, g[currentGuard])
	}
	else {
		sleepsAt = new Date(time.getTime());
	}	
}

const totals = Object.entries(g)
	.map(c => 
		[
		+c[0], //id
		...[...sortByIndex(Object.entries(c[1]).sort((a,b) => a-b), 1, -1)[0]].map(Number), //which minute was max, and with what value
		Object.values(c[1]).reduce((a,c)=>a+c), //total minutes
	]);
	
const part1 = sortByIndex(totals, 3, -1);
	
const part2 = sortByIndex(totals, 2, -1);

console.log("Part 1", part1[0][0] * part1[0][1]);

console.log("Part 2", part2[0][0] * part2[0][1]);
