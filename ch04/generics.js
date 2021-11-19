function printGeneric(value) {
    console.log("typeof T is : " + typeof value);
    console.log("value is : " + value);
}
printGeneric(1);
printGeneric(true);
printGeneric(function () { });
printGeneric({ id: 1 });
printGeneric("test");
// printGeneric<string>(1);
//
// multiple generic types
//
function usingTwoTypes(first, second) {
}
usingTwoTypes(1, "test");
usingTwoTypes(1, "test");
usingTwoTypes(true, false);
usingTwoTypes("first", "second");
var Printer = /** @class */ (function () {
    function Printer() {
    }
    Printer.prototype.print = function (items) {
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            console.log("array item: " + item.print);
        }
    };
    return Printer;
}());
var Concatenator = /** @class */ (function () {
    function Concatenator() {
    }
    Concatenator.prototype.concatenateArray = function (items) {
        var returnString = "";
        for (var i = 0; i < items.length; i++) {
            returnString += i > 0 ? "," : "";
            returnString += items[i].toString();
        }
        return returnString;
    };
    return Concatenator;
}());
var concator = new Concatenator();
var concatResult = concator.concatenateArray([
    "first", "second", "third"
]);
console.log("concatResult = " + concatResult);
concatResult = concator.concatenateArray([
    1000, 2000, 3000
]);
console.log("concatResult = " + concatResult);
function useT(item) {
    item.print();
    // item.id = 1; // error: id is not common
    // item.name = "test"; // error: name is not common
}
//
// generic constraints
//
function printProperty(object, key) {
    var propertyValue = object[key];
    console.log("object[" + key + "] = " + propertyValue);
}
var obj1 = {
    id: 1,
    name: "myName",
    print: function () { console.log("" + this.id); }
};
printProperty(obj1, "id");
printProperty(obj1, "name");
// printProperty(obj1, "surname");
printProperty(obj1, "print");
obj1.print();
