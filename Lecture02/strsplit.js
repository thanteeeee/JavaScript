const str = 'The quick brown fox jump over the lazy dog.' ;
const words = str.split(' '); //split at space(' ')
console.log(words[3]);
//expected output : "fox"

const chars = str.split('');
console.log(chars[8]);
//expected output: "k"