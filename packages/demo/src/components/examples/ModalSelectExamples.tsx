import * as React from 'react';
import {connect} from 'react-redux';
import {
    Button,
    ConnectedProps,
    IDispatch,
    InputDescription,
    Label,
    ModalSelect,
    openModal,
    RadioCard,
    RadioSelectConnected,
    ModalSelectSelectors,
    Section,
} from 'react-vapor';

import {IReactVaporExampleState} from '../../Reducers';

const paragraphStyle = {
    marginTop: 10,
    marginRight: 36,
};

// start-print

const modalSelectId = 'modal-select';
const radioSelectId = 'radio-select';

const enhanceExample1 = connect(
    (state: IReactVaporExampleState) => ({
        selectedValue: ModalSelectSelectors.getValue(state, {id: modalSelectId}),
    }),
    (dispatch: IDispatch) => ({
        open: (id: string) => dispatch(openModal(id)),
    })
);

const ExampleModalSelectDisconnected: React.FunctionComponent<ConnectedProps<typeof enhanceExample1>> = ({
    open,
    selectedValue,
}) => (
    <Section level={2} title="ModalSelect">
        <Button enabled={true} classes={['mod-append']} name="The Best Color" onClick={() => open('modal-select')}>
            <span className="btn-append">{selectedValue ?? 'none'}</span>
        </Button>
        <ModalSelect
            id={modalSelectId}
            radioSelectId={radioSelectId}
            title="The Best Color"
            isDirty={!!selectedValue}
            onConfirm={(close) => {
                // alert('Correct! This is indeed the best color.');
                close();
            }}
        >
            <RadioSelectConnected id={radioSelectId} className="flex flex-wrap mx-auto center-align full-content-y ">
                <RadioCard id="blue" name="card-option" value="blue">
                    <div className="mb2" style={{backgroundColor: 'deepskyblue', width: '150px', height: '100px'}} />
                    <Label>
                        <span className="bold">{'Blue color'}</span>
                    </Label>
                    <InputDescription>
                        <div style={{...paragraphStyle}}>{'Blue is the best color.'}</div>
                    </InputDescription>
                </RadioCard>
                <RadioCard id="red" name="card-option" value="red">
                    <div className="mb2" style={{backgroundColor: 'tomato', width: '150px', height: '100px'}} />
                    <Label>
                        <span className="bold">{'Red color'}</span>
                    </Label>
                    <InputDescription>
                        <div style={{...paragraphStyle}}>{'Red is the best color.'}</div>
                    </InputDescription>
                </RadioCard>
                <RadioCard id="green" name="card-option" value="green">
                    <div className="mb2" style={{backgroundColor: 'gold', width: '150px', height: '100px'}} />
                    <Label>
                        <span className="bold">{'Yellow color'}</span>
                    </Label>
                    <InputDescription>
                        <div style={{...paragraphStyle}}>{'Yellow is the best color.'}</div>
                    </InputDescription>
                </RadioCard>
            </RadioSelectConnected>
        </ModalSelect>
    </Section>
);

const ExampleModalSelect = enhanceExample1(ExampleModalSelectDisconnected);

export const ModalSelectExamples = () => (
    <Section>
        <ExampleModalSelect />
    </Section>
);
