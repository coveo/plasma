import {ReactNode, ComponentClass, PureComponent} from 'react';
import * as _ from 'underscore';

import {closeModal, IModalActionPayload} from '../../components/modal/ModalActions.js';
import {IReduxAction, ReduxConnect} from '../../utils/ReduxUtils.js';
import {IWithDirtyProps, withDirty} from '../withDirty/withDirty.js';
import {PreventNavigationPrompt} from './PreventNavigationPrompt.js';

export interface IWithPreventNavigationConfig {
    id: string;
    title?: string;
    content?: ReactNode;
    exit?: string;
    stay?: string;
}

export interface IWithPreventNavigationInjectedProps extends IWithDirtyProps {
    validateShouldNavigate: (isDirty: boolean) => boolean;
}

export interface IWithPreventNavigationDispatchProps {
    closeModal: (id: string) => void;
    children?: ReactNode;
}

export interface IWithPreventNavigationState {
    showPrevent: boolean;
}

export const preventNavigationDefaultConfig: Partial<IWithPreventNavigationConfig> = {
    title: 'Unsaved Changes',
    content: 'Are you sure you want to leave this page without saving? All unsaved changes will be lost.',
    exit: 'Exit without applying changes',
    stay: 'Cancel',
};

/**
 * @deprecated Use Mantine instead
 */
export const modalWithPreventNavigation =
    <T, R = any>(config: IWithPreventNavigationConfig) =>
    (Component: ComponentClass<T, R>): ComponentClass<T & Partial<IWithPreventNavigationInjectedProps>, R> => {
        const mapDispatchToProps = (
            dispatch: (action: IReduxAction<IModalActionPayload>) => void
        ): IWithPreventNavigationDispatchProps => ({
            closeModal: (id: string) => dispatch(closeModal(id)),
        });

        @ReduxConnect(undefined, mapDispatchToProps)
        class ModalWithPreventNavigation extends PureComponent<
            IWithPreventNavigationDispatchProps,
            IWithPreventNavigationState
        > {
            private ComponentWithDirty: ComponentClass<
                IWithDirtyProps & T & Partial<IWithPreventNavigationInjectedProps>
            >;

            constructor(props: IWithPreventNavigationDispatchProps) {
                super(props);
                this.state = {
                    showPrevent: false,
                };

                const {title, content, exit, stay} = _.defaults(config, preventNavigationDefaultConfig);
                this.ComponentWithDirty = withDirty<T & Partial<IWithPreventNavigationInjectedProps>>({
                    id: config.id,
                    showDirty: (isDirty: boolean) =>
                        isDirty && (
                            <PreventNavigationPrompt
                                id={`prevent-navigation-${config.id}`}
                                isOpen={this.state.showPrevent}
                                title={title}
                                onStay={() => this.setState({showPrevent: false})}
                                onClose={() => {
                                    this.setState({showPrevent: false});
                                    this.props.closeModal(config.id);
                                }}
                                exit={exit}
                                stay={stay}
                                content={content}
                            />
                        ),
                })(Component as any);
            }

            render() {
                const newProps = {
                    ..._.omit(this.props, 'closeModal'),
                    validateShouldNavigate: (isDirty: boolean) => {
                        if (isDirty) {
                            this.setState({showPrevent: true});
                            return false;
                        }
                        return true;
                    },
                };
                return <this.ComponentWithDirty {...newProps}>{this.props.children}</this.ComponentWithDirty>;
            }
        }

        return ModalWithPreventNavigation as any;
    };
