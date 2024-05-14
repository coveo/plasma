// @ts-nocheck
import * as fs from 'fs';
import * as generics from './Generic-component-tokens.json';
import * as primitives from './Primitives.json';

const filterJson = () => {
    const primitiveVariables = primitives.collections[0].modes[0].variables.map((primitive) => ({
        [primitive.name]: primitive.value,
    }));
    const genericVariables = generics.collections[2].modes[0].variables.map((generic) => ({
        [generic.name]: generic.value.name,
    }));
    console.log(generics.collections[0].modes[0].variables.length);
    console.log(generics.collections[0].modes[1].variables.length);
    let interimGeneric;
    let primitive;
    const mappingButton: {[key: string]: any} = {};
    const mappingGeneric: {[key: string]: any} = {};
    const mappingPrimitive: {[key: string]: any} = {};
    const buttonComponentVariables = generics.collections[0].modes[0].variables
        .slice(203, 255)
        .map((component) => ({[component.name]: component.value.name}))
        .map((component) => {
            const key = Object.keys(component)[0];
            const value = component[key];
            interimGeneric = genericVariables.find((generic) => Object.keys(generic)[0] === value);
            primitive = primitiveVariables.find((test) => Object.keys(test)[0] === interimGeneric[value]);
            mappingButton[key] = value;
            mappingGeneric[value] = interimGeneric[value];
            mappingPrimitive[interimGeneric[value]] = primitive[interimGeneric[value]];
            return {[key]: primitive[interimGeneric[value]]};
        });
    const mapping: {[key: string]: any} = {};
    mapping['button'] = buttonComponentVariables;
    const json = JSON.stringify(mapping, null, 2);
    fs.writeFileSync('buttonComponentVariables.json', json);

    const component = JSON.stringify(mappingButton, null, 2);
    fs.writeFileSync('component.json', component);

    const generic = JSON.stringify(mappingGeneric, null, 2);
    fs.writeFileSync('generic.json', generic);

    const primit = JSON.stringify(mappingPrimitive, null, 2);
    fs.writeFileSync('primitive.json', primit);
};
filterJson();
