import * as React from 'react';
import * as _ from 'underscore';
import {StickyFooter} from '../../components/stickyFooter/StickyFooter';
import * as styles from '../../components/stickyFooter/StickyFooter.scss';
import {IReactVaporState} from '../../ReactVapor';
import {callIfDefined} from '../../utils/FalsyValuesUtils';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {toggleDirtyComponent} from './withEditingActions';

export interface IWithEditing {
    id: string;
    isDirty?: boolean;
    footerChildren?: React.ReactNode;
}

export interface IWithEditStateProps {
    isDirty: boolean;
}

export interface IWithEditDispatchProps {
    toggleDirtyComponent: (isDirty: boolean) => void;
}

export const withEditing = (config: IWithEditing) => (Component: React.ComponentClass<any, any>): React.ComponentClass<any, any> => {
    const mapStateToProps = (state: IReactVaporState): IWithEditStateProps => ({
        isDirty: !!_.contains(state.dirtyComponents, config.id),
    });

    const mapDispatchToProps = (dispatch: IDispatch): IWithEditDispatchProps => ({
        toggleDirtyComponent: (isDirty: boolean) => dispatch(toggleDirtyComponent(config.id, isDirty)),
    });

    @ReduxConnect(mapStateToProps, mapDispatchToProps)
    class ComponentWithEditing extends React.Component<any, any> {
        componentWillUnmount() {
            callIfDefined(this.props.toggleDirtyComponent, false);
        }

        render() {
            return (
                <div className={styles.stickyFooterPadding}>
                    <Component {..._.omit(this.props, 'isDirty', 'footerChildren')}>
                        {this.props.children}
                    </Component>
                    {config.footerChildren && (
                        <StickyFooter classes={{[styles.stickyFooterOpened]: this.props.isDirty}}>
                            {config.footerChildren}
                        </StickyFooter>
                    )}
                </div>
            );
        }
    }

    return ComponentWithEditing;
};
