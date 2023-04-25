// creates the constructor for the student object
function Student(first, last, age ){
this.age = age;
this.lastName = last;
this.firstName = first; 
}

// creates the student objects
let Student1 = new Student("Jake","James",20);
let Student2 = new Student("Michael","Gonzales",23);
let Student3 = new Student("Anna","Peterson",22);

// puts objects into the studentArray
let studentArray = [Student1, Student2 , Student3];

console.log(`"Hello, my name is ${studentArray[1].firstName} ${studentArray[1].lastName} and I'm ${studentArray[1].age} years old."`);

