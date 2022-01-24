import * as React from 'react';
import {connect} from 'react-redux';
import {
    addToast,
    Button,
    IDispatch,
    IToastProps,
    Label,
    Section,
    Toast,
    ToastContainer,
    ToastContainerConnected,
    ToastType,
} from '@coveord/plasma-react';

import VaporComponent from '../../building-blocs/VaporComponent';

// start-print

export const ToastExamples = () => (
    <VaporComponent id="Toast" title="Toast" withSource>
        <Section>
            <ToastsWithLocalState />
            <ToastsWithReduxStore />
        </Section>
    </VaporComponent>
);

const ToastsWithLocalState: React.FunctionComponent = () => {
    const [state, setState] = React.useState({
        Success: false,
        Warning: false,
        Error: false,
        Info: false,
        Timed: false,
    });

    const toastDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

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

                <Button
                    enabled
                    className="btn m0 mr1 mb1"
                    name="Left again"
                    onClick={() => setState({...state, Info: !state.Info})}
                />
            </Section>

            <ToastContainer left>
                {state.Success && (
                    <Toast
                        key="toast-1"
                        id="toast-1"
                        title="Timed Sucess !!"
                        content={toastDescription}
                        dismiss={2000}
                        onClose={() => setState({...state, Success: false})}
                    />
                )}
            </ToastContainer>
            <ToastContainer left>
                {state.Info && (
                    <Toast
                        key="toast-1"
                        id="toast-1"
                        title="Left Info !!"
                        content={toastDescription}
                        type={ToastType.Info}
                        dismiss={2000}
                        onClose={() => setState({...state, Info: false})}
                    />
                )}
            </ToastContainer>
            <ToastContainer>
                {state.Warning && (
                    <Toast
                        key="toast-1"
                        id="toast-1"
                        title="Warning !!"
                        content={toastDescription}
                        type={ToastType.Warning}
                        dismiss={2000}
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
                        content={toastDescription}
                        type={ToastType.Error}
                        dismiss={2000}
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
                        content={toastDescription}
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

    const toastDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet accumsan ante.';

    return (
        <>
            <Section level={2} title="Toasts with a redux store" className="flex">
                <Button
                    enabled
                    className="btn m0 mr1 mb1"
                    name="Information"
                    onClick={() =>
                        renderToast('containerId', 'Information !', {type: ToastType.Info, content: toastDescription})
                    }
                />

                <Button
                    enabled
                    className="btn m0 mr1 mb1"
                    name="Success"
                    onClick={() => renderToast('containerId', 'Success !', {content: toastDescription})}
                />

                <Button
                    enabled
                    className="btn m0 mr1 mb1"
                    name="Warning"
                    onClick={() =>
                        renderToast('containerId', 'Warning !', {type: ToastType.Warning, content: toastDescription})
                    }
                />

                <Button
                    className="btn m0 mr1 mb1"
                    name="Error"
                    onClick={() =>
                        renderToast('containerId', 'Error !', {type: ToastType.Error, content: toastDescription})
                    }
                />

                <Button
                    className="btn m0 mr1 mb1"
                    name="Timed Success"
                    onClick={() =>
                        renderToast('containerId', 'Timed Success !', {dismiss: 2000, content: toastDescription})
                    }
                />

                <Button
                    className="btn m0 mr1 mb1"
                    name="custom JSX"
                    onClick={() => renderToast('containerId', 'Custom JSX !', {content: toastContent})}
                />

                <Button
                    className="btn m0 mr1 mb1"
                    name="custom String"
                    onClick={() => renderToast('containerId', 'Custom string!', {content: 'I am a string !'})}
                />
            </Section>

            <Section level={2} title="Toasts with big descriptions" className="flex">
                <Label className="flex">Sometimes we only want toasts with a description</Label>

                <Button
                    enabled
                    className="btn m0 mr1 mb1"
                    name="Description"
                    onClick={() => renderToast('containerId', '', {type: ToastType.Info, content: toastDescription})}
                />

                <Button
                    enabled
                    className="btn m0 mr1 mb1"
                    name="Longer description"
                    onClick={() =>
                        renderToast('containerId', '', {
                            type: ToastType.Info,
                            content: `${toastDescription} ${toastDescription}`,
                        })
                    }
                />
            </Section>

            <Section level={2} title="Toasts with only title" className="flex">
                <Label className="flex">Sometimes we want toast with only a title that can be closed</Label>

                <Button
                    enabled
                    className="btn m0 mr1 mb1"
                    name="Description"
                    onClick={() => renderToast('containerId', 'Small title', {})}
                />

                <Button
                    enabled
                    className="btn m0 mr1 mb1"
                    name="Longer description"
                    onClick={() =>
                        renderToast(
                            'containerId',
                            'Very long title that proves that there is enough padding from the title close part of the toast',
                            {}
                        )
                    }
                />
            </Section>

            <Section level={2} title="Small toasts" className="flex">
                <Button
                    enabled
                    className="btn m0 mr1 mb1"
                    name="Information"
                    onClick={() =>
                        renderToast('containerId', "I'm so small !", {
                            type: ToastType.Info,

                            isSmall: true,
                            dismiss: 2000,
                        })
                    }
                />

                <Button
                    enabled
                    className="btn m0 mr1 mb1"
                    name="Success"
                    onClick={() =>
                        renderToast('containerId', 'Success !', {
                            isSmall: true,
                            dismiss: 2000,
                        })
                    }
                />

                <Button
                    enabled
                    className="btn m0 mr1 mb1"
                    name="Warning"
                    onClick={() =>
                        renderToast('containerId', 'Warning !', {type: ToastType.Warning, dismiss: 2000, isSmall: true})
                    }
                />

                <Button
                    className="btn m0 mr1 mb1"
                    name="Error"
                    onClick={() =>
                        renderToast('containerId', 'Error !', {type: ToastType.Error, dismiss: 2000, isSmall: true})
                    }
                />

                <Button
                    className="btn m0 mr1 mb1"
                    name="Plot twist"
                    onClick={() =>
                        renderToast('containerId', "Small toast doesn't render content or children, Only title!", {
                            type: ToastType.Error,

                            content: toastContent,
                            isSmall: true,
                            dismiss: 3000,
                        })
                    }
                />
            </Section>
            <ToastContainerConnected id="containerId" />
        </>
    );
};
const ToastsWithReduxStore = connect(null, MapDispatchToProps)(ToastsWithReduxStoreDisconnected);
