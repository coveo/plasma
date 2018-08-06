import * as $ from 'jquery';
import * as _ from 'underscore';
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

// TODO : The redux action should call this module and after getting the response
// from the api it should continue to the reducer so that the reducer update the state,
export class QueryTrigger {
    private responseParser: ResponseParser;

    constructor(private accessToken: string, private organizationId: string, private restUrl?: string) {
        // TODO put default props instead of this.initialize
        this.initialize();
        this.responseParser = new ResponseParser();
    }

    async getResultsWithBasicExpression(basicExpression: string): Promise<IResult[]> {
        const data = _.extend({q: basicExpression}, this.getDefaultData());
        return await this.getResults(data);
    }

    async getResultsWithAdvancedExpression(advancedExpression: string): Promise<IResult[]> {
        const data = _.extend({aq: advancedExpression}, this.getDefaultData());
        return await this.getResults(data);
    }

    async getAllResults(): Promise<IResult[]> {
        return await this.getResults(this.getDefaultData());
    }

    private getDefaultData() {
        return {
            queryStringArguments: {
                organizationId: this.organizationId,
                viewAllContent: 1,
            } as IQueryStringArguments,
        } as IQueryParameters;
    }

    private async getResults(data: IQueryParameters): Promise<IResult[]> {
        const response = await this.executeQuery(this.restUrl, data);
        return this.responseParser.parseResults(response);
    }

    async getFields(): Promise<any> {
        // TODO: Do we want to get all fields?
        // TODO : Do we need to link it with the organization id ? : https://platform.cloud.coveo.com/rest/organizations/{organizationId}/indexes/page/fields
        const fieldsRestUrl: string = `${DEFAULT_REST_URL}/fields`;
        const response = await this.executeQuery(fieldsRestUrl);
        return this.responseParser.parseFields(response);
    }

    async getFieldValues(fieldType: string): Promise<any> {
        // TODO: get all values, not max number of values
        const fieldValuesRestUrl: string = `${DEFAULT_REST_URL}/values?field=${fieldType}&maximumNumberOfValues=100`;
        const response = await this.executeQuery(fieldValuesRestUrl);
        return this.responseParser.parseFieldValues(response);
    }

    private async executeQuery(url: string, data: IQueryParameters = {}): Promise<IResult[]> {
        let xmlResponse;
        // TODO : better handling of fail...
        await $.ajax({
            type: 'GET',
            url: url,
            headers: {Authorization: `Bearer ${this.accessToken}`},
            data: data,
        })
            .done((repsonseData) => {
                xmlResponse = repsonseData;
            })
            .fail((error) => {
                xmlResponse = 'error';
            });

        // console.log(xmlResponse);
        return xmlResponse;
    }

    private initialize() {
        if (!this.restUrl) {
            this.restUrl = DEFAULT_REST_URL;
        }
    }
}
