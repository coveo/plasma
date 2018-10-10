import * as React from 'react';
import * as _ from 'underscore';
import {IReactVaporExampleState} from '../../../../docs/Reducers';
import {IDispatch, ReduxConnect, ReduxUtils} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {Button} from '../../button/Button';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {ListBoxConnected} from '../ListBoxConnected';
import {addListBoxExample, removeListBoxExample, updateListBoxExample} from './ListBoxExampleActions';

interface IListBoxExamplesDispatchProps {
    updateOptions: () => void;
    addListBoxExample: () => void;
    removeListBoxExample: () => void;
}

interface IListBoxExamplesStateProps {
    items?: IItemBoxProps[];
}

interface IListBoxExamplesProps extends Partial<IListBoxExamplesDispatchProps>, Partial<IListBoxExamplesStateProps> {
    id: string;
    multi?: boolean;
}

const convertOptionsToItemsBox = (options: string[]): IItemBoxProps[] => _.map(options, (option: string) => ({value: option}));
const convertItemsBoxToOptions = (items: IItemBoxProps[]): string[] => _.pluck(items, 'value');

const mapStateToProps = (state: IReactVaporExampleState, ownProps: IListBoxExamplesProps): IListBoxExamplesStateProps => {
    const listBoxExample = state.listBoxExampleState[ownProps.id];
    if (listBoxExample) {
        return {
            items: convertOptionsToItemsBox(listBoxExample.options),
        };
    }

    return {};
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IListBoxExamplesProps): IListBoxExamplesDispatchProps => ({
    updateOptions: () => {
        dispatch(updateListBoxExample(
            ownProps.id,
            [...convertItemsBoxToOptions(ownProps.items), `${TestUtils.randomValue1To100()}_new_value`]),
        );
    },
    addListBoxExample: () => dispatch(addListBoxExample(ownProps.id, convertItemsBoxToOptions(ownProps.items))),
    removeListBoxExample: () => dispatch(removeListBoxExample(ownProps.id)),
});

@ReduxConnect(mapStateToProps, mapDispatchToProps, ReduxUtils.defaultMergeProps)
export class ListBoxExampleConnected extends React.Component<IListBoxExamplesProps> {

    componentWillMount() {
        this.props.addListBoxExample();
    }

    componentWillUnmount() {
        this.props.removeListBoxExample();
    }

    private handleOnClick() {
        this.props.updateOptions();
    }

    render() {
        return (
            <div>
                <ListBoxConnected id={this.props.id} items={this.props.items} multi={!!this.props.multi} />
                <Button key={this.props.id + 'button'} classes={['my2']} enabled={true} name='Update options with a reset on selected values' onClick={() => this.handleOnClick()} />
            </div>
        );
    }
}
