'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
// @ts-nocheck
var fs = require('fs');
var generics = require('./Generic-component-tokens.json');
var primitives = require('./Primitives.json');
var filterJson = function () {
    var primitiveVariables = primitives.collections[0].modes[0].variables.map(function (primitive) {
        var _a;
        return (_a = {}), (_a[primitive.name] = primitive.value), _a;
    });
    var genericVariables = generics.collections[2].modes[0].variables.map(function (generic) {
        var _a;
        return (_a = {}), (_a[generic.name] = generic.value.name), _a;
    });
    var interimGeneric;
    var primitive;
    var mappingButton = {};
    var mappingGeneric = {};
    var mappingPrimitive = {};
    var buttonComponentVariables = generics.collections[0].modes[0].variables
        .slice(203, 255)
        .map(function (component) {
            var _a;
            return (_a = {}), (_a[component.name] = component.value.name), _a;
        })
        .map(function (component) {
            var _a;
            var key = Object.keys(component)[0];
            var value = component[key];
            interimGeneric = genericVariables.find(function (generic) {
                return Object.keys(generic)[0] === value;
            });
            primitive = primitiveVariables.find(function (test) {
                return Object.keys(test)[0] === interimGeneric[value];
            });
            mappingButton[key] = value;
            mappingGeneric[value] = interimGeneric[value];
            mappingPrimitive[interimGeneric[value]] = primitive[interimGeneric[value]];
            return (_a = {}), (_a[key] = primitive[interimGeneric[value]]), _a;
        });
    var mapping = {};
    mapping['button'] = buttonComponentVariables;
    var json = JSON.stringify(mapping, null, 2);
    fs.writeFileSync('buttonComponentVariables.json', json);
    var component = JSON.stringify(mappingButton, null, 2);
    fs.writeFileSync('component.json', component);
    var generic = JSON.stringify(mappingGeneric, null, 2);
    fs.writeFileSync('generic.json', generic);
    var primit = JSON.stringify(mappingPrimitive, null, 2);
    fs.writeFileSync('primitive.json', primit);
};
filterJson();
