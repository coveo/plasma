import * as $ from 'jquery';
import * as _ from 'underscore';

const DEFAULT_REST_URI: string = 'https://platform.cloud.coveo.com/rest/search/v2';

export class QueryTrigger {

    constructor(private accessToken: string, private organizationId: string, private restUri?: string) {
        this.initialize(); // TODO put default props instead of this.initialize
    }

    async getResultsWithBasicExpression(basicExpression: string) {
        const data = _.extend({q: basicExpression}, this.getDefaultData());
        return await this.executeQuery(data);
    }

    async getResultsWithAdvancedExpression(advancedExpression: string) {
        const data = _.extend({aq: advancedExpression}, this.getDefaultData());
        return await this.executeQuery(data);
    }

    async getAllResults() {
        return await this.executeQuery(this.getDefaultData());
    }

    private getDefaultData() {
        return {
            // numberOfResults: 50, default to 10
            queryStringArguments: {
                organizationId: this.organizationId,
                viewAllContent: 1,
            },
        };
    }

    private async executeQuery(data: any) {
        let results;
        // TODO : better handling of fail... always needed?
        await $.ajax({
            type: 'GET',
            url: this.restUri,
            headers: {Authorization: `Bearer ${this.accessToken}`},
            data,
            })
            .done((finaleData) => {
                results = finaleData;
            })
            .fail((error) => {
                results = 'error';
            })

        return results;
    }

    private initialize() {
        if (!this.restUri) {
            this.restUri = DEFAULT_REST_URI;
        }
    }
}
