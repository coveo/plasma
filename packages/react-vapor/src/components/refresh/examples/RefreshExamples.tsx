import * as React from 'react';
import {ReactVaporStore} from '../../../../docs/ReactVaporStore';
import {Button} from '../../button/Button';
import {LabeledInput} from '../../input/LabeledInput';
import {Section} from '../../section/Section';
import {ButtonWithRefreshCallback} from '../ButtonWithRefreshCallback';
import {RefreshCallBackActions} from '../RefeshCallbackActions';
import {RefreshCallback} from '../RefreshCallback';

// start-print
export class RefreshExamples extends React.Component<any, any> {
    render() {
        return (
            <>
                <Section level={2} title="Component to handle Refresh">
                    <LabeledInput label="Refresh counter">
                        <Button
                            name="Start"
                            className="btn mr2"
                            onClick={() => ReactVaporStore.dispatch(RefreshCallBackActions.start('refresh-1'))}
                        />
                        <Button
                            name="Stop"
                            className="btn"
                            onClick={() => ReactVaporStore.dispatch(RefreshCallBackActions.stop('refresh-1'))}
                        />
                        <div>
                            <RefreshCallback id="refresh-1" callback={() => alert('refresh end')} />
                        </div>
                    </LabeledInput>
                </Section>
                <Section level={2} title="Component with a button to call the refreshCallback">
                    <LabeledInput label="Refresh counter">
                        <Button
                            name="Start"
                            className="btn mr2"
                            onClick={() => ReactVaporStore.dispatch(RefreshCallBackActions.start('refresh-2'))}
                        />
                        <Button
                            name="Stop"
                            className="btn"
                            onClick={() => ReactVaporStore.dispatch(RefreshCallBackActions.stop('refresh-2'))}
                        />
                        <div>
                            <ButtonWithRefreshCallback
                                id="refresh-2"
                                callback={(start) => {
                                    alert('refresh end');
                                    start();
                                }}
                                button={{
                                    name: 'Refresh',
                                    enabled: true,
                                }}
                                buttonContainerProps={{
                                    className: 'mb2',
                                }}
                            />
                        </div>
                    </LabeledInput>
                </Section>
            </>
        );
    }
}
