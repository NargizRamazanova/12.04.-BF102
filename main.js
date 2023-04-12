// class Car {
//     constructor(brand,model,currentFuel,fuelfor1km,millage){
//         this.brand=brand;
//         this.model=model;
//         this.currentFuel=currentFuel;
//         this.fuelfor1km=fuelfor1km;
//         this.millage=millage;
//     }
//     Drive(distance){ 
//        let fuelNeed=this.fuelfor1km*distance;
//        if (this.currentFuel>=fuelNeed) {
//         this.millage+=distance;
//         this.currentFuel-=fuelNeed;
//         console.log("currentfuel:"+" "+this.currentFuel);
//         console.log("millage:"+" "+this.millage);
//        }
//        else{
//         console.log("benzin kifayet etmir");
//        }
//     }
// }
// const car1=new Car("bmw","m2",800,10,20)
// car1.Drive(40);


// class Product{
//     constructor(name,price){
//         this.name=name;
//         this.price=price;
//     }

// }

// class Milk extends Product{
    
//     constructor(name, price, fatPercent){
//         super(name,price);
//         this.fatPercent=fatPercent;
//     }
// }

// const Milk1=new Milk("Milla",2.25,[]);
// const Milk2 = new Milk("Milla",2.30,2);
// const Milk3= new Milk("AzerSud", 3.10, 4);

// const milks=[Milk1,Milk2,Milk3];

// let total=0;
// for(let i=0;i<milks.length;i++){
//  total+=milks[i].fatPercent;
// }

// let result = total/milks.length;


// console.log(result);











// Person klass yarat, Student class Person-a extend olunsun.
// Person : name, surname, age
// Student: group, faculty, grades(array olmalidi), GPA
// Student-in GPA-i grades-lerin eded ortasina beraber olsun
// Student de metod olsun AddGrade, bal qebul edir 
// ve grades array-ine elave edir
// Uch student yarat, array-e elave ele. Ve qiymetlerin eded ortasini tap

// Group class-i yaradin
// Group: name, students(array olmalidi)
// AddStudent metodu yarat. Student class-indan yaranmish obyektleri elave etmek olsun


class Person{
    constructor(name, age){
        this.name = name,
        this.age = age
    }
}

class Student extends Person{
    constructor(name, age, faculty, group){
        super(name, age)
        this.faculty = faculty,
        this.group = group,
        this.grades = [],
        this.gpa = 0
    }
    addGrade(newGrade){
        this.grades.push(newGrade)
        let sum = 0;
        for(let i = 0; i<this.grades.length; i++){
            sum+=this.grades[i];
        }
        this.gpa = sum / this.grades.length
    }
}

class Group{
    constructor(name){
        this.name = name;
        this.students = []
    }
    addStudent(newStudent){
        this.students.push(newStudent)
    }
}

const g1 = new Group("BF102")

const s1= new Student("Gulnar", 21, "Programming", g1.name)
const s2= new Student("Nuray", 21, "Programming", g1.name)
const s3= new Student("Nurlan", 21, "Programming", g1.name)

s1.addGrade(100)
s2.addGrade(90)
s3.addGrade(80)
s3.addGrade(100)


console.log(s1);
console.log(s2);
console.log(s3);

g1.addStudent(s1)
g1.addStudent(s2)
g1.addStudent(s3)

console.log(g1)
