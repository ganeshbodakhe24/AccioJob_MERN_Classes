class person{
     name=""
    age=0;
    greet(){
        console.log(`the name is ${this.name} and age is ${this.age}`)
    }
}

class student extends person{
    constructor(name,age,course){
        super(name,age);
        this.course=course;
    }
    study(){
        console.log(`${this.name} study ${this.course}`)
    }
}

let stud1=new student('ganesh',23,'eng');
stud1.greet();
stud1.study();