const kvArray = [
    { key: 1, value: 10},
    { key: 2, value: 20},
    { key: 3, value: 30},
];

const reformatmattedArray = kvArray.map(({key,value}) => ({[key]: value}));

console.log(reformatmattedArray); // [{ 1: 10 },{ 2: 20 }, { 3: 30 }]
console.log(kvArray);