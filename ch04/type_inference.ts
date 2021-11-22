// 
// mapped types
//

interface IAbRequired {
    a: number;
    b: string;
}

let ab: IAbRequired = {
    a: 1, b: "test"
}

type WeakInterface<T> = {
    [K in keyof T]?: T[K];
}

let allOpitional: WeakInterface<IAbRequired> = {}

let readonlyVar: Readonly<IAbRequired> = {
    a:1, b: "test"
}

// readonlyVar.a = 1;

// 
// Pick
//

interface IAbc {
    a: number;
    b: string;
    c: boolean
}

type PickAb = Pick<IAbc, "a" | "b">;

let pickAbObject: PickAb = {
    a: 1,
    b: "test"
}

//
// Record
//

type RecordedCd = Record<"c" | "d", number>;

let recordedCdVar: RecordedCd = {
    c: 1,
    d: 1
};

//
// conditional types
//

type NumberOrString<T> = T extends number ? number : string;

function logNumberOrString<T>(input: NumberOrString<T>) {
    console.log(`logNumberOrString : ${input}`);
}

logNumberOrString<number>(1);
logNumberOrString<string>("test");
// logNumberOrString<boolean>(true);
logNumberOrString<boolean>("boolean does not extend number");

// 
// conditional type chaining
//

interface IA {
    a: number;
}

interface IAb {
    a: number;
    b: string;
}

interface IAbc {
    a: number;
    b: string;
    c: boolean;
}

type abc_ab_a<T> = T extends IAbc ? [number, string, boolean] :
    T extends IAb ? [number, string] :
    T extends IA ? [number] :
    never;

function getTupleStringAbc<T>(tupleValue: abc_ab_a<T>): string{
    let [...tupleDestructured] = tupleValue;
    let returnString = "|";
    for (let value of tupleDestructured) {
        returnString += `${value}`; 
    }
    return returnString;
}

let keyA = getTupleStringAbc<IA>([1]);
console.log(`keyA = ${keyA}`);

let keyAb = getTupleStringAbc<IAb>([1, "test"]);
console.log(`keyAb = ${keyAb}`);

let keyAbc = getTupleStringAbc<IAbc>([1, "test", true]);
console.log(`keyAbc = ${keyAbc}`);