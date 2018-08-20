import * as classNames from 'classnames';
import * as React from 'react';
import {TabConnected} from '../../tab/TabConnected';
import {TabContent} from '../../tab/TabContent';
import {TabNavigation} from '../../tab/TabNavigation';
import {TabPaneConnected} from '../../tab/TabPaneConnected';
import {AdvancedMode} from '../advancedMode/AdvancedMode';
import {BuildFromResult} from '../buildFromResult/BuildFromResult';
import {FormModeConnected} from '../formMode/FormModeConnected';
import {QueryTrigger} from '../queryTrigger/QueryTrigger';
import * as styles from './Editors.scss';

export interface IEditorsProps {
    queryTrigger: QueryTrigger;
    queryExpression: string;
    updateQueryExpression: (expression: string) => void;
}

const TAB_BUILD_FROM_RESULT_ID = 'tabBuildFromResult';
const TAB_FORM_MODE_ID = 'tabFormMode';
const TAB_ADVANCED_MODE_ID = 'tabAdvancedMode';

export class Editors extends React.Component<IEditorsProps> {
    render() {
        const tabContainerClasses: string = classNames(
            styles.tabContainer,
        );

        return (
            <div className={styles.editorsContainer}>
                <TabNavigation>
                    <TabConnected id={TAB_BUILD_FROM_RESULT_ID} title='Build From Result' />
                    <TabConnected id={TAB_FORM_MODE_ID} title='Form Mode' />
                    <TabConnected id={TAB_ADVANCED_MODE_ID} title='Advanced Mode' />
                </TabNavigation>
                <TabContent>
                    <TabPaneConnected id={TAB_BUILD_FROM_RESULT_ID}>
                        <div className={tabContainerClasses}>
                            <BuildFromResult queryTrigger={this.props.queryTrigger} updateQueryExpression={this.props.updateQueryExpression} />
                        </div>
                    </TabPaneConnected>
                    <TabPaneConnected id={TAB_FORM_MODE_ID}>
                        <div className={tabContainerClasses}>
                            <FormModeConnected queryTrigger={this.props.queryTrigger} updateQueryExpression={this.props.updateQueryExpression} />
                        </div>
                    </TabPaneConnected>
                    <TabPaneConnected id={TAB_ADVANCED_MODE_ID}>
                        <div className={tabContainerClasses}>
                            <AdvancedMode queryExpression={this.props.queryExpression} updateQueryExpression={this.props.updateQueryExpression} />
                        </div>
                    </TabPaneConnected>
                </TabContent>
            </div>
        );
    }
}
