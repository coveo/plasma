import * as React from 'react';
import {connect} from 'react-redux';
import {
    Button,
    ButtonWithRefreshCallback,
    IDispatch,
    LabeledInput,
    RefreshCallback,
    RefreshCallBackActions,
    Section,
} from 'react-vapor';

// start-print
const mapDispatchToProps = (dispatch: IDispatch) => ({
    start: (id: string) => dispatch(RefreshCallBackActions.start(id)),
    stop: (id: string) => dispatch(RefreshCallBackActions.stop(id)),
});

const RefreshExamplesDisconnected = (props: ReturnType<typeof mapDispatchToProps>) => (
    <>
        <Section level={2} title="Component to handle Refresh">
            <LabeledInput label="Refresh counter">
                <Button name="Start" className="btn mr2" onClick={() => props.start('refresh-1')} />
                <Button name="Stop" className="btn" onClick={() => props.stop('refresh-1')} />
                <div>
                    <RefreshCallback id="refresh-1" callback={() => alert('refresh end')} />
                </div>
            </LabeledInput>
        </Section>
        <Section level={2} title="Component with a button to call the refreshCallback">
            <LabeledInput label="Refresh counter">
                <Button name="Start" className="btn mr2" onClick={() => props.start('refresh-2')} />
                <Button name="Stop" className="btn" onClick={() => props.stop('refresh-2')} />
                <div>
                    <ButtonWithRefreshCallback
                        id="refresh-2"
                        delay={20}
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

export const RefreshExamples = connect(undefined, mapDispatchToProps)(RefreshExamplesDisconnected);
// stop-print
