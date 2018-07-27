import * as React from 'react';
import { CodeEditor } from '../editor/CodeEditor';
import { CodeMirrorModes } from '../editor/EditorConstants';
import { TabConnected } from '../tab/TabConnected';
import { TabContent } from '../tab/TabContent';
import { TabNavigation } from '../tab/TabNavigation';
import { TabPaneConnected } from '../tab/TabPaneConnected';
import { OutputMode } from './outputMode/OutputMode';
import { QueryTrigger } from './queryTrigger/QueryTrigger';
import { SearchMode } from './searchMode/SearchMode';

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
// (expression: string) => this.updateExpression(expression)
// or this one :
// private updateExpression = (expression: string) => {
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
        this.initializeQueryTrigger();
        this.state = {queryExpression: '@test==foo'};
    }

    private initializeQueryTrigger() {
        this.queryTrigger = new QueryTrigger(this.props.accessToken, this.props.organizationId);
    }

    private updateExpression = (expression: string) => {
        this.setState({ queryExpression: expression });
    }

    render() {
        return (
            <div>
                <label className='form-control-label'> Query Expression Builder </label> <br/><br/><br/>
                <div>
                    <span> Current query expression : </span>
                    <span> {this.state.queryExpression} </span> <br/><br/><br/><br/>
                </div>

                {/* TODO : Move this under an 'Editors' component  */}
                <TabNavigation>
                    <TabConnected id={TAB_SEARCH_MODE_ID} title='Search Mode' />
                    <TabConnected id={TAB_FORM_MODE_ID} title='Form Mode' />
                    <TabConnected id={TAB_ADVANCED_MODE_ID} title='Advanced Mode' />
                    <TabConnected id={TAB_OUTPUT_MODE_ID} title='Output' />
                </TabNavigation>
                <TabContent>
                    <TabPaneConnected id={TAB_SEARCH_MODE_ID}>
                        <div className='mod-header-padding mod-form-top-bottom-padding'>
                            <SearchMode queryTrigger={this.queryTrigger} updateExpression={this.updateExpression} />
                        </div>
                    </TabPaneConnected>
                    <TabPaneConnected id={TAB_FORM_MODE_ID}>
                        <div className='mod-header-padding mod-form-top-bottom-padding'>
                            Content of the second tab.
                        </div>
                    </TabPaneConnected>
                    <TabPaneConnected id={TAB_ADVANCED_MODE_ID}>
                        <div className='mod-header-padding mod-form-top-bottom-padding'>
                            <CodeEditor value={'Code Editor Content'} mode={CodeMirrorModes.Python} />
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
