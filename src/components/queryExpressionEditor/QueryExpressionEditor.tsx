import * as React from 'react';
import {TabConnected} from '../tab/TabConnected';
import {TabContent} from '../tab/TabContent';
import {TabNavigation} from '../tab/TabNavigation';
import {TabPaneConnected} from '../tab/TabPaneConnected';
import {AdvancedMode} from './advancedMode/AdvancedMode';
import {BuildFromResult} from './buildFromResult/BuildFromResult';
import {FormMode} from './formMode/FormMode';
import {OutputMode} from './outputMode/OutputMode';
import {QueryTrigger} from './queryTrigger/QueryTrigger';

export interface IQueryExpressionEditorProps {
    accessToken: string;
    organizationId: string;
    restUri?: string;
}

export interface IQueryExpressionEditorState {
    queryExpression: string;
}

const TAB_BUILD_FROM_RESULT_ID = 'tabBuildFromResult';
const TAB_FORM_MODE_ID = 'tabFormMode';
const TAB_ADVANCED_MODE_ID = 'tabAdvancedMode';
const TAB_OUTPUT_MODE_ID = 'tabOutputMode';

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
            <div>
                <label className='form-control-label'> Query Expression Builder </label> <br /><br /><br />
                <div>
                    <span> Current query expression : </span>
                    <span> {this.state.queryExpression} </span> <br /><br /><br /><br />
                </div>

                {/* TODO : Move this under an 'Editors' component  */}
                {/* TODO : Remove MODE from all the names?  */}
                {/* TODO : Move back the Form Mode after the BuildFromResult */}
                <TabNavigation>
                    <TabConnected id={TAB_BUILD_FROM_RESULT_ID} title='Build From Result' />
                    <TabConnected id={TAB_FORM_MODE_ID} title='Form Mode' />
                    <TabConnected id={TAB_ADVANCED_MODE_ID} title='Advanced Mode' />
                    <TabConnected id={TAB_OUTPUT_MODE_ID} title='Output' />
                </TabNavigation>
                <TabContent>
                    <TabPaneConnected id={TAB_BUILD_FROM_RESULT_ID}>
                        <div className='mod-header-padding mod-form-top-bottom-padding'>
                            <BuildFromResult queryTrigger={this.queryTrigger} updateQueryExpression={this.updateQueryExpression} />
                        </div>
                    </TabPaneConnected>
                    <TabPaneConnected id={TAB_FORM_MODE_ID}>
                        <div className='mod-header-padding mod-form-top-bottom-padding'>
                            <FormMode queryTrigger={this.queryTrigger} updateQueryExpression={this.updateQueryExpression} />
                        </div>
                    </TabPaneConnected>
                    <TabPaneConnected id={TAB_ADVANCED_MODE_ID}>
                        <div className='mod-header-padding mod-form-top-bottom-padding'>
                            <AdvancedMode queryExpression={this.state.queryExpression} updateQueryExpression={this.updateQueryExpression} />
                        </div>
                    </TabPaneConnected>
                    <TabPaneConnected id={TAB_OUTPUT_MODE_ID}>
                        <div className='mod-header-padding mod-form-top-bottom-padding'>
                            <OutputMode queryTrigger={this.queryTrigger} queryExpression={this.state.queryExpression} />
                        </div>
                    </TabPaneConnected>
                </TabContent>

            </div>
        );
    }
}
