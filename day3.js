let grid = {};
let lap = new Set();
let k = document.body.innerText.split('\n').filter(c=>c).map(c => { 
    var sp = c.split(' '); 
    return {
        id: sp[0],
        left: parseInt(sp[2].split(',')[0]),
        top: parseInt(sp[2].split(',')[1].split(':')[0]),
        width: parseInt(sp[3].split('x')[0]),
        height: parseInt(sp[3].split('x')[1])
    }
});

k.forEach((v) => {
    for(let i=0; i < v.width; i++){
        for(let j=0; j<v.height; j++){
            var dex = (v.left+i)+","+(v.top+j);
            if(grid[dex] != null){              
                grid[dex].push(v.id);
                grid[dex].forEach(l => lap.add(l));
            } else {
                grid[dex] = [v.id];
            }
        }
    }
});

console.log("Part 1", Object.values(grid).map(c => c.length).filter(c => c>1).length);
console.log("Part 2", k.filter(v => !lap.has(v.id))[0].id);
