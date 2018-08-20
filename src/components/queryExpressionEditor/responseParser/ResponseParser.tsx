import * as _ from 'underscore';
import {addQuotesIfContainsWhiteSpace} from '../QueryExpressionEditorUtils';

export interface IFieldValue {
    value: string;
    numberOfResults: number;
}

export interface IField {
    name: string;
    fieldType: string;
}

export interface IResult {
    title: string;
    uniqueID: string;
    uri: string;
    // TODO QUESTION : Should these (objectType, fileType, connectorType, and source) be grouped in a map <string, string>?
    objectType: string;
    fileType: string;
    connectorType: string;
    source: string;
}

export class ResponseParser {

    parseFieldValues(xmlResponse: any): IFieldValue[] {
        const parsedFieldValues: IFieldValue[] = [];
        try {
            const xmlFields = xmlResponse.values;
            _.forEach(xmlFields, (xmlField) => {
                const parsedFieldValue: IFieldValue = this.parseValue(xmlField);
                parsedFieldValues.push(parsedFieldValue);
            });
            return parsedFieldValues;
        } catch (e) {
            return [];
        }

    }

    private parseValue(field: any): IFieldValue {
        return {
            value: field.value,
            numberOfResults: field.numberOfResults,
        };
    }

    parseFields(xmlResponse: any): IField[] {
        const parsedFields: IField[] = [];
        try {
            const xmlFields = xmlResponse.fields;
            _.forEach(xmlFields, (xmlField) => {
                const parsedField: IField = this.parseField(xmlField);
                parsedFields.push(parsedField);
            });
            return parsedFields;
        } catch (e) {
            return [];
        }
    }

    private parseField(field: any): IField {
        return {
            name: field.name,
            fieldType: field.fieldType,
        };
    }

    parseResults(xmlResponse: any): IResult[] {
        const parsedResults: IResult[] = [];
        try {
            const xmlResults = xmlResponse.results;
            _.forEach(xmlResults, (xmlResult) => {
                const parsedResult: IResult = this.parseResult(xmlResult);
                parsedResults.push(parsedResult);
            });
            return parsedResults;
        } catch (e) {
            return [];
        }

    }

    private parseResult(result: any): IResult {
        return {
            title: result.Title,
            uniqueID: result.UniqueId,
            uri: result.raw.uri,
            objectType: result.raw.sysobjecttype,
            fileType: result.raw.sysfiltetype,
            connectorType: result.raw.sysconnectortype,
            source: addQuotesIfContainsWhiteSpace(result.raw.syssource),
        };
    }
}
