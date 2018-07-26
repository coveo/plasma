import * as React from 'react';
import { Button } from '../../button/Button';
import { QueryTrigger } from '../queryTrigger/QueryTrigger';

export interface IOutputModeProps {
    queryTrigger: QueryTrigger;
    queryExpression: string;
}

export interface IOutputModeState {
}

export class OutputMode extends React.Component<IOutputModeProps, IOutputModeState> {

    private async updateResults() {
        await this.props.queryTrigger.getResultsWithAdvancedExpression(this.props.queryExpression);
    }

    render() {
        return (
            <div>
                <Button enabled={true} name={'Call'} onClick={() => this.updateResults()}/>
            </div>
        );
    }
}
