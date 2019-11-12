import * as React from 'react';
import {ReactVaporStore} from '../../../../docs/ReactVaporStore';
import {Button} from '../../button/Button';
import {LabeledInput} from '../../input/LabeledInput';
import {Section} from '../../section/Section';
import {RefreshCallBackActions} from '../RefeshCallbackActions';
import {RefreshCallback} from '../RefreshCallback';
import {RefreshCallbackWithButton} from '../RefreshCallbackHOC';

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
                            <RefreshCallback id="refresh-1" callBack={() => alert('refresh end')} />
                        </div>
                    </LabeledInput>
                </Section>
            </>
        );
    }
}
