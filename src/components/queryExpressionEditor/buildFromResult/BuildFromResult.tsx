import * as React from 'react';
import {ISearchBarStateProps, SearchBar} from '../../searchBar/SearchBar';
import {QueryTrigger} from '../queryTrigger/QueryTrigger';
import {IResult} from '../responseParser/ResponseParser';
import {ResultList} from '../resultList/ResultList';

export enum Field {
    ObjectType = '@objecttype',
    FileType = '@filetype',
    ConnectorType = '@connectortype',
    Source = '@source',
}

export interface IFieldExpression {
    field: string;
    fieldValue: string;
}

export interface IBuildFromResultProps {
    queryTrigger: QueryTrigger;
    updateQueryExpression: (expression: string) => void;
}

export interface IBuildFromResultState extends ISearchBarStateProps {
    results: IResult[];
}

export class BuildFromResult extends React.Component<IBuildFromResultProps, IBuildFromResultState> {
    constructor(props: IBuildFromResultProps) {
        super(props);
        this.state = {results: []};
    }

    async componentDidMount() {
        const allResults = await this.props.queryTrigger.getAllResults();
        this.setState({results: allResults});
    }

    private onClick(result: IResult) {
        const parsedFieldExpression: string = this.getParsedFieldExpression(result);
        this.props.updateQueryExpression(parsedFieldExpression);
    }

    private getParsedFieldExpression(result: IResult) {
        const fieldExpression = this.getFieldExpression(result);
        if (!fieldExpression) {
            return null;
        }
        return this.buildFieldExpression(fieldExpression);
    }

    private getFieldExpression(result: IResult): IFieldExpression {
        if (!result) {
            return null;
        }

        if (result.objectType) {
            return {field: Field.ObjectType, fieldValue: result.objectType};
        }

        if (result.fileType) {
            return {field: Field.FileType, fieldValue: result.fileType};
        }

        if (result.connectorType) {
            return {field: Field.ConnectorType, fieldValue: result.connectorType};
        }

        if (result.source) {
            return {field: Field.Source, fieldValue: result.source};
        }

        return null;
    }

    private buildFieldExpression(fieldExpression: IFieldExpression): string {
        if (fieldExpression.field && fieldExpression.fieldValue) {
            return `${fieldExpression.field}=${fieldExpression.fieldValue}`;
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
                <div className='text-medium-blue mt4 mb3 ml4'> Search and select a result similar to the ones you want the query to match. </div>
                <div className='mt4 mb3 ml4'>
                    <SearchBar
                        id='search-mode-search-bar'
                        placeholder='Search'
                        value={this.state.value}
                        searching={this.state.searching}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.setState({value: event.target.value})}
                        onSearch={(searchBarText: string) => this.onSearch(searchBarText)}
                    />
                </div>
                <ResultList results={this.state.results} isSelectable onClick={(result: IResult) => this.onClick(result)} />
            </div>
        );
    }
}
