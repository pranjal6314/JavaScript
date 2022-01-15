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


console.log("***************************************************************");

let regex=/pranjal/;
//metacharacters symbols
regex=/^p/
regex=/than$/
regex=/pran.al/
regex=/pran*jal/
regex=/pranjala?/
regex=/pra\*jal/
let str='pranjal is a good boy,pranjal leave in rajasthan';
let match=regex.exec(str)
console.log(match)
if(regex.test(str)){
    console.log(`the string "${str}" matches ecpression ${regex}`)
}else{
    console.log(`the string "${str}" does not matches ecpression ${regex}`)
}




console.log("***************************************************************");
//character set
let regg=/pra[a-z]jal/ //can be any character between a to z
     regg=/pra[abn]jal/ //can be  a,b and n
     regg=/pra[^abe]jal/ //can't be  a,b and e
//Quantifier
    regg=/go{2}d/
    regg=/pranjala{0,2}/ //a can come exactly 0 to 2(0,1,2) times
//grouping
    regg=/(pa[0-9]){2}/
let string="pranjal is6 a007 good  #$boy,pranjal leave in @rajasthan ,pa1pa2  333707999"
let res=regg.exec(string);
console.log(res)


console.log("***************************************************************");
//character class
let reg2=/pra\wjal/ //word class it can be _ or alphabate or number
    reg2=/\w+al/  //\w+ means one or more word character
    reg2=/\Wleave/ //\W use for non-word character (space,@,#,%,$)
    reg2=/\Wraj/ 
    reg2=/\W+boy/
    reg2=/\d999/ //digit which end with 999
    reg2=/\d+/ //more then one digit
    reg2=/\D007/  //non digit number
    reg2=/\D+6/ //more then one
    reg2=/\sgood/ //maatch white space character
    reg2=/\s+/
    reg2=/p(?=r)/ //after p there is a 'r'
    reg2=/p(?!a)/ // there shoul be no 'a' after p


let res2=reg2.exec(string)
console.log(res2)

