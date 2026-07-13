/*console.log("Hello World");
//variable declaration -let,const,var
let fname="Jayce"
console.log(fname)
console.log(typeof(fname))
//we can't declare a variable with the same name in the same scope using let or const ie redeclaration is not allowed
fname = "Anie"
console.log(fname)

var salary=0.2
console.log(typeof(salary))

var salary=3000
console.log(typeof(salary))//variable redeclaration is allowed in var

const pi=3.14
console.log(pi)

let isEligiblevote= true
console.log(isEligiblevote)
let myAge
console.log(myAge)//out put will be undefined because the variable have any values assigned

//arrays
let seasons=["winter","monsoon","summer"]
console.log(seasons)
console.log(seasons[0])

console.log(seasons[seasons.length-1])//for displaying the last element

//loop
for(let i=0;i<seasons.length;i++){
    console.log(seasons[i])
}loop using for displaying large data using same iteration
var sum=0
for(let i=1;i<11;i++){
     sum=sum+i
    console.log(i)
    console.log(sum)
}
 
if (5>10){
    console.log("larger")
}
else if(5==5){
    console.log("equal")
}
else(5<10){
    console.log("smaller")
}
// logical operators
let  flag1=true
let  flag2=false
console.log((flag1 !=flag2)||(2<3))
console.log((flag1 !=flag2)&&(2<3)

*/

 var n=0
 for(let i=0;i<11;i+=2){
    n=n+i

 } 
console.log(n)

function greet(){
    alert("Hellow")
}
greet()

function sum(a,b){
    return a+b
}
let num1 = 20
let num2 = 80
let output = sum(num1,num2)
console.log(`sum of ${num1} and ${num2}is ${output}`)
//objects
let student={
    name:"Hari",
    age:22,
    hobbies:["reading","coding","travelling"]
}
console.log(student.name)
console.log(student.hobbies[1])

const greeting = ()=>{
    console.log("Hello")
}
greeting()

//function-calculate(a,b,operator)use switch case and arrow function syntax

const calculate = (num1,num2,oper)=>{

//switch case
switch(oper){
    case '+':
        result=num1+num2
        console.log(` ${num1} + ${num2} = ${result}`)
        break;
    case '-':
       result=num1-num2
        console.log(` ${num1} - ${num2}=${result} `)
        break;
    case '/':
       result=num1/num2
        console.log(`${num1}/${num2}=${result}`)
        break;    
        
    case '*':
       result=num1-num2
        console.log(`${num1}*${num2}=${result}`)
        break;
        default: // code runs if no cases    
}

}
console.log(calculate(10,5,'+'))

//arrays methods -map,filter,forEach
let nums=[10,2,30,40,50]
let doulbeNums =nums.map((item)=>{
    return item*2
})
console.log(doulbeNums)


let ages=[30,40,60]
let updatedAges =ages.map((item)=>{
    return item+5
})
console.log(updatedAges)
//using map with arrow function
let newAges=ages.map(age=>age+5)
console.log(newAges)
//using filter method
let divisibleby10Ages = ages.filter(item=>item%10==0)
console.log(divisibleby10Ages)


//filter the words which has letetrs more than 3 
let words =['hello','my','dear','friend']
let morethan3Char = words.filter(item=>item.length>3)
console.log(morethan3Char)