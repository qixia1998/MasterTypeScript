
// 
// The any type
//

// var item1: any = { id: 1, name: "item1" }
// item1 = { id: 2 };

// 
// Explicit casting
//

// var item1 = <any>{ id: 1, name: "item1" }
var item1 = { id: 1, name: "item1" } as any;
item1 = { id: 2 };



// 
// The let keyword
//

// var index: number = 0;
let index: number = 0;

if (index == 0) {
    // var index: number = 2;
    let index: number = 2;
    console.log(`index = ${index}`);
}

console.log(`index = ${index}`);

//
// const values
//

const constValue = "this should not be changed";
// constValue = "updated";


// 
// Union types
//

function printObject(obj: string | number) {
    console.log(`obj = ${obj}`);
}

printObject(1);
printObject("string value");

// 
// type guards
// 

function addWithUnion(
    arg1: string | number,
    arg2: string | number
) {
    // return arg1 + arg2;
}

function addWithTypeGuard(
    arg1: string | number,
    arg2: string | number
) {
    if (typeof arg1 === "string") {
        // arg1 is treated as a string
        console.log(`arg1 is of type string`);
        return arg1 + arg2;
    }
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        // both are numbers
        console.log(`arg1 and arg2 are numbers`);
        return arg1 + arg2;
    }
    console.log(`default return treat both as strings`)
    return arg1.toString() + arg2.toString();
}

console.log(` "1", "2" = ${addWithTypeGuard("1", "2")}`);
console.log(`  1,   2  = ${addWithTypeGuard(1, 2)}`);
console.log(`  1,  "2" = ${addWithTypeGuard(1, "2")}`);

//
// Type aliases
//

type StringOrNumber = string | number;

function addWithTypeAlias(
    arg1: StringOrNumber,
    arg2: StringOrNumber
) {
    return arg1.toString() + arg2.toString();
}

//
// enums
// 

enum DoorState {
    Open,
    Closed
}

function checkDoorState(state: DoorState) {
    console.log(`enum value is : ${state}`);
    switch (state) {
        case DoorState.Open:
            console.log(`Door is open`);
            break;
        case DoorState.Closed:
            console.log(`Door is Closed`);
            break;
    }
}

checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);

enum DoorStateSpecificValues {
    Open = 3,
    Close = 7,
    Unspecified = 256
}

//
// string enums
//

enum DoorSTateString {
    OPEN = "Open",
    CLOSED = "Closed"
}

console.log(`OPEN = ${DoorSTateString.OPEN}`);

//
// const enums
//

const enum DoorStateConst {
    Open = 10,
    Closed = 20
}

console.log(`const Closed = ${DoorStateConst.Open}`);









//
// Undefined
//

let array = ["123", "456", "789"];

delete array[0];

for (let i = 0; i < array.length; i++) {
    // console.log(`array[${i}] = ${array[i]}`);
    checkAndPrintElement(array[i]);
}

function checkAndPrintElement(arrElement: string | undefined) {
    if (arrElement === undefined)
        console.log(`invalid array element`);
    else
        console.log(`valid array element : ${arrElement}`);
}




// 
// Null
//

function printValues(a: number | null) {
    console.log(`a = ${a}`);
}

printValues(1);
printValues(null);


//
// conditional expressions
//

const value : number = 10;
const message : string = value > 10 ?
    "value is larger than 10" : "value is 10 or less";
console.log(message);

//
// optional chaining : testing for an object property before accessing it
//

let objectA = {
    nestedProperty: {
        name: "nestedPropertyName"
    }
}

// function printNestedObject(obj) {
//     console.log("obj.nestedProperty.name = "
//             + obj.nestedProperty.name);
// }

function printNestedObject(obj: any) {
    if (obj != undefined
        && obj.nestedProperty != undefined
        && obj.nestedProperty.name) {
            console.log(`name = ${obj.nestedProperty.name}`)
    } else {
        console.log(`name not found or undefined`);
    }
}

printNestedObject(null);
printNestedObject(undefined);
printNestedObject({
    aPropetry: "another property"
});
printNestedObject({
    nestedProperty: {
        name: "nestedPropertyName"
    }
});

// 
// Optional chaining : using the syntax
//

function printNestOptionalChain(obj: any) {
    if(obj?.nestedProperty?.name) {
        console.log(`name = ${obj.nestedProperty.name}`)
    } else {
        console.log(`name not found or undefined`);
    }
}

printNestOptionalChain(undefined);
printNestOptionalChain({
    aProperty: "another property"
});
printNestOptionalChain({
    nestedProperty: {
        name: null
    }
});
printNestOptionalChain({
    nestedProperty: {
        name: "nestedPropertyName"
    }
});


//
// Nullish coalescing
//

function nullishCheck(a: number | undefined | null) {
    console.log(`a : ${a ?? `undefined or null`}`);
}

nullishCheck(1);
nullishCheck(null);
nullishCheck(undefined);

//
// null operands
//

function testNullOperands(a: number, b: number | null | undefined) {
    let addResult = a + (b ?? 0);
}

//
// define assignment
//

// console.log(`lvalue = ${lvalue}`);
var lvalue = 2;

let globalString!: string;

setGlobalString("this string is set");

console.log(`globalString = ${globalString}`);
// console.log(`globalString = ${globalString!}`);


function setGlobalString(value: string) {
    globalString = value;
}

// 
// Object
//

let structuredObject: object = {
    name: "myObject",
    properties: {
        id: 1,
        type: "AnObject"
    }
}

function printObjectType(a: object) {
    console.log(`a: ${JSON.stringify(a)}`);
}

printObjectType(structuredObject);

// printObjectType("this is a string");


// 
// unknown
//

let a: any = "test";
let aNumber: number = 2;
aNumber = a;
