function fun1(...a1){
  console.log("fun1 executed");
}
fun1();
fun1(1,2,3,4,5,6);
fun1(2,4,5);
function fun2(name,age,...a1){
  console.log("fun2 executed");
  console.log(`${name} is ${age} years old`);
  console.log(`a1[0] is ${a1[0]}`);
}
fun2('Suraj',23);
fun2('Suraj',23,1,2,3,4,5,6);
fun2('Suraj',2,4,5);
