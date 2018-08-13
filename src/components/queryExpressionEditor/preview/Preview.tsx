import * as classNames from 'classnames';
import * as React from 'react';
import {QueryTrigger} from '../queryTrigger/QueryTrigger';
import {IResult} from '../responseParser/ResponseParser';
import {ResultList} from '../resultList/ResultList';
import * as styles from './Preview.scss';

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

    componentWillReceiveProps(nextProps: IPreviewProps) {
        this.updateResults(nextProps.queryExpression);
    }

    private async updateResults(queryExpression: string) {
        const results = await this.props.queryTrigger.getResultsWithAdvancedExpression(queryExpression);
        this.setState({results: results});
    }

    render() {
        const containerClasses: string = classNames(
            styles.container,
            'bg-light-grey',
            'mod-border-left',
        );

        return (
            <div className={containerClasses}>
                <div className={styles.titleContainer}>
                    <div className='ml2 text-medium-blue'>Preview</div>
                </div>
                <ResultList results={this.state.results} />
            </div>
        );
    }
}
