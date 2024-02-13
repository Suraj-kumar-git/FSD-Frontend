var Employee = /** @class */ (function () {
    function Employee() {
        this.eid = 100;
        this.eName = "Suraj";
        console.log("This is Employee constructor");
        console.log("Employee Name: " + this.eName);
    }
    Employee.prototype.display = function () {
        console.log("This is a method inside Employee class.");
    };
    return Employee;
}());
var employee = new Employee();
console.log("Employee Id: " + employee.eid);
employee.eName = "Navneet";
console.log("Updated name: " + employee.eName);
employee.display();
var someValue = "This is a string";
var someValue2 = 99;
var stringLength = someValue.length;
var someValue2Length = someValue.length;
console.log("The length of ".concat(someValue, " is ").concat(stringLength));
console.log("The length of ".concat(someValue2, " is ").concat(someValue2Length));
