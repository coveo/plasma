import * as React from 'react';
import {connect} from 'react-redux';
import {IDispatch, ReduxUtils} from '../../utils';
import {Button} from '../button';
import {ModalActions} from '../modal/ModalActions';
import {setModalSelect, removeModalSelect} from './ModalSelectActions';
import {IModalCompositeOwnProps, ModalCompositeConnected} from '../modal/ModalComposite';
import {UnsavedChangesModalProvider} from '../modal/UnsavedChangesModalProvider';
import {RadioSelectSelectors} from '../radio';
import {IReactVaporState} from '../../ReactVapor';

type DependsOnStep<T> = (currentStep: number, numberOfSteps: number) => T;

export interface IModalSelectOwnProps
    extends Omit<
        IModalCompositeOwnProps,
        'modalBodyChildren' | 'validateShouldNavigate' | 'modalFooterChildren' | 'title'
    > {
    id: string;
    radioSelectId: string;
    onConfirm?: (close: () => void) => unknown;
    modalFooterChildren?: React.ReactNode | DependsOnStep<React.ReactNode>;
    title?: string | DependsOnStep<string>;
    isDirty?: boolean;
    cancelButtonLabel?: string;
    confirmButtonLabel?: string;
}

const mapStateToProps = (state: IReactVaporState, props: {radioSelectId: string}) => ({
    selectedValue: RadioSelectSelectors.getValue(state, {id: props.radioSelectId}),
});

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IModalSelectOwnProps) => ({
    close: () => dispatch(ModalActions.closeModal(ownProps.id)),
    setValue: (value: string) => dispatch(setModalSelect(ownProps.id, value)),
    remove: () => dispatch(removeModalSelect(ownProps.id)),
});

export type IModalSelectProps = IModalSelectOwnProps &
    ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

const ModalSelectDisconnected: React.FunctionComponent<IModalSelectProps> = ({
    id,
    radioSelectId,
    title,
    children,
    modalFooterChildren,
    isDirty,
    cancelButtonLabel = 'Cancel',
    confirmButtonLabel = 'Confirm',
    selectedValue,
    close,
    setValue,
    remove,
    onConfirm,
    ...modalProps
}) => {
    React.useEffect(() => () => remove(), []);

    return (
        <UnsavedChangesModalProvider isDirty={isDirty}>
            {({promptBefore}) => (
                <ModalCompositeConnected
                    id={id}
                    modalBodyChildren={children}
                    modalFooterChildren={
                        <>
                            {modalFooterChildren}
                            <Button name={cancelButtonLabel} onClick={close} enabled />
                            <Button
                                primary
                                name={confirmButtonLabel}
                                onClick={() => {
                                    setValue(selectedValue);
                                    onConfirm?.(close);
                                }}
                            />
                        </>
                    }
                    validateShouldNavigate={() => promptBefore(close)}
                    title={title}
                    {...modalProps}
                />
            )}
        </UnsavedChangesModalProvider>
    );
};

export const ModalSelect: React.ComponentClass<IModalSelectOwnProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(ModalSelectDisconnected);
