// 
// The any type
//
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// var item1: any = { id: 1, name: "item1" }
// item1 = { id: 2 };
// 
// Explicit casting
//
// var item1 = <any>{ id: 1, name: "item1" }
var item1 = { id: 1, name: "item1" };
item1 = { id: 2 };
// 
// The let keyword
//
// var index: number = 0;
var index = 0;
if (index == 0) {
    // var index: number = 2;
    var index_1 = 2;
    console.log("index = " + index_1);
}
console.log("index = " + index);
//
// const values
//
var constValue = "this should not be changed";
// constValue = "updated";
// 
// Union types
//
function printObject(obj) {
    console.log("obj = " + obj);
}
printObject(1);
printObject("string value");
// 
// type guards
// 
function addWithUnion(arg1, arg2) {
    // return arg1 + arg2;
}
function addWithTypeGuard(arg1, arg2) {
    if (typeof arg1 === "string") {
        // arg1 is treated as a string
        console.log("arg1 is of type string");
        return arg1 + arg2;
    }
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        // both are numbers
        console.log("arg1 and arg2 are numbers");
        return arg1 + arg2;
    }
    console.log("default return treat both as strings");
    return arg1.toString() + arg2.toString();
}
console.log(" \"1\", \"2\" = " + addWithTypeGuard("1", "2"));
console.log("  1,   2  = " + addWithTypeGuard(1, 2));
console.log("  1,  \"2\" = " + addWithTypeGuard(1, "2"));
function addWithTypeAlias(arg1, arg2) {
    return arg1.toString() + arg2.toString();
}
//
// enums
// 
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
})(DoorState || (DoorState = {}));
function checkDoorState(state) {
    console.log("enum value is : " + state);
    switch (state) {
        case DoorState.Open:
            console.log("Door is open");
            break;
        case DoorState.Closed:
            console.log("Door is Closed");
            break;
    }
}
checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);
var DoorStateSpecificValues;
(function (DoorStateSpecificValues) {
    DoorStateSpecificValues[DoorStateSpecificValues["Open"] = 3] = "Open";
    DoorStateSpecificValues[DoorStateSpecificValues["Close"] = 7] = "Close";
    DoorStateSpecificValues[DoorStateSpecificValues["Unspecified"] = 256] = "Unspecified";
})(DoorStateSpecificValues || (DoorStateSpecificValues = {}));
//
// string enums
//
var DoorSTateString;
(function (DoorSTateString) {
    DoorSTateString["OPEN"] = "Open";
    DoorSTateString["CLOSED"] = "Closed";
})(DoorSTateString || (DoorSTateString = {}));
console.log("OPEN = " + DoorSTateString.OPEN);
console.log("const Closed = " + 10 /* Open */);
//
// Undefined
//
var array = ["123", "456", "789"];
delete array[0];
for (var i = 0; i < array.length; i++) {
    // console.log(`array[${i}] = ${array[i]}`);
    checkAndPrintElement(array[i]);
}
function checkAndPrintElement(arrElement) {
    if (arrElement === undefined)
        console.log("invalid array element");
    else
        console.log("valid array element : " + arrElement);
}
// 
// Null
//
function printValues(a) {
    console.log("a = " + a);
}
printValues(1);
printValues(null);
//
// conditional expressions
//
var value = 10;
var message = value > 10 ?
    "value is larger than 10" : "value is 10 or less";
console.log(message);
//
// optional chaining : testing for an object property before accessing it
//
var objectA = {
    nestedProperty: {
        name: "nestedPropertyName"
    }
};
// function printNestedObject(obj) {
//     console.log("obj.nestedProperty.name = "
//             + obj.nestedProperty.name);
// }
function printNestedObject(obj) {
    if (obj != undefined
        && obj.nestedProperty != undefined
        && obj.nestedProperty.name) {
        console.log("name = " + obj.nestedProperty.name);
    }
    else {
        console.log("name not found or undefined");
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
function printNestOptionalChain(obj) {
    var _a;
    if ((_a = obj === null || obj === void 0 ? void 0 : obj.nestedProperty) === null || _a === void 0 ? void 0 : _a.name) {
        console.log("name = " + obj.nestedProperty.name);
    }
    else {
        console.log("name not found or undefined");
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
function nullishCheck(a) {
    console.log("a : " + (a !== null && a !== void 0 ? a : "undefined or null"));
}
nullishCheck(1);
nullishCheck(null);
nullishCheck(undefined);
//
// null operands
//
function testNullOperands(a, b) {
    var addResult = a + (b !== null && b !== void 0 ? b : 0);
}
//
// define assignment
//
// console.log(`lvalue = ${lvalue}`);
var lvalue = 2;
var globalString;
setGlobalString("this string is set");
console.log("globalString = " + globalString);
// console.log(`globalString = ${globalString!}`);
function setGlobalString(value) {
    globalString = value;
}
// 
// Object
//
var structuredObject = {
    name: "myObject",
    properties: {
        id: 1,
        type: "AnObject"
    }
};
function printObjectType(a) {
    console.log("a: " + JSON.stringify(a));
}
printObjectType(structuredObject);
// printObjectType("this is a string");
// 
// unknown
//
var a = "test";
var aNumber = 2;
aNumber = a;
var u = "an unknown";
u = 1;
var aNumber2;
// aNumber2 = u;
aNumber2 = u;
console.log("aString : " + a * 2);
//
// never
// 
function alwaysThrows() {
    throw new Error("this will always throw");
    // return -1
}
//
// never in practice
//
var AnEnum;
(function (AnEnum) {
    AnEnum[AnEnum["FIRST"] = 0] = "FIRST";
    AnEnum[AnEnum["SECOND"] = 1] = "SECOND";
})(AnEnum || (AnEnum = {}));
function getEnumValue(enumValue) {
    switch (enumValue) {
        case AnEnum.FIRST: return "First Case";
        case AnEnum.SECOND: return "Second Case";
    }
    var returnValue = enumValue;
    return returnValue;
}
//
// Object spread
//
var firstObj = { id: 1, name: "firstObj" };
var secondObj = __assign({}, firstObj);
console.log("secondObj : " + JSON.stringify(secondObj));
var nameObj = { name: "nameObj name" };
var idObj = { id: 1 };
var obj3 = __assign(__assign({}, nameObj), idObj);
console.log("obj3 = " + JSON.stringify(obj3));
//
// spread precedence
//
var objPrec1 = { id: 1, name: "obj1 name" };
var objPrec2 = { id: 1001, desc: "obj2 description" };
var objPrec3 = __assign(__assign({}, objPrec1), objPrec2);
console.log("objPrec3: " + JSON.stringify(objPrec3, null, 4));
// 
// spread with arrays
//
var firstArray = [1, 2, 3];
var secondArray = [3, 4, 5];
var thirdArray = __spreadArray(__spreadArray([], firstArray, true), secondArray, true);
console.log("third array = " + thirdArray);
var objArray1 = [
    { id: 1, name: "first element" },
];
var objArray2 = [
    { id: 2, name: "second element" },
];
var objArray3 = __spreadArray(__spreadArray(__spreadArray([], objArray1, true), [
    { id: 3, name: "third element" }
], false), objArray2, true);
console.log("objArray3 = " + JSON.stringify(objArray3, null, 4));
//
// tuples
// 
var tuple1;
tuple1 = ["test", true];
// tuple1 = ["test"];
// 
// tuple destructuring
//
console.log("tuple1[0] : " + tuple1[0]);
console.log("tuple1[1] : " + tuple1[1]);
// console.log(`tuple1[2] : ${tuple1[2]}`);
var tupleString = tuple1[0], tupleBoolean = tuple1[1];
console.log("tupleString = " + tupleString);
console.log("tupleBoolean = " + tupleBoolean);
//
// optional tuple elements
//
var tupleOptional;
tupleOptional = ["test", true];
tupleOptional = ["test"];
console.log("tupleOptional[0] : " + tupleOptional[0]);
console.log("tupleOptional[1] : " + tupleOptional[1]);
//
// tuples and spread sytanx
//
var tupleRest;
tupleRest = [1];
tupleRest = [1, "string1"];
tupleRest = [1, "string1", "string2"];
//
// object destructuring
//
var complexObject = {
    aNum: 1,
    bStr: "name",
    cBool: true
};
var aNum = complexObject.aNum, bStr = complexObject.bStr, cBool = complexObject.cBool;
console.log("aNum : " + aNum);
console.log("bStr : " + bStr);
console.log("cBool : " + cBool);
var objId = complexObject.aNum, objName = complexObject.bStr, isValid = complexObject.cBool;
console.log("objId : " + objId);
console.log("objName : " + objName);
console.log("isValid : " + isValid);
//
// functions
//
//
// optional parameters
//
function concatValues(a, b) {
    console.log("a + b = " + (a + b));
}
concatValues("first", "second");
concatValues("third");
