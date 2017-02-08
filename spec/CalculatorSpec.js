var calculator = require('../src/Calculator');
require('jasmine');

describe("Calculator", function () {
    "use strict";
    it("should have a sum function", function () {
        expect(calculator.hasOwnProperty("sum")).toBe(true);
        expect(typeof calculator.sum).toEqual("function");
    });
});
