//
// decorator syntax
//
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function simpleDecorator(constructor) {
    console.log('simpleDecorator called');
}
var ClassWithSimpleDecorator = /** @class */ (function () {
    function ClassWithSimpleDecorator() {
    }
    ClassWithSimpleDecorator = __decorate([
        simpleDecorator
    ], ClassWithSimpleDecorator);
    return ClassWithSimpleDecorator;
}());
var instance_1 = new ClassWithSimpleDecorator();
var instance_2 = new ClassWithSimpleDecorator();
console.log("instance_1 : ".concat(JSON.stringify(instance_1)));
console.log("instance_2 : ".concat(JSON.stringify(instance_2)));
// 
// multiple decorators
//
function secondDecorator(constructor) {
    console.log("secondDecorator called");
}
var ClassWithMultipleDecorators = /** @class */ (function () {
    function ClassWithMultipleDecorators() {
    }
    ClassWithMultipleDecorators = __decorate([
        simpleDecorator,
        secondDecorator
    ], ClassWithMultipleDecorators);
    return ClassWithMultipleDecorators;
}());
//
// Types of Decorators
//
function classDecorator(constructor) { }
function propertyDecorator(target, propertyKey) { }
function methodDecorator(target, methodName, descriptor) { }
function parameterDecorator(target, methodName, parameterIndex) { }
var ClassWithAllTypesOfDecorators = /** @class */ (function () {
    function ClassWithAllTypesOfDecorators() {
        this.id = 1;
    }
    ClassWithAllTypesOfDecorators.prototype.print = function () { };
    ClassWithAllTypesOfDecorators.prototype.setId = function (id) { };
    __decorate([
        propertyDecorator
    ], ClassWithAllTypesOfDecorators.prototype, "id");
    __decorate([
        methodDecorator
    ], ClassWithAllTypesOfDecorators.prototype, "print");
    __decorate([
        __param(0, parameterDecorator)
    ], ClassWithAllTypesOfDecorators.prototype, "setId");
    ClassWithAllTypesOfDecorators = __decorate([
        classDecorator
    ], ClassWithAllTypesOfDecorators);
    return ClassWithAllTypesOfDecorators;
}());
//
// decorator factories
//
function decoratorFactory(name) {
    return function (constructor) {
        console.log("decorator function called with : ".concat(name));
    };
}
var ClassWithDecoratorFactory = /** @class */ (function () {
    function ClassWithDecoratorFactory() {
    }
    ClassWithDecoratorFactory = __decorate([
        decoratorFactory('testName')
    ], ClassWithDecoratorFactory);
    return ClassWithDecoratorFactory;
}());
//
// class decorators
//
function classConstructorDec(constructor) {
    console.log("constructor : ".concat(constructor));
    constructor.prototype.testProperty = "testProperty_value";
}
var ClassWithConstructor = /** @class */ (function () {
    function ClassWithConstructor(id) {
    }
    ClassWithConstructor = __decorate([
        classConstructorDec
    ], ClassWithConstructor);
    return ClassWithConstructor;
}());
var classInstance = new ClassWithConstructor(1);
console.log("classInstance.testProperty = \n    ".concat(classInstance.testProperty));
// 
// property decorators
// 
function propertyDec(target, propertyName) {
    // console.log(`target : ${target}`);
    // console.log(`target.constructor : ${target.constructor}`);
    if (typeof (target) === 'function') {
        console.log("class name : ".concat(target.name));
    }
    else {
        console.log("class name : "
            + "".concat(target.constructor.name));
    }
    console.log("propertyName : ".concat(propertyName));
}
var ClassWithPropertyDec = /** @class */ (function () {
    function ClassWithPropertyDec() {
    }
    __decorate([
        propertyDec
    ], ClassWithPropertyDec.prototype, "nameProperty");
    return ClassWithPropertyDec;
}());
//
// static property decorators
//
var StaticClassWithPropertyDec = /** @class */ (function () {
    function StaticClassWithPropertyDec() {
    }
    __decorate([
        propertyDec
    ], StaticClassWithPropertyDec, "staticProperty");
    return StaticClassWithPropertyDec;
}());
//
// method decorators
//
function methodDec(target, methodName, descriptor) {
    console.log("target: ".concat(target));
    console.log("methodName : ".concat(methodName));
    console.log("descriptor : ".concat(JSON.stringify(descriptor)));
    console.log("target[methodName] : ".concat(target[methodName]));
}
var ClassWithMethodDec = /** @class */ (function () {
    function ClassWithMethodDec() {
    }
    ClassWithMethodDec.prototype.print = function (output) {
        console.log("ClassWithMethodDec.print"
            + "(".concat(output, ") called."));
    };
    __decorate([
        methodDec
    ], ClassWithMethodDec.prototype, "print");
    return ClassWithMethodDec;
}());
//
// using method decorators
//
function auditLogDec(target, methodName, descriptor) {
    var originalFunction = target[methodName];
    var auditFunction = function () {
        console.log("1. auditLogDec : overide of "
            + " ".concat(methodName, " called"));
        for (var i = 0; i < arguments.length; i++) {
            console.log("2. org : ".concat(i, " = ").concat(arguments[i]));
        }
        originalFunction.apply(this, arguments);
    };
    target[methodName] = auditFunction;
    return target;
}
var ClassWithAuditDec = /** @class */ (function () {
    function ClassWithAuditDec() {
    }
    ClassWithAuditDec.prototype.print = function (arg1, arg2) {
        console.log("3. ClassWIthMethodDec.print"
            + "(".concat(arg1, ", ").concat(arg2, ") called."));
    };
    __decorate([
        auditLogDec
    ], ClassWithAuditDec.prototype, "print");
    return ClassWithAuditDec;
}());
var auditClass = new ClassWithAuditDec();
auditClass.print("test1", "test2");
//
// parameter decorators
//
function parameterDec(target, methodName, parameterIndex) {
    console.log("target: ".concat(target));
    console.log("methodName: ".concat(methodName));
    console.log("parameterIndex : ".concat(parameterIndex));
}
var ClassWithParamDec = /** @class */ (function () {
    function ClassWithParamDec() {
    }
    ClassWithParamDec.prototype.print = function (value) {
    };
    __decorate([
        __param(0, parameterDec)
    ], ClassWithParamDec.prototype, "print");
    return ClassWithParamDec;
}());
