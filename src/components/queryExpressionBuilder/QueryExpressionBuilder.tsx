import * as React from 'react';
import {TabConnected} from '../tab/TabConnected';
import {TabContent} from '../tab/TabContent';
import {TabNavigation} from '../tab/TabNavigation';
import {TabPaneConnected} from '../tab/TabPaneConnected';
import {AdvancedMode} from './advancedMode/AdvancedMode';
import {FormMode} from './formMode/FormMode';
import {OutputMode} from './outputMode/OutputMode';
import {QueryTrigger} from './queryTrigger/QueryTrigger';
import {SearchMode} from './searchMode/SearchMode';

export interface IQueryExpressionBuilderProps {
    accessToken: string;
    organizationId: string;
    restUri?: string;
}

export interface IQueryExpressionBuilderState {
    queryExpression: string;
}

const TAB_SEARCH_MODE_ID = 'tabSearchMode';
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

export class QueryExpressionBuilder extends React.Component<IQueryExpressionBuilderProps, IQueryExpressionBuilderState> {
    private queryTrigger: QueryTrigger;

    constructor(props: IQueryExpressionBuilderProps) {
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
                {/* TODO : Move back the Form Mode after the searchMode */}
                <TabNavigation>
                    <TabConnected id={TAB_FORM_MODE_ID} title='Form Mode' />
                    <TabConnected id={TAB_SEARCH_MODE_ID} title='Search Mode' />
                    <TabConnected id={TAB_ADVANCED_MODE_ID} title='Advanced Mode' />
                    <TabConnected id={TAB_OUTPUT_MODE_ID} title='Output' />
                </TabNavigation>
                <TabContent>
                    <TabPaneConnected id={TAB_SEARCH_MODE_ID}>
                        <div className='mod-header-padding mod-form-top-bottom-padding'>
                            <SearchMode queryTrigger={this.queryTrigger} updateQueryExpression={this.updateQueryExpression} />
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
