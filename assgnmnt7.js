// Q 1 :-

const person = {

    fname:'Istiyak Alam',
    setter:function ()
    {
        return(this.fname)
    }
}
console.log(person.setter());

// Q 2 :-

var obj = {
    name: "istiyak",
    rollno : 21,
}
delete obj.rollno;
console.log(obj);

// Q 3 :-

const checkSalary={
    salary : 400000000
}
if(checkSalary.salary > 500000)
{
    console.log("Dream");
}
else{
    console.log("Not Dream");
}


// Q 4 :-

const obj1 = {
};
if(Object.keys(obj1).length === 0)
{
    console.log("false");
}
else
{
    console.log("true");
}

// Q 5 :-

const newObj = {
    fname: "Istiyak",
};

const newObj1 = {
    lname: "Alam"
};

const obj2 = {...newObj, ...newObj1};
console.log(obj2);


// Q 6 :-


function multiplyByIdAndHouseNo(object, N) {
    if(object && typeof N === 'number') {
        object.id *= N;
        object.houseno *= N;
    }
    return object;
}
let object = { id: 10, houseno: 20 };
let N = 2;
let result = multiplyByIdAndHouseNo(object, N);
console.log(result);


// Q 7 :-

function Check(Obj) {
    return Obj.p1 + Obj.p2 + Obj.p3;
}

   let testObj = { 
    p1: 2, 
    p2: 2,
    p3: 6, 
};
console.log("sum of three data :",   Check(testObj)); 


// Q 8 :-

const objj = {
    name : "Hello World",
    id : 82231
};

function check(objj, new_name, ID)

{
    
if(new_name == objj.name && ID == objj.id)
{
    return true;
}
else
{
    return false;
}
}

const new_name = "Hello World";
const ID = 82231;

const resultt = check(objj,new_name,ID);
console.log(resultt);