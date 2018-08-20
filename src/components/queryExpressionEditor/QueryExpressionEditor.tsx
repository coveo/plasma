import * as classNames from 'classnames';
import * as React from 'react';
import {Editors} from './editors/Editors';
import {Preview} from './preview/Preview';
import * as styles from './QueryExpressionEditor.scss';
import {QueryTrigger} from './queryTrigger/QueryTrigger';

export interface IQueryExpressionEditorProps {
    accessToken: string;
    organizationId: string;
    restUri?: string;
}

export interface IQueryExpressionEditorState {
    queryExpression: string;
}

export class QueryExpressionEditor extends React.Component<IQueryExpressionEditorProps, IQueryExpressionEditorState> {
    static defaultProps: IQueryExpressionEditorProps = {
        accessToken: '',
        organizationId: '',
        restUri: '',
    };

    private queryTrigger: QueryTrigger;

    constructor(props: IQueryExpressionEditorProps) {
        super(props);
        this.queryTrigger = new QueryTrigger(this.props.accessToken, this.props.organizationId, this.props.restUri);
        this.state = {queryExpression: ''};
    }

    private updateQueryExpression = (expression: string) => {
        this.setState({queryExpression: expression});
    }

    render() {

        const containerClasses: string = classNames(
            styles.container,
            'bg-pure-white',
        );

        return (
            <div className={containerClasses}>
                <div className={styles.leftContainer}>
                    <div className={styles.topLeftContainer}>
                        <div className='h1 text-medium-blue mt5 ml4 semibold'>
                            Query Expression Builder
                        </div>
                        <div className={`h3 mt4 text-pure-white bg-light-blue ${styles.queryExpressionContainer}`}>
                            <div className='ml4'>
                                <span>Generated Query Expression : </span>
                                <span className='semibold'> {this.state.queryExpression} </span>
                            </div>
                        </div>
                    </div>
                    <Editors
                        queryTrigger={this.queryTrigger}
                        queryExpression={this.state.queryExpression}
                        updateQueryExpression={this.updateQueryExpression}
                    />
                </div>

                <div className={styles.rightContainer}>
                    <Preview queryTrigger={this.queryTrigger} queryExpression={this.state.queryExpression} />
                </div>
            </div>
        );
    }
}
