import * as React from 'react';
import * as styles from './QueryExpressionEditor.scss';
import {Editors} from './editors/Editors';
import {Preview} from './preview/Preview';
import {QueryTrigger} from './queryTrigger/QueryTrigger';

export interface IQueryExpressionEditorProps {
    accessToken: string;
    organizationId: string;
    restUri?: string;
}

export interface IQueryExpressionEditorState {
    queryExpression: string;
}

// General TODOs :
//
// style
//
// functions in props :
// this version :
// (expression: string) => this.updateQueryExpression(expression)
// or this one :
// private updateQueryExpression = (expression: string) => {
//     this.setState({ queryExpression: expression });
// }
//
// hard coded strings
//
// eos2015 in tsconfig

export class QueryExpressionEditor extends React.Component<IQueryExpressionEditorProps, IQueryExpressionEditorState> {
    private queryTrigger: QueryTrigger;

    constructor(props: IQueryExpressionEditorProps) {
        super(props);
        this.queryTrigger = new QueryTrigger(this.props.accessToken, this.props.organizationId);
        this.state = {queryExpression: ''};
    }

    private updateQueryExpression = (expression: string) => {
        this.setState({queryExpression: expression});
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.leftContainer}>
                    <br /><br /><br />
                    <label className='form-control-label'> Query Expression Builder </label> <br /><br />
                    <div>
                        <span> Current query expression : </span>
                        <span> {this.state.queryExpression} </span> <br /><br /><br />
                    </div>

                    <Editors
                        queryTrigger={this.queryTrigger}
                        queryExpression={this.state.queryExpression}
                        updateQueryExpression={this.updateQueryExpression}
                    />
                </div>

                <div className={styles.rightContainer}>
                    <Preview
                        queryTrigger={this.queryTrigger}
                        queryExpression={this.state.queryExpression}
                    />
                </div>
            </div>
        );
    }
}
