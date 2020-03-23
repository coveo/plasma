import * as React from 'react';
import {connect} from 'react-redux';
import {
    addToast,
    Button,
    IDispatch,
    IToastProps,
    Section,
    Toast,
    ToastContainer,
    ToastContainerConnected,
} from 'react-vapor';

import {ExampleComponent} from '../ComponentsInterface';

export const ToastExamples: ExampleComponent = () => (
    <Section>
        <ToastsWithLocalState />
        <ToastsWithReduxStore />
    </Section>
);

const ToastsWithLocalState: React.FunctionComponent = () => {
    const [state, setState] = React.useState({
        Success: false,
        Warning: false,
        Error: false,
        Timed: false,
    });

    return (
        <>
            <Section level={2} title="Toasts with a local state" className="flex">
                <Button
                    enabled
                    className="btn m0 mr1 mb1"
                    name="Top left"
                    onClick={() => setState({...state, Success: !state.Success})}
                />

                <Button
                    enabled
                    className="btn m0 mr1 mb1"
                    name="Middle Earth"
                    onClick={() => setState({...state, Warning: !state.Warning})}
                />

                <Button
                    className="btn m0 mr1 mb1"
                    name="Top right"
                    onClick={() => setState({...state, Error: !state.Error})}
                />

                <Button
                    className="btn m0 mr1 mb1"
                    name="Bottom"
                    onClick={() => setState({...state, Timed: !state.Timed})}
                />
            </Section>

            <ToastContainer left>
                {state.Success && (
                    <Toast
                        key="toast-1"
                        id="toast-1"
                        title="Timed Sucess !!"
                        dismiss={1000}
                        onClose={() => setState({...state, Success: false})}
                    />
                )}
            </ToastContainer>
            <ToastContainer>
                {state.Warning && (
                    <Toast
                        key="toast-1"
                        id="toast-1"
                        title="Warning !!"
                        type="Warning"
                        onClose={() => setState({...state, Warning: false})}
                    />
                )}
            </ToastContainer>
            <ToastContainer right>
                {state.Error && (
                    <Toast
                        key="toast-1"
                        id="toast-1"
                        title="Error !!"
                        type="Error"
                        onClose={() => setState({...state, Error: false})}
                    />
                )}
            </ToastContainer>
            <ToastContainer bottom>
                {state.Timed && (
                    <Toast
                        key="toast-1"
                        id="toast-1"
                        title="An eternal Success !"
                        dismissible={false}
                        onClose={() => setState({...state, Timed: false})}
                    />
                )}
            </ToastContainer>
        </>
    );
};

const MapDispatchToProps = (dispatch: IDispatch) => ({
    renderToast: (containerId: string, title: string, options?: IToastProps) =>
        dispatch(addToast(containerId, title, options)),
});

const ToastsWithReduxStoreDisconnected: React.FunctionComponent<ReturnType<typeof MapDispatchToProps>> = ({
    renderToast,
}) => {
    const toastContent = () => (
        <ul>
            <li style={{marginBottom: '5px'}}>
                <a href="#">Some Link</a>
            </li>
            <li>Complex React Component</li>
        </ul>
    );

    return (
        <>
            <Section level={2} title="Toasts with a redux store" className="flex">
                <Button
                    enabled
                    className="btn m0 mr1 mb1"
                    name="Success"
                    onClick={() => renderToast('containerId', 'Success !')}
                />

                <Button
                    enabled
                    className="btn m0 mr1 mb1"
                    name="Warning   "
                    onClick={() => renderToast('containerId', 'Warning !', {type: 'Warning'})}
                />

                <Button
                    className="btn m0 mr1 mb1"
                    name="Error"
                    onClick={() => renderToast('containerId', 'Error !', {type: 'Error'})}
                />

                <Button
                    className="btn m0 mr1 mb1"
                    name="Timed Success"
                    onClick={() => renderToast('containerId', 'Timed Success !', {dismiss: 1000})}
                />

                <Button
                    className="btn m0 mr1 mb1"
                    name="custom JSX"
                    onClick={() => renderToast('containerId', 'Custom JSX !', {content: toastContent})}
                />
                <Button
                    className="btn m0 mr1 mb1"
                    name="custom String"
                    onClick={() => renderToast('containerId', 'Timed Success!', {content: 'I am a string !'})}
                />
            </Section>
            <ToastContainerConnected id="containerId" />
        </>
    );
};
const ToastsWithReduxStore = connect(null, MapDispatchToProps)(ToastsWithReduxStoreDisconnected);
