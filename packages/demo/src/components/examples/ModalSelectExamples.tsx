import * as React from 'react';
import {connect} from 'react-redux';
import {
    Button,
    ConnectedProps,
    IDispatch,
    InputDescription,
    Label,
    openModal,
    RadioCard,
    Section,
    RadioSelectConnected,
    ModalCompositeConnected,
    RadioSelectSelectors,
    closeModal,
} from 'react-vapor';

import {IReactVaporExampleState} from '../../Reducers';

const paragraphStyle = {
    marginTop: 10,
    marginRight: 36,
};

// start-print

const modalSelectId = 'modal-select';
const radioId = 'radio-select';

const enhanceExample = connect(
    (state: IReactVaporExampleState) => ({
        storedValue: RadioSelectSelectors.getValue(state, {id: radioId}),
    }),
    (dispatch: IDispatch) => ({
        open: () => dispatch(openModal(modalSelectId)),
        close: () => dispatch(closeModal(modalSelectId)),
    })
);

const ExampleModalSelectDisconnected: React.FunctionComponent<ConnectedProps<typeof enhanceExample>> = ({
    open,
    close,
    storedValue,
}) => {
    const [localValue, setLocalValue] = React.useState<string>();
    return (
        <Section
            level={2}
            title="ModalSelect"
            description="The ModalSelect component offers detailed choice selection in a compact format using a modal."
        >
            <Button enabled={true} classes={['mod-append']} name="The Best Color" onClick={open}>
                <span className="btn-append">{localValue ?? 'none'}</span>
            </Button>
            <ModalCompositeConnected
                id={modalSelectId}
                title="Select The Best Color"
                modalBodyChildren={
                    <RadioSelectConnected
                        id={radioId}
                        className="flex flex-wrap mx-auto center-align full-content-y"
                        valueOnMount={localValue ?? 'Blue'}
                    >
                        <RadioCard id="blue" name="card-option" value="Blue">
                            <div
                                className="mb2"
                                style={{backgroundColor: 'deepskyblue', width: '150px', height: '100px'}}
                            />
                            <Label>
                                <span className="bold">{'Blue color'}</span>
                            </Label>
                            <InputDescription>
                                <div style={{...paragraphStyle}}>{'Blue is the best color.'}</div>
                            </InputDescription>
                        </RadioCard>
                        <RadioCard id="red" name="card-option" value="Red">
                            <div className="mb2" style={{backgroundColor: 'tomato', width: '150px', height: '100px'}} />
                            <Label>
                                <span className="bold">{'Red color'}</span>
                            </Label>
                            <InputDescription>
                                <div style={{...paragraphStyle}}>{'Red is the best color.'}</div>
                            </InputDescription>
                        </RadioCard>
                        <RadioCard id="yellow" name="card-option" value="Yellow">
                            <div className="mb2" style={{backgroundColor: 'gold', width: '150px', height: '100px'}} />
                            <Label>
                                <span className="bold">{'Yellow color'}</span>
                            </Label>
                            <InputDescription>
                                <div style={{...paragraphStyle}}>{'Yellow is the best color.'}</div>
                            </InputDescription>
                        </RadioCard>
                    </RadioSelectConnected>
                }
                modalFooterChildren={
                    <>
                        <Button name="Cancel" onClick={close} enabled />
                        <Button
                            primary
                            name="Confirm"
                            onClick={() => {
                                setLocalValue(storedValue);
                                close();
                            }}
                        />
                    </>
                }
            />
        </Section>
    );
};

const ExampleModalSelect = enhanceExample(ExampleModalSelectDisconnected);

export const ModalSelectExamples = () => (
    <Section>
        <ExampleModalSelect />
    </Section>
);
