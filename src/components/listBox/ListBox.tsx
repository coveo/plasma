import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';
import {mod} from '../../utils/DataStructuresUtils';
import {callIfDefined} from '../../utils/FalsyValuesUtils';
import {IItemBoxProps, ItemBox} from '../itemBox/ItemBox';

export interface IListBoxOwnProps {
    noResultItem?: IItemBoxProps;
    classes?: string[];
    id?: string;
    multi?: boolean;
    highlight?: string;
    items?: IItemBoxProps[];
    ulElementRefFunction?: (menu: HTMLElement) => void;
}

export interface IListBoxStateProps {
    selected?: string[];
    active?: number;
}

export interface IListBoxDispatchProps {
    onRender?: () => void;
    onDestroy?: () => void;
    onOptionClick?: (option: IItemBoxProps, index: number) => void;
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
        callIfDefined(this.props.onRender);
    }

    componentWillUnmount() {
        callIfDefined(this.props.onDestroy);
    }

    private getClasses(): string {
        return classNames('list-box bg-pure-white relative', this.props.classes);
    }

    protected getItems(): React.ReactNode {
        const shouldShow = (item: IItemBoxProps) => !item.hidden && (!this.props.multi || !_.contains(this.props.selected, item.value));
        const indexToSetActive = _.contains(this.props.selected, this.props.items[this.props.active] && this.props.items[this.props.active].value)
                                 ? 0
                                 : this.props.active;
        const items = _.chain(this.props.items)
            .filter(shouldShow)
            .map((item: IItemBoxProps, index: number) => {
                const active = mod(indexToSetActive, this.props.items.length) === index;
                return <ItemBox
                key={item.value}
                {...item}
                active={active}
                onOptionClick={(option: IItemBoxProps) => this.onSelectItem(item)}
                selected={_.contains(this.props.selected, item.value)}
                highlight={this.props.highlight}
            />;
            })
            .value();

        return items.length
            ? items
            : <ItemBox {...{...this.props.noResultItem, classes: ['multi-line']}} />;
    }

    render() {
        return (
            <ul
                className={this.getClasses()}
            >
                {this.getItems()}
            </ul>
        );
    }

    private onSelectItem(item: IItemBoxProps) {
        if (!item.disabled) {
            const index = _.chain(this.props.items)
                .pluck('value')
                .indexOf(item.value)
                .value();
            callIfDefined(this.props.onOptionClick, item, index);
            callIfDefined(item.onOptionClick, item);
        }
    }
}
