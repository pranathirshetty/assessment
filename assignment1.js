const students = [
{ id: 1, name: "Amit Sharma", age: 20, course: "Computer Science", marks: 85, feesPaid: true },
{ id: 2, name: "Priya Singh", age: 22, course: "Information Technology", marks: 92, feesPaid: false },
{ id: 3, name: "Ravi Kumar", age: 19, course: "Electronics", marks: 76, feesPaid: true },
{ id: 4, name: "Neha Verma", age: 21, course: "Mechanical", marks: 88, feesPaid: true },
{ id: 5, name: "Sohan Lal", age: 23, course: "Civil Engineering", marks: 65, feesPaid: false },
{ id: 6, name: "Anjali Mehta", age: 20, course: "Computer Science", marks: 95, feesPaid: true },
{ id: 7, name: "Vikas Gupta", age: 22, course: "Information Technology", marks: 58, feesPaid: false },
{ id: 8, name: "Pooja Mishra", age: 19, course: "Mechanical", marks: 80, feesPaid: true },
{ id: 9, name: "Rajesh Khanna", age: 21, course: "Electronics", marks: 70, feesPaid: false },
{ id: 10, name: "Sneha Kapoor", age: 22, course: "Civil Engineering", marks: 90, feesPaid: true }
];


//1.
/*students.map((el) => {
	const a=el.name;
    console.log(a);
});*/
/*const d=students.map((el)=>
{
   return `name:${el.name}   course: ${el.course}`;
});
 console.log(d);*/


 //2.
/* students.map((el)=>
{
 if(el.marks>=60)
 {
   el.status="Pass";
 }
 else
 {
    el.status="Fail";
 }
});
console.log(students);
*/


//3.
/*const d=students.map((el)=>
{
   return `${el.name}-${el.course}`;
});
 console.log(d);*/


//4.
/*students.map((el)=>
{
 el.marks=el.marks+5;
});
console.log(students);*/


//1.
/*const f= students.filter((el) => el.course === "Computer Science");
console.log(f);*/

//2.
/*const g=students.filter((el)=>el.marks>=80);
console.log(g);
*/

//3.
/*const h=students.filter((el)=>el.feesPaid==false);
console.log(h);*/

//4.
/*const i=students.filter((el)=> el.age>20&&el.marks>70);
console.log(i);*/

//5.
/*const j=students.filter((el)=> el.course==="Mechanical"&&el.marks<85);
console.log(j);*/


//1.
/*const k=students.reduce((cur,index)=>
{
   return cur+index.marks;
},0);
console.log(k);*/

//2.
/*const k=students.reduce((cur,index)=>
{ 

 return sum= cur+index.marks;
 
},0);
const avg=k/10;
console.log(avg);*/
//const avg=k/id.length;
//console.log(avg);

//3.
/*const h=students.filter((el)=>el.feesPaid==true).reduce((acc)=>{return acc+1},0);
console.log(h);*/


//4.
/*const o=students.reduce((i,el)=>
{
   if(el.marks>i.marks)
   {
      return el;
   }
   else
   {
     return i;
   }}
);
console.log(o.marks);*/

//5.

/*const m=students.filter((el)=>
{
 return el.course==="Computer Science";
});

const n=students.filter((el)=>{
return el.course==="Information Technology";
});

const p=students.filter((el)=>
{
   return el.course==="Electronics";
});

const q=students.filter((el)=>
{
   return el.course==="Mechanical";
});
const r=students.filter((el)=>
{
   return el.course==="Civil Engineering";
});*/

const array={};
students.forEach(student=>
{
   const course=student.course;
   const name=student.name;

if(array[course]===undefined)
{
   array[course]=name;
}
else
{
   array[course]=[array[course],name];
}
});
console.log(array);
/*const group = students.reduce((acc, curr) => {
const u= acc[curr.course]||[];
acc[curr.course] = u.concat(curr.name);
return acc;
},{});

console.log(group);*/
