// type , merge

type student = {
    name: string;
    age: number;
    gender: string;
}

type student1 = {
    phone: string;
}

let stud1 : student & student1 = {
    name: "Arsalan",
    age: 20,
    gender: "Male",
    phone: "0345-6789"
}

// Interface , extends , merge

interface teacher {
    name: string;
    age: number;
    gender: string;
}

interface teacher {
    phone: string;
}

interface newTech extends teacher {
    email: string;
    address: string;
}

let teach1 : teacher = {
    name: "Ali",
    age: 30,
    gender: "Male",
    phone: "0345-6789"
}

let teach2 = {
    name: "Musab",
    age: 25,
    gender: "Male",
    phone: "0345-6789",
    email: "abc@abc.com",
    address: "Karachi"
}

// narrowing

let func = () => {
    let x = 123;
    if (typeof x === "string") {
        console.log("String");
    }else{
        console.log("Number")
    }
}

// fresh obj & stale obj

interface obj1 {
    name: string;
    age: number;
}

let obj : obj1 = {
    name: "Arsalan",
    age: 20
}

let obj2 : obj1 = {
    name: "Ali",
    age: 20
}

obj = obj2

// obj = obj2 : obj1 = {name: "Ali", age: 20}