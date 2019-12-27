"use strict";
exports.__esModule = true;
//////////////////////////////////////////////////////////////////////
var Unit;
(function (Unit) {
    Unit["k"] = "k";
    Unit["M"] = "M";
    Unit["Md"] = "Md";
    Unit["G"] = "G";
})(Unit = exports.Unit || (exports.Unit = {}));
//////////////////////////////////////////////////////////////////////
var Money = /** @class */ (function () {
    function Money() {
    }
    Money.add = function (a, b) {
        var newValue = a.value + b.value;
        if (a.unit === b.unit) {
            if (!amIgoingToANewUnit(a, b))
                return { value: (a.value + b.value), unit: a.unit };
        }
        else {
            var highestUnit = (howManyZeros(a.unit) > howManyZeros(b.unit)) ? a.unit : b.unit;
        }
        return { unit: Unit.G, value: 2 };
    };
    Money.substract = function (toMe, thatQuantity) {
        return { unit: Unit.k, value: 0 };
    };
    Money.isGreater = function (isThis, greaterThan) {
        return false;
    };
    return Money;
}());
exports["default"] = Money;
//////////////////////////////////////////////////////////////////
var amIgoingToANewUnit = function (a, b) {
    if (a.unit === b.unit)
        return a.value + b.value >= 1000;
    else
        return false;
};
/**
 * @description Returns the number of zeros associated with a Unit
 *
 * @param unit
 */
var howManyZeros = function (unit) {
    var humanPosition = (Object.keys(Unit).findIndex(function (el) { return el === String(unit); })) + 1; // start at 1, SORRY
    return humanPosition * 3;
};
var getNextUnit = function (unit) {
    var arrayedUnits = Object.keys(Unit);
    var currentPosition = arrayedUnits.findIndex(function (el) { return el === String(unit); });
    return Object.values(Unit)[currentPosition + 1];
};
console.log('next unit', getNextUnit(Unit.Md));
