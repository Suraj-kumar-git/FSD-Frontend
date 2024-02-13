class Employee {
  eid:number=100;
  eName:string="Suraj";
  constructor(){
    console.log("This is Employee constructor");
    console.log("Employee Name: "+this.eName);
  }
  display():void{
    console.log("This is a method inside Employee class.");
  }
}

const employee = new Employee();
console.log("Employee Id: "+employee.eid);
employee.eName="Navneet";
console.log("Updated name: "+employee.eName);
employee.display();

let someValue:any="This is a string";
let someValue2:any=99;
let stringLength:number=(<string>someValue).length;
let someValue2Length:number=(<string>someValue).length;
console.log(`The length of ${someValue} is ${stringLength}`);
console.log(`The length of ${someValue2} is ${someValue2Length}`);