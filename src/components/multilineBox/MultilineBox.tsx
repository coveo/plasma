import * as React from 'react';
import {createStructuredSelector} from 'reselect';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {addStringList, addValueStringList, removeStringList, removeValueStringList} from '../../reusableState/customList/StringListActions';
import {deepClone} from '../../utils/CloneUtils';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {UUID} from '../../utils/UUID';
import {IMultiSelectOwnProps} from '../select/MultiSelectConnected';
import {MultilineBoxSelectors} from './MultilineBoxSelector';

export interface IMultilineSingleBoxProps<T> {
    id: string;
    isLast: boolean;
    props: T;
}

export interface IMultilineParentProps {
    parentId: string;
    removeBox: (id: string) => void;
    addNewBox: () => void;
}

export interface IMultilineBoxOwnProps<T = any> {
    id: string;
    data: T[];
    renderBody: (data: Array<IMultilineSingleBoxProps<T>>, parentProps: IMultilineParentProps) => React.ReactNode;
    defaultProp: T;
    renderWrapper?: (children: React.ReactNode, boxProps: IMultilineSingleBoxProps<T>, parentProps: IMultilineParentProps) => React.ReactNode;
}

export interface IMultilineBoxStateProps {
    multilineBoxIds: string[];
}

export interface IMultilineBoxDispatchProps {
    onMount: (defaultIds: string[]) => void;
    onUnmount: () => void;
    removeBox: (id: string) => void;
    addNewBox: () => void;
}

export interface IMultilineBoxProps<T = any> extends IMultilineBoxOwnProps<T>,
    Partial<IMultilineBoxStateProps>,
    Partial<IMultilineBoxDispatchProps> {}

const makeMapStateToProps = () => {
    const getStateProps = createStructuredSelector({
        multilineBoxIds: MultilineBoxSelectors.getIds,
    });

    return (state: IReactVaporState, ownProps: IMultiSelectOwnProps): IMultilineBoxStateProps =>
        getStateProps(state, {id: ownProps.id});
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IMultilineBoxOwnProps): IMultilineBoxDispatchProps => ({
    onMount: (defaultIDs: string[]) => dispatch(addStringList(ownProps.id, defaultIDs)),
    onUnmount: () => dispatch(removeStringList(ownProps.id)),
    removeBox: (id: string) => dispatch(removeValueStringList(ownProps.id, id)),
    addNewBox: () => dispatch(addValueStringList(ownProps.id, UUID.generate())),
});

@ReduxConnect(makeMapStateToProps, mapDispatchToProps)
export class MultilineBox<T> extends React.PureComponent<IMultilineBoxProps<T>> {

    private initialData: {[id: string]: T};

    constructor(props: IMultilineBoxProps<T>) {
        super(props);
        this.initializeData();
    }

    private initializeData() {
        this.initialData = {};
        _.map(this.props.data, (data: T) => {
            this.initialData[UUID.generate()] = data;
        });
    }

    private getLastBoxProps(): T {
        return deepClone(this.props.defaultProp || {});
    }

    private getData(): Array<IMultilineSingleBoxProps<T>> {
        return _.map(this.props.multilineBoxIds, (id: string, index: number) => {
            const props: T = this.initialData[id] || this.getLastBoxProps();
            return {
                id: id,
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

    componentDidMount() {
        const ids: string[] = _.keys(this.initialData);
        ids.push(...this.props.multilineBoxIds, UUID.generate());
        this.props.onMount(ids);
    }

    componentWillUnmount() {
        this.props.onUnmount();
    }

    render() {
        return (
            <>
                {this.props.renderBody(this.getData(), this.getParentProps())}
            </>
        );
    }
}
