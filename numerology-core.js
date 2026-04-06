const masterNumbers = [11,22,33];

function normalizeName(name){

```
return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g,"")
    .replace(/đ/g,"d")
    .replace(/Đ/g,"D")
    .toUpperCase();
```

}

const letterMap = {

A:1,B:2,C:3,D:4,E:5,F:8,G:3,H:5,I:1,
J:1,K:2,L:3,M:4,N:5,O:7,P:8,Q:1,
R:2,S:3,T:4,U:6,V:6,W:6,X:5,Y:1,Z:7

};

function reduceNumber(num){

```
while(num > 9){

    if(masterNumbers.includes(num)) return num;

    num = num
        .toString()
        .split('')
        .reduce((a,b)=>a+parseInt(b),0);
}

return num;
```

}

function sumDigits(str){

```
return str
    .split('')
    .reduce((a,b)=>a+parseInt(b),0);
```

}

function lifePath(date){

```
let digits = date.replace(/-/g,'');

return reduceNumber(
    sumDigits(digits)
);
```

}

function birthdayNumber(date){

```
let day = date.split('-')[2];

return reduceNumber(
    sumDigits(day)
);
```

}

function attitudeNumber(date){

```
let parts = date.split('-');

let month = parts[1];
let day = parts[2];

return reduceNumber(
    sumDigits(month) + sumDigits(day)
);
```

}

function expressionNumber(name){

```
name = normalizeName(name);

let total = 0;

for(let c of name){

    if(letterMap[c]){

        total += letterMap[c];

    }
}

return reduceNumber(total);
```

}

function soulNumber(name){

```
name = normalizeName(name);

let vowels = "AEIOUY";

let total = 0;

for(let c of name){

    if(vowels.includes(c)){

        total += letterMap[c];

    }
}

return reduceNumber(total);
```

}

function personalityNumber(name){

```
name = normalizeName(name);

let vowels = "AEIOUY";

let total = 0;

for(let c of name){

    if(letterMap[c] && !vowels.includes(c)){

        total += letterMap[c];

    }
}

return reduceNumber(total);
```

}

function maturityNumber(name, date){

```
return reduceNumber(
    expressionNumber(name) +
    lifePath(date)
);
```

}

function personalYear(date){

```
let now = new Date();

let year = now.getFullYear();

return reduceNumber(
    lifePath(date) +
    sumDigits(year.toString())
);
```

}

function personalMonth(date){

```
let now = new Date();

return reduceNumber(
    personalYear(date) +
    (now.getMonth()+1)
);
```

}

function personalDay(date){

```
let now = new Date();

return reduceNumber(
    personalMonth(date) +
    now.getDate()
);
```

}

function pinnacleNumbers(date){

```
let parts = date.split('-');

let m = sumDigits(parts[1]);
let d = sumDigits(parts[2]);
let y = sumDigits(parts[0]);

let p1 = reduceNumber(m + d);
let p2 = reduceNumber(d + y);
let p3 = reduceNumber(p1 + p2);
let p4 = reduceNumber(m + y);

return [p1,p2,p3,p4];
```

}

function challengeNumbers(date){

```
let parts = date.split('-');

let m = sumDigits(parts[1]);
let d = sumDigits(parts[2]);
let y = sumDigits(parts[0]);

let c1 = Math.abs(d - m);
let c2 = Math.abs(d - y);
let c3 = Math.abs(c1 - c2);
let c4 = Math.abs(m - y);

return [
    reduceNumber(c1),
    reduceNumber(c2),
    reduceNumber(c3),
    reduceNumber(c4)
];
```

}

function birthChart(date){

```
let digits = date.replace(/-/g,'');

let chart = {

    1:0,2:0,3:0,
    4:0,5:0,6:0,
    7:0,8:0,9:0

};

for(let d of digits){

    if(chart[d] !== undefined){

        chart[d]++;

    }
}

return chart;
```

}

function missingNumbers(chart){

```
let missing = [];

for(let i=1;i<=9;i++){

    if(chart[i] === 0){

        missing.push(i);

    }
}

return missing;
```

}

function repeatedNumbers(chart){

```
let repeat = [];

for(let i=1;i<=9;i++){

    if(chart[i] > 1){

        repeat.push(i);

    }
}

return repeat;
```

}

function hiddenPassion(name){

```
name = normalizeName(name);

let count = {};

for(let c of name){

    if(letterMap[c]){

        let n = letterMap[c];

        count[n] = (count[n] || 0) + 1;

    }
}

let max = 0;
let result = 0;

for(let n in count){

    if(count[n] > max){

        max = count[n];
        result = n;

    }
}

return parseInt(result);
```

}
