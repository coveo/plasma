import * as React from 'react';
import * as _ from 'underscore';

import {IModalExamplesProps} from '../../components/modal/examples/ModalCompositeConnectedExamples';
import {closeModal, IModalActionPayload, openModal} from '../../components/modal/ModalActions';
import {ModalComposite} from '../../components/modal/ModalComposite';
import {IReduxAction, ReduxConnect} from '../../utils/ReduxUtils';
import {IWithDirtyProps, withDirty} from '../withDirty/withDirty';

export interface IWithPreventNavigation {
    id: string;
    title?: string;
    content?: React.ReactNode;
    exit?: string;
    stay?: string;
}

export interface IWithPreventNavigationProps {
    validateShouldClose: () => void;
}

const defaultConfig: Partial<IWithPreventNavigation> = {
    title: 'Unsaved Changes',
    content: 'Are you sure you want to leave this page without saving? All unsaved changes will be lost.',
    exit: 'Exit without applying changes',
    stay: 'Cancel',
};

type AA<T = any, R = any> = React.ComponentClass<T, R> | React.FunctionComponent<T>;

export const withPreventNavigation = <T, R = any>(config: IWithPreventNavigation) => (Component: AA) => {
    const mapDispatchToProps = (dispatch: (action: IReduxAction<IModalActionPayload>) => void): IModalExamplesProps => ({
        openModal: (id: string) => dispatch(openModal(id)),
        closeModal: (id: string) => dispatch(closeModal(id)),
    });

    @ReduxConnect(undefined, mapDispatchToProps)
    class ComponentWithPreventNavigation extends React.PureComponent<IWithDirtyProps & {closeModal?: (id: string) => void}, {showPrevent: boolean;}> {
        private Component: AA;

        constructor(props: any) {
            super(props);
            this.state = {
                showPrevent: false,
            };

            const {title, content, exit, stay} = _.defaults(config, defaultConfig);
            this.Component = withDirty<T>({
                id: config.id,
                showDirty: (isDirty: boolean) => {
                    return isDirty && (
                        <ModalComposite
                            id={`prevent-navigation-${config.id}`}
                            isOpen={this.state.showPrevent}
                            title={title}
                            classes={['mod-prompt', 'mod-fade-in-scale']}
                            modalHeaderClasses={['mod-confirmation']}
                            modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                            modalBodyChildren={content}
                            onClose={() => this.setState({showPrevent: false})}
                            modalFooterChildren={(
                                <>
                                    <button className='btn mod-small mod-primary' onClick={() => {
                                        this.setState({showPrevent: false});
                                        this.props.closeModal(config.id);
                                    }}>{exit}</button>
                                    <button className='btn mod-small' onClick={() => this.setState({showPrevent: false})}>{stay}</button>
                                </>
                            )}
                        />
                    );
                },
            })(Component as any);
        }

        render() {
            return (
                <this.Component {...this.props} validateShouldClose={(isDirty: boolean) => {
                    if (isDirty) {
                        this.setState({showPrevent: true});
                        return false;
                    }
                    return true;
                }}>
                    {this.props.children}
                </this.Component>
            );
        }
    }

    return ComponentWithPreventNavigation;
};
