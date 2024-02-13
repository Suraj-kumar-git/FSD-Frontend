const obj={first:'Suraj',last:'Kumar',age:23};

const f = obj.first;
const l = obj.last;
const year = obj.age;
console.log(f+" "+l+" is "+year+" years old.");
// console.log(l);

const {first:f1,last:l1}=obj;
console.log(f1);
console.log(l1);