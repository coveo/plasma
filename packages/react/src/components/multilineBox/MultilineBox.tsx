import * as React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState';
import {
    addStringList,
    addValueStringList,
    removeStringList,
    removeValueStringList,
    updateValueStringList,
} from '../../reusableState/customList/StringListActions';
import {deepClone} from '../../utils/CloneUtils';
import {IDispatch} from '../../utils/ReduxUtils';
import {UUID} from '../../utils/UUID';
import {IMultiSelectOwnProps} from '../select/MultiSelectConnected';
import {MultilineBoxSelectors} from './MultilineBoxSelector';

export interface IMultilineSingleBoxProps<T = any> {
    /**
     * The unique identifier of the box
     */
    id: string;
    /**
     * Whether this box is the last one
     */
    isLast: boolean;
    /**
     * The props of this box
     */
    props: T;
}

export interface IMultilineParentProps {
    /**
     * The unique identifier of the MultilineBox
     */
    parentId: string;
    /**
     * A callback to remove a box
     *
     * @param id the id of the box to remove
     */
    removeBox: (id: string) => void;
    /**
     * A callback to add a new box
     */
    addNewBox: () => void;
}

export interface IMultilineBoxOwnProps<T = any> {
    /**
     * The unique identifier of the MultilineBox
     */
    id: string;
    /**
     * The array of data to render
     */
    data: T[];
    /**
     * Function that gets the updated data and render a component
     *
     * @param data the data with new elements if any
     * @param parentProps see IMultilineParentProps
     *
     * @default () => <div />
     */
    renderBody?: (data: Array<IMultilineSingleBoxProps<T>>, parentProps: IMultilineParentProps) => React.ReactNode;
    /**
     * An object representing the default values of a new box
     *
     * @default {}
     */
    defaultProps?: T;
    /**
     * Function to wrap the content of this component in another element. Should only be used by HOC
     *
     * @param children the content of the MultilineBox
     * @param boxProps the props of the MultilineBox data
     * @param parentProps see IMultilineParentProps
     */
    renderWrapper?: (
        children: React.ReactNode,
        boxProps: IMultilineSingleBoxProps<T>,
        parentProps: IMultilineParentProps
    ) => React.ReactNode;
    /**
     * Whether this component is disabled
     */
    disabled?: boolean;
}

export interface IMultilineBoxStateProps {
    multilineBoxIds: string[];
}

export interface IMultilineBoxDispatchProps {
    onMount: (defaultIds: string[]) => void;
    onUnmount: () => void;
    removeBox: (id: string) => void;
    addNewBox: () => void;
    updateBox: (defaultIds: string[]) => void;
}

export interface IMultilineBoxProps<T = any>
    extends IMultilineBoxOwnProps<T>,
        Partial<IMultilineBoxStateProps>,
        Partial<IMultilineBoxDispatchProps> {}

const makeMapStateToProps = () => {
    const getStateProps = createStructuredSelector({
        multilineBoxIds: MultilineBoxSelectors.getIds,
    });

    return (state: PlasmaState, ownProps: IMultiSelectOwnProps): IMultilineBoxStateProps =>
        getStateProps(state, {id: ownProps.id});
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IMultilineBoxOwnProps): IMultilineBoxDispatchProps => ({
    onMount: (defaultIDs: string[]) => dispatch(addStringList(ownProps.id, defaultIDs)),
    onUnmount: () => dispatch(removeStringList(ownProps.id)),
    removeBox: (id: string) => dispatch(removeValueStringList(ownProps.id, id)),
    addNewBox: () => dispatch(addValueStringList(ownProps.id, UUID.generate())),
    updateBox: (ids: string[]) => dispatch(updateValueStringList(ownProps.id, ids)),
});

class MultilineBoxDisconnected<T> extends React.PureComponent<IMultilineBoxProps<T>> {
    private initialData: {[id: string]: T};

    static defaultProps = {
        renderBody: () => <div />,
        defaultProps: {},
    };

    constructor(props: IMultilineBoxProps<T>, state: any) {
        super(props, state);

        this.initialData = this.getInitialDataMappedWithBoxIDs();
    }

    private getInitialDataMappedWithBoxIDs(): {[id: string]: T} {
        const initialData: {[id: string]: T} = {};
        _.each(this.props.data, (data: T) => {
            initialData[UUID.generate()] = data;
        });
        return initialData;
    }

    private getInitialBoxesWithAnExtraBox(): string[] {
        const ids: string[] = _.keys(this.initialData);
        ids.push(UUID.generate());
        return ids;
    }

    private getLastBoxProps(): T {
        return deepClone(this.props.defaultProps);
    }

    private getData(): Array<IMultilineSingleBoxProps<T>> {
        return _.map(this.props.multilineBoxIds, (id: string, index: number) => {
            const props: T = this.initialData[id] || this.getLastBoxProps();
            return {
                id,
                isLast: index === this.props.multilineBoxIds.length - 1,
                props,
            };
        });
    }

    private getParentProps(): IMultilineParentProps {
        return {
            removeBox: (id: string) => this.props.removeBox(id),
            addNewBox: () => this.props.addNewBox(),
            parentId: this.props.id,
        };
    }

    componentDidUpdate(prevProps: Readonly<IMultilineBoxProps<T>>) {
        if (!_.isEqual(prevProps.data, this.props.data)) {
            this.initialData = this.getInitialDataMappedWithBoxIDs();
            this.props.updateBox(this.getInitialBoxesWithAnExtraBox());
        }
    }

    componentDidMount() {
        this.props.onMount(this.getInitialBoxesWithAnExtraBox());
    }

    componentWillUnmount() {
        this.props.onUnmount();
    }

    render() {
        return this.props.renderBody(this.getData(), this.getParentProps());
    }
}

export const MultilineBox = <T extends any>(props: IMultilineBoxOwnProps<T>) => {
    const Connected = React.useMemo(
        () =>
            connect<IMultilineBoxStateProps, IMultilineBoxDispatchProps, IMultilineBoxOwnProps<T>>(
                makeMapStateToProps,
                mapDispatchToProps
            )(MultilineBoxDisconnected),
        []
    );
    return <Connected {...props} />;
};
