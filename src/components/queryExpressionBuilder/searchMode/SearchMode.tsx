import * as React from 'react';
import { ISearchBarStateProps, SearchBar } from '../../searchBar/SearchBar';
import { ExpressionParser, IFieldExpression } from '../expressionParser/ExpressionParser';
import { QueryTrigger } from '../queryTrigger/QueryTrigger';
import { ResultList } from '../resultList/ResultList';
import { IResult } from '../resultsParser/ResultsParser';

export interface ISearchModeProps {
    queryTrigger: QueryTrigger;
    updateExpression: (expression: string) => void;
}

export interface ISearchModeState extends ISearchBarStateProps {
    results: IResult[];
}

export enum FieldType {
    OBJECT = 'objecttype',
    FILE = 'filetype',
    CONNECTOR = 'connectortype',
    SOURCE = 'sourcetype',
}

export class SearchMode extends React.Component<ISearchModeProps, ISearchModeState> {
    private expressionParser: ExpressionParser;

    constructor(props: ISearchModeProps) {
        super(props);
        this.state = {results: []};
        this.expressionParser = new ExpressionParser();
    }

    private onClick(result: IResult) {
        const parsedFieldExpression: string = this.getParsedFieldExpression(result);
        this.props.updateExpression(parsedFieldExpression);
    }

    private getParsedFieldExpression(result: IResult) {
        const fieldExpression = this.getFieldExpression(result);
        let parsedFieldExpresson: string = null;
        if (fieldExpression) {
            parsedFieldExpresson = this.expressionParser.parseFieldExpression(fieldExpression);
        }
        return parsedFieldExpresson;
    }

    private getFieldExpression(result: IResult): IFieldExpression {
        if (result == null) {
            return null;
        }

        if (result.objectType) {
            return {
                fieldType: FieldType.OBJECT,
                value: result.objectType,
            };
        } else if (result.fileType) {
            return {
                fieldType: FieldType.FILE,
                value: result.fileType,
            };
        } else if (result.connectorType) {
            return {
                fieldType: FieldType.CONNECTOR,
                value: result.connectorType,
            };
        } else if (result.source) {
            return {
                fieldType: FieldType.SOURCE,
                value: result.source,
            };
        } else {
            return null;
        }
    }

    private async onSearch(searchBarText: string) {
        this.setState({searching: true});
        await this.updateResults(searchBarText);
        this.setState({searching: false});
    }

    private async updateResults(searchBarText: string) {
        const results = await this.props.queryTrigger.getResultsWithBasicExpression(searchBarText);
        this.setState({results: results});
    }

    render() {
        return (
            <div>
                <SearchBar
                id='search-mode-search-bar'
                placeholder='Search awesome things'
                value={this.state.value}
                disabled={this.state.disabled}
                searching={this.state.searching}
                onChange={(event) => this.setState({value: event.target.value})}
                onSearch={(searchBarText: string) => {this.onSearch(searchBarText);}}
                />
                <ResultList results={this.state.results} onClick={(result: IResult) => (this.onClick(result))} />
            </div>
        );
    }
}
