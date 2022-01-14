let reg=/pranjal/;//this is a regular expression literal in js
reg=/pranjal/g;
//g use for global (puri string me check krega for  matching)
// reg=/pranjal/i;
//i means case insensitive
console.log(reg);
console.log(reg.source);
let s="hello everyone my name is PraNjAl choudhary,pranjal how are you ";
//function to match expression
//exec() fuction will return an array for match or null for no match
let result=reg.exec(s);
console.log(result)
result=reg.exec(s);
console.log(result)
// console.log(result.index)

let result2=reg.test(s);
console.log(result2)
let result3=s.match(reg);
console.log(result3)
let result4=s.search(reg)
console.log(result4)
let result5=s.replace(reg,"rohan")
console.log(result5)
