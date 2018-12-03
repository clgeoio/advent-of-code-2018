let input = document.body.innerText.split('\n').filter(c => c);
let letterFreq = (v) => {
  let counts = {};
  for(let i = 0; i<v.length;i++){
    counts[v[i]] = counts[v[i]] ? counts[v[i]]+1 : 1;
  }
  return counts;
};
let count = (s, n) => s.map(v => Object.values(letterFreq(v))).filter(v => v.some(c => c === n)).length

console.log("Part 1", count(input, 2) * count(input, 3))

let diffs = (a, b) => {
  let d = 0;
  for(let i = 0; i < a.length; i++){
    if(a[i] != b[i]) d++;
  }
  return d;
}

let similar = (a, b) => {
  let s = "";
  for(let i = 0; i < a.length; i++){
    if(a[i] === b[i]) s += a[i];
  }
  return s;
}

for(let i = 0; i < input.length; i++){
  let diff = 0;
  for(let j = i+1; j < input.length; j++){
    if(diffs(input[i], input[j]) === 1){
      console.log("Part 2", similar(input[i], input[j]));
      break;
    }
  }
}
