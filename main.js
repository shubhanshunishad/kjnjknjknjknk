/*let e=25;
const name='ravi',
age=21,
lecture='fullstack';
let s ="I am Here";
let a="in Mathura";
alert(`${s} ${a} .`);
console.log(typeof(s));
let ab=prompt("How are you??")
alert(`You are ${ab} years old`)
document.write(`ghkdj`)

function typeconversion()
{
    let num=document.getElementById("pass").value;

    console.log(+num,typeof +num);
}

function sum(a,b)
{
    return 1;
}

let sayhi = function()
{
    console.log('hello world')
}
let num=1e-5;
console.log(num.toString(16));
let num1=12.4478;
//console.log(Math.round(num1*100)/100);
console.log(num1.toFixed(3));
let num2=45;
console.log(Math.pow(num2,2));
let str=' this is new String'
console.log(str.indexOf('is'));
let count=0;
for(let i=0;i<str.length;i++)
{
    if(str.substring(i,i+2)==='is')
    {
        count++;
    }
}
console.log(count);
let arr=new Array(5);
console.log(arr)
let arr2=[1,2,3,4,5,6];
console.log(arr2)
console.log(arr.push('false',45));
*/

let arr3=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let sum=0;
let flat=[];
for(let i=0;i<arr3.length;i++)
{
    for(let j=0;j<arr3[i].length;j++)
    {
        console.log(i+" "+j+"\n");
        sum=sum+arr3[i][j];
    }
}
console.log(sum);
let arr4=[1,2,3,4,5,6];
console.log(arr4.slice(1,3));
arr4.splice(2,0,'grapes');
let a=[12,23,435,45,4,6546,5,56,5,4];
let str="this is new world";
let str2="";
str.split(' ').forEach((dem)=>{
    let jk="";
    for(let i=dem.length-1;i>=0;i--)
        jk+=dem[i];
    str2+=jk+' ';
});
console.log(str2.trimEnd());
let obj={
    name:'john',

    "hello":1,
    "hello2":2,
    welcome:function()
    {
        console.log('welcome')
    },
    ar:['maruti','baleno','suzuki']
}
console.log(obj.name)
console.log(obj["hello"])
console.log(Object.keys(obj));
console.log(Object.values(obj))
console.log(obj.ar[1])
let st="aabc bbca caab ddac"
let obj1={}
for(let i of st)
{
    if(!obj1[i])
    {
        obj1[i]=1;
    }
    else{
        obj1[i]=obj1[i]+1;
    }
}
console.log(obj1)
let person =
{
    name:"Pradhumn"
}
let p1 =
{
    age:'19',
    proto:person
}
let p2 =
{
    isadult:true,
    proto:p1
}