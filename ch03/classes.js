//
// classes
//
var SimpleClass = /** @class */ (function () {
    function SimpleClass() {
    }
    SimpleClass.prototype.print = function () {
        console.log("SimpleClass.id = " + this.id);
    };
    return SimpleClass;
}());
var mySimpleClass = new SimpleClass();
mySimpleClass.id = 2020;
mySimpleClass.print();
// 
// implmenting interfaces
//
var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.prototype.print = function () {
        console.log("ClassA.print() called.");
    };
    ;
    return ClassA;
}());
var ClassB = /** @class */ (function () {
    function ClassB() {
    }
    ClassB.prototype.print = function () {
        console.log("ClassB.print() called.");
    };
    ;
    return ClassB;
}());
function printClass(a) {
    a.print();
}
var classA = new ClassA();
var classB = new ClassB();
printClass(classA);
printClass(classB);
var ClassC = /** @class */ (function () {
    function ClassC() {
    }
    ClassC.prototype.print = function () {
        console.log("ClassC.print() called.");
    };
    ;
    return ClassC;
}());
var classC = new ClassC();
printClass(classC);
// 
// class constructors
// 
var ClassWithConstructor = /** @class */ (function () {
    function ClassWithConstructor(_id) {
        this.id = _id;
    }
    return ClassWithConstructor;
}());
var classWithConstructor = new ClassWithConstructor(10);
console.log("classWithConstructor = \n    " + JSON.stringify(classWithConstructor));
// 
// class modifiers
//
var ClassWithPublicProperty = /** @class */ (function () {
    function ClassWithPublicProperty() {
    }
    return ClassWithPublicProperty;
}());
var publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;
var ClassWithPrivateProperty = /** @class */ (function () {
    function ClassWithPrivateProperty(id) {
        this.id = id;
    }
    return ClassWithPrivateProperty;
}());
var privateAccess = new ClassWithPrivateProperty(10);
// privateAccess.id = 20;
privateAccess["id"] = 20;
//
// ES6 private fields
//
// NOTE : only ES6 compatible
// class ClassES6Private {
//     #id: number;
//     constructor(id: number) {
//         this.#id = id;
//     }
// }
// let es6PrivateClass = new ClassES6Private(10);
// es6PrivateClass.#id = 20;
//
// constructor access modifiers
//
var ClassWithCtorMods = /** @class */ (function () {
    function ClassWithCtorMods(id, name) {
        this.id = id;
        this.name = name;
    }
    return ClassWithCtorMods;
}());
var myClassMod = new ClassWithCtorMods(1, "test");
console.log("myClassMod.id = " + myClassMod.id);
// console.log(`myClassMod.name = ${myClassMod.name}`);
// 
// readonly
//
var ClassWithReadonly = /** @class */ (function () {
    function ClassWithReadonly(_name) {
        this.name = _name;
    }
    return ClassWithReadonly;
}());
var ClassWithAccessors = /** @class */ (function () {
    function ClassWithAccessors() {
        this._id = 0;
    }
    Object.defineProperty(ClassWithAccessors.prototype, "id", {
        get: function () {
            console.log("get id property");
            return this._id;
        },
        set: function (value) {
            console.log("set id property");
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    return ClassWithAccessors;
}());
var classWithAccessors = new ClassWithAccessors();
classWithAccessors.id = 10;
console.log("classWithAccessors.id = " + classWithAccessors.id);
