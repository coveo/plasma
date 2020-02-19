import * as React from 'react';
import {
    Button,
    convertItemsBoxToStringList,
    convertStringListToItemsBox,
    IDispatch,
    IItemBoxProps,
    ListBoxConnected,
    ReduxConnect,
    ReduxUtils,
} from 'react-vapor';

import {IReactVaporExampleState} from '../../Reducers';
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

const randomValue1To100 = () => {
    return Math.floor(Math.random() * 100 + 1);
};

const mapStateToProps = (
    state: IReactVaporExampleState,
    ownProps: IListBoxExamplesProps
): IListBoxExamplesStateProps => {
    const listBoxExample = state.listBoxExampleState[ownProps.id];
    if (listBoxExample) {
        return {
            items: convertStringListToItemsBox(listBoxExample.options),
        };
    }

    return {};
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IListBoxExamplesProps): IListBoxExamplesDispatchProps => ({
    updateOptions: () => {
        dispatch(
            updateListBoxExample(ownProps.id, [
                ...convertItemsBoxToStringList(ownProps.items),
                `${randomValue1To100()}_new_value`,
            ])
        );
    },
    addListBoxExample: () => dispatch(addListBoxExample(ownProps.id, convertItemsBoxToStringList(ownProps.items))),
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
                <Button
                    key={this.props.id + 'button'}
                    classes={['my2']}
                    enabled={true}
                    name="Update options with a reset on selected values"
                    onClick={() => this.handleOnClick()}
                />
            </div>
        );
    }
}
