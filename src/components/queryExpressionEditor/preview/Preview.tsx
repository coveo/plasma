import * as React from 'react';
import * as styles from './Preview.scss';
import { QueryTrigger } from '../queryTrigger/QueryTrigger';
import { IResult } from '../responseParser/ResponseParser';
import { Button } from '../../button/Button';
import { ResultList } from '../resultList/ResultList';

export interface IPreviewProps {
    queryTrigger: QueryTrigger;
    queryExpression: string;
}

export interface IPreviewState {
    results: IResult[];
}

export class Preview extends React.Component<IPreviewProps, IPreviewState> {
    constructor(props: IPreviewProps) {
        super(props);
        this.state = {results: []};
    }

    private async updateResults() {
        const results = await this.props.queryTrigger.getResultsWithAdvancedExpression(this.props.queryExpression);
        this.setState({results: results});
    }

    render() {
        return (
            <div className={styles.container}>
                {/* TODO : Remove MODE from all the names?  */}
                {/* TODO : Move back the Form Mode after the BuildFromResult */}
                <div className='mod-header-padding mod-form-top-bottom-padding'>
                    <Button enabled={true} name={'Call'} onClick={() => this.updateResults()} />
                    <ResultList results={this.state.results} />
                </div>
            </div>
        );
    }
}
