import * as _ from 'underscore';

export interface IResult {
    title?: string;
    excerpt?: string;
    uniqueID?: string;
    objectType?: string;
    fileType?: string;
    connectorType?: string;
    source?: string;
}

export class ResultsParser {

    // TODO : review any ...
    parse(xmlResponse: any): IResult[] {
        const xmlResults = xmlResponse['results'];
        const finalResults: IResult[] = [];

        _.forEach(xmlResults, (xmlResult) => {
            const parsedResult: IResult = this.parseResult(xmlResult);
            finalResults.push(parsedResult);
        });
        return finalResults;
    }

    // TODO : There is probably a better way, 'any .....'
    private parseResult(result: any): IResult {
        const raw = result['raw'];
        return {
            title: result['Title'],
            excerpt: result['Excerpt'],
            uniqueID: result['UniqueId'],
            objectType: raw['sysobjecttype'],
            fileType: raw['sysfiltetype'],
            connectorType: raw['sysconnectortype'],
            source: raw['syssource'],
        } as IResult;
    }
}
