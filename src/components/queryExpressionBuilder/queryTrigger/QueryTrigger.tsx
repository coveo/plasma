import * as $ from 'jquery';
import * as _ from 'underscore';
import { IResult, ResultsParser } from '../resultsParser/ResultsParser';

const DEFAULT_REST_URI: string = 'https://platform.cloud.coveo.com/rest/search/v2';

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

// TODO : Do we want to pass the QueryTrigger in the props?
//        or just declare two instances; one in the SearchMode and one in the OutputMode
export class QueryTrigger {
    private resultsParser: ResultsParser;

    constructor(private accessToken: string, private organizationId: string, private restUri?: string) {
        this.initialize(); // TODO put default props instead of this.initialize
        this.resultsParser = new ResultsParser();
    }

    async getResultsWithBasicExpression(basicExpression: string): Promise<IResult[]> {
        const data = _.extend({q: basicExpression}, this.getDefaultData());
        return await this.executeQuery(data);
    }

    async getResultsWithAdvancedExpression(advancedExpression: string): Promise<IResult[]> {
        const data = _.extend({aq: advancedExpression}, this.getDefaultData());
        return await this.executeQuery(data);
    }

    async getAllResults(): Promise<IResult[]> {
        return await this.executeQuery(this.getDefaultData());
    }

    private getDefaultData() {
        return {
            queryStringArguments: {
                organizationId: this.organizationId,
                viewAllContent: 1,
            } as IQueryStringArguments,
        } as IQueryParameters;
    }

    private async executeQuery(data: IQueryParameters): Promise<IResult[]> {
        let xmlResponse;
        // TODO : better handling of fail... always needed?
        await $.ajax({
            type: 'GET',
            url: this.restUri,
            headers: {Authorization: `Bearer ${this.accessToken}`},
            data,
            })
            .done((repsonseData) => {
                xmlResponse = repsonseData;
            })
            .fail((error) => {
                xmlResponse = 'error';
            });
        // TODO : Review parsing des results;
        const results = this.resultsParser.parse(xmlResponse);

        return results;
    }

    private initialize() {
        if (!this.restUri) {
            this.restUri = DEFAULT_REST_URI;
        }
    }
}
