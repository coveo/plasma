import * as React from 'react';
import { Button } from '../../button/Button';
import { QueryTrigger } from '../queryTrigger/QueryTrigger';
import { ResultList } from '../resultList/ResultList';
import { IResult } from '../resultsParser/ResultsParser';

export interface IOutputModeProps {
    queryTrigger: QueryTrigger;
    queryExpression: string;
}

export interface IOutputModeState {
    results: IResult[];
}

export class OutputMode extends React.Component<IOutputModeProps, IOutputModeState> {
    constructor(props: IOutputModeProps) {
        super(props);
        this.state = {results: []};
    }

    private async updateResults() {
        const results = await this.props.queryTrigger.getResultsWithAdvancedExpression(this.props.queryExpression);
        this.setState({results: results});
    }

    render() {
        return (
            <div>
                <Button enabled={true} name={'Call'} onClick={() => this.updateResults()}/>
                <ResultList results={this.state.results} />
            </div>
        );
    }
}
