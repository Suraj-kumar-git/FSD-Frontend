function f1(){
  console.log('Hello, this is js normal function');
}

var arrowFunction = ()=>{
  console.log('This is an arrow function.');
}
arrowFunction();

arrowFunction=()=>{console.log('This time we override the previous arrowfunction.')}
arrowFunction();

function add(a,b){
  console.log(a+b);
}
add(4,5);

function add2(a,b=6){
  console.log(a+b);
}
add2(5);