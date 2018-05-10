import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';
import {IItemBoxProps, ItemBox} from '../itemBox/ItemBox';

export interface IListBoxOwnProps {
    items: IItemBoxProps[];
    noResultItem?: IItemBoxProps;
    classes?: string[];
    id?: string;
    multi?: boolean;
    highlight?: string;
}

export interface IListBoxStateProps {
    selected?: string[];
}

export interface IListBoxDispatchProps {
    onRender?: () => void;
    onDestroy?: () => void;
    onOptionClick?: (option: IItemBoxProps) => void;
}

export interface IListBoxProps extends IListBoxOwnProps, IListBoxStateProps, IListBoxDispatchProps {}

export class ListBox extends React.Component<IListBoxProps, {}> {

    static defaultProps: Partial<IListBoxProps> = {
        noResultItem: {
            value: 'No Items',
        },
        highlight: '',
    };

    componentWillMount() {
        if (this.props.onRender) {
            this.props.onRender();
        }
    }

    componentWillUnmount() {
        if (this.props.onDestroy) {
            this.props.onDestroy();
        }
    }

    private getClasses(): string {
        return classNames('list-box', this.props.classes);
    }

    protected getItems(): JSX.Element[] | JSX.Element {
        const items = _.chain(this.props.items)
            .filter((item: IItemBoxProps) => !item.hidden)
            .map((item: IItemBoxProps) => <ItemBox
                key={item.value}
                {...item}
                onOptionClick={(option: IItemBoxProps) => this.onSelectItem(option)}
                selected={_.contains(this.props.selected, item.value)}
                highlight={this.props.highlight}
            />)
            .value();

        return items.length
            ? items
            : <ItemBox {..._.extend(this.props.noResultItem, {classes: ['multi-line']})} />;
    }

    render() {
        return (
            <ul className={this.getClasses()}>
                {this.getItems()}
            </ul>
        );
    }

    private onSelectItem(option: IItemBoxProps) {
        if (this.props.onOptionClick && !option.disabled) {
            this.props.onOptionClick(option);
        }
    }
}
