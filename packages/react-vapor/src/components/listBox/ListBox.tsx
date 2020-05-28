import classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

import {mod} from '../../utils/DataStructuresUtils';
import {IItemBoxProps, ItemBox} from '../itemBox/ItemBox';
import {ItemBoxLoading} from '../loading/components/ItemBoxLoading';

export type IItemBoxPropsWithIndex = {index?: number} & IItemBoxProps;

export interface IListBoxOwnProps {
    noResultItem?: IItemBoxProps;
    classes?: string[];
    id?: string;
    multi?: boolean;
    items?: IItemBoxProps[];
    wrapItems?: (items: React.ReactNode) => React.ReactNode;
    footer?: React.ReactNode;
    isLoading?: boolean;
}

export interface IListBoxStateProps {
    selected?: string[];
    active?: number;
}

export interface IListBoxDispatchProps {
    onRender?: () => void;
    onDestroy?: () => void;
    onOptionClick?: (option: IItemBoxProps, index?: number) => void;
}

export interface IListBoxProps extends IListBoxOwnProps, IListBoxStateProps, IListBoxDispatchProps {}

export class ListBox extends React.Component<IListBoxProps, {}> {
    static defaultProps: Partial<IListBoxProps> = {
        noResultItem: {
            value: 'No Items',
        },
        wrapItems: _.identity,
    };

    componentDidMount() {
        this.props.onRender?.();
    }

    componentWillUnmount() {
        this.props.onDestroy?.();
    }

    private getClasses(): string {
        return classNames('list-box bg-pure-white relative', this.props.classes);
    }

    protected getItems(): React.ReactNode {
        const shouldShow = (item: IItemBoxProps) =>
            !item.hidden && (!this.props.multi || !_.contains(this.props.selected, item.value));
        const visibleLength = _.filter(this.props.items, (item: IItemBoxProps) => shouldShow(item) && !item.disabled)
            .length;

        let realIndex = 0;
        let activeSet = false;
        const items = _.chain(this.props.items)
            .filter(shouldShow)
            .map((item: IItemBoxProps) => {
                let active = false;
                const itemWithIndex: IItemBoxPropsWithIndex = {...item};
                if (!item.disabled) {
                    if (this.props.active === null) {
                        active = _.contains(this.props.selected, item.value);
                    } else {
                        active = mod(this.props.active, visibleLength) === realIndex;
                    }
                    activeSet = active || activeSet;

                    itemWithIndex.index = realIndex;
                    itemWithIndex.active = active;
                    realIndex++;
                }
                return itemWithIndex;
            })
            .map((itemWithIndex: IItemBoxPropsWithIndex) => {
                if (!itemWithIndex.disabled && activeSet === false) {
                    itemWithIndex.active = true;
                    activeSet = true;
                }
                return itemWithIndex;
            })
            .map((item: IItemBoxPropsWithIndex) => {
                return (
                    <ItemBox
                        key={item.value}
                        {...item}
                        onOptionClick={(option: IItemBoxProps) => this.onSelectItem(item, item.index)}
                        selected={_.contains(this.props.selected, item.value)}
                    />
                );
            })
            .value();

        const emptyItem = (
            <ItemBox
                {...this.props.noResultItem}
                classes={[classNames('multi-line', this.props.noResultItem.classes)]}
            />
        );

        return _.isEmpty(items) ? emptyItem : items;
    }

    private getLoadingItems(): React.ReactNode {
        return (
            <>
                <ItemBoxLoading />
                <ItemBoxLoading />
                <ItemBoxLoading />
                <ItemBoxLoading />
                <ItemBoxLoading />
                <ItemBoxLoading />
                <ItemBoxLoading />
            </>
        );
    }

    render() {
        const items = this.props.isLoading ? this.getLoadingItems() : this.getItems();
        return (
            <>
                <ul className={this.getClasses()} id={this.props.id}>
                    {this.props.wrapItems(items)}
                </ul>
                {this.props.footer}
            </>
        );
    }

    private onSelectItem(item: IItemBoxProps, index?: number) {
        if (!item.disabled) {
            this.props.onOptionClick?.(item, index);
            item.onOptionClick?.(item, index);
        }
    }
}
