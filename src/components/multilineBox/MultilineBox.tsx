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

export interface IMultilineBoxState<T> {
    initialData: {[id: string]: T};
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
export class MultilineBox<T> extends React.PureComponent<IMultilineBoxProps<T>, IMultilineBoxState<T>> {

    private getInitialDataMappedWithBoxIDs(): {[id: string]: T} {
        const initialData: {[id: string]: T} = {};
        _.each(this.props.data, (data: T) => {
            initialData[UUID.generate()] = data;
        });
        return initialData;
    }

    private getInitialBoxesWithAnExtraBox(initialData: {[id: string]: T}) {
        const ids: string[] = _.keys(initialData);
        ids.push(...this.props.multilineBoxIds, UUID.generate());
        return ids;
    }

    private getLastBoxProps(): T {
        return deepClone(this.props.defaultProp);
    }

    private getData(): Array<IMultilineSingleBoxProps<T>> {
        return _.map(this.props.multilineBoxIds, (id: string, index: number) => {
            const props: T = this.state.initialData[id] || this.getLastBoxProps();
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

    componentDidUpdate(prevProps: Readonly<IMultilineBoxProps<T>>, prevState: Readonly<IMultilineBoxState<T>>) {
        if (prevState && JSON.stringify(this.state.initialData) !== JSON.stringify(prevState.initialData)) {
            this.setState({initialData: this.getInitialDataMappedWithBoxIDs()});
        }
    }

    componentDidMount() {
        const initialData = this.getInitialDataMappedWithBoxIDs();
        this.setState({initialData});
        this.props.onMount(this.getInitialBoxesWithAnExtraBox(initialData));
    }

    componentWillUnmount() {
        this.props.onUnmount();
    }

    render() {
        return this.props.renderBody(this.getData(), this.getParentProps());
    }
}
