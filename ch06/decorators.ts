//
// decorator syntax
//

function simpleDecorator(constructor: Function) {
    console.log('simpleDecorator called');
}

@simpleDecorator
class ClassWithSimpleDecorator {

}

let instance_1 = new ClassWithSimpleDecorator();
let instance_2 = new ClassWithSimpleDecorator();

console.log(`instance_1 : ${JSON.stringify(instance_1)}`);
console.log(`instance_2 : ${JSON.stringify(instance_2)}`);

// 
// multiple decorators
//

function secondDecorator(constructor: Function) {
    console.log(`secondDecorator called`);
}

@simpleDecorator
@secondDecorator
class ClassWithMultipleDecorators {

}

//
// types of decorators
//

function classDecorator(
    constructor: Function) {}

function propertyDecorator(
    target: any,
    propertyKey: string) {}

function methodDecorator(
    target: any,
    methodName: string,
    descriptor?: PropertyDescriptor) {}

function parameterDecorator(
    target: any,
    methodName: string,
    parameterIndex: number) {}

@classDecorator
class ClassWithAllTypesOfDecorators {
    @propertyDecorator
    id: number = 1;

    @methodDecorator
    print() {}

    setId(@parameterDecorator id: number) { }
}

// 
// decorator factories
//

function decoratorFactory(name: string) {
    return (constructor: Function) => {
        console.log(`decorator function called with : ${name}`);
    }
}

@decoratorFactory('testname')
class ClassWithDecoratorFactory {
    
}