import * as $ from 'jquery';
import * as _ from 'underscore';
import {convertUndefinedAndNullToEmptyString} from '../../../utils/FalsyValuesUtils';
import {IResult, ResponseParser} from '../responseParser/ResponseParser';

const DEFAULT_REST_URL: string = 'https://platform.cloud.coveo.com/rest/search/v2';

export interface IQueryParameters {
    q?: string;
    aq?: string;
    numberOfResults?: number;
    queryStringArguments?: IQueryStringArguments;
}

export interface IQueryStringArguments {
    organizationId?: string;
    viewAllContent?: number;
}

// TODO : Improve the API calls and handling of errors
// Some fields raise some errors when a call to the API is made with them
// See parsedField variable in ValueSelectString.tsx
//      - Maybe I'm not using the right API call or
//      - Maybe I'm not parsing the field value correctly
// I will have to investigate that.
export class QueryTrigger {
    private responseParser: ResponseParser;

    constructor(private accessToken: string, private organizationId: string, private restUrl?: string) {
        this.initializeRestUrl();
        this.responseParser = new ResponseParser();
    }

    async getResultsWithBasicExpression(basicExpression: string): Promise<IResult[]> {
        const parameters = _.extend({q: basicExpression}, this.getDefaultParameters());
        return await this.getResults(parameters);
    }

    async getResultsWithAdvancedExpression(advancedExpression: string): Promise<IResult[]> {
        const parameters = _.extend({aq: advancedExpression}, this.getDefaultParameters());
        return await this.getResults(parameters);
    }

    async getAllResults(): Promise<IResult[]> {
        return await this.getResults(this.getDefaultParameters());
    }

    private initializeRestUrl() {
        this.restUrl = convertUndefinedAndNullToEmptyString(this.restUrl) === '' ? DEFAULT_REST_URL : this.restUrl;
    }

    private getDefaultParameters() {
        return {
            numberOfResults: 20,
            queryStringArguments: {
                organizationId: this.organizationId,
                viewAllContent: 1,
            } as IQueryStringArguments,
        } as IQueryParameters;
    }

    private async getResults(parameters: IQueryParameters): Promise<IResult[]> {
        const response = await this.executeQuery(this.restUrl, parameters);
        return this.responseParser.parseResults(response);
    }

    async getFields(): Promise<any> {
        // TODO : Do we need to link it with the organization id ? : https://platform.cloud.coveo.com/rest/organizations/{organizationId}/indexes/page/fields
        const fieldsRestUrl: string = `${DEFAULT_REST_URL}/fields`;
        const response = await this.executeQuery(fieldsRestUrl);
        return this.responseParser.parseFields(response);
    }

    async getFieldValues(fieldType: string): Promise<any> {
        const fieldValuesRestUrl: string = `${DEFAULT_REST_URL}/values?field=${fieldType}&maximumNumberOfValues=100`;
        const response = await this.executeQuery(fieldValuesRestUrl);
        return this.responseParser.parseFieldValues(response);
    }

    private async executeQuery(url: string, parameters: IQueryParameters = {}): Promise<IResult[]> {
        let xmlResponse;
        // TODO : Better handling of errors...
        await $.ajax({
            type: 'GET',
            url: url,
            headers: {Authorization: `Bearer ${this.accessToken}`},
            data: parameters,
        })
            .done((repsonse) => {
                xmlResponse = repsonse;
            })
            .fail((error) => {
                xmlResponse = 'error';
            });

        return xmlResponse;
    }
}
