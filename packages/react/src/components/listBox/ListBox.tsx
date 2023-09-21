import classNames from 'clsx';
import {ReactNode, Component} from 'react';
import * as _ from 'underscore';

import {mod} from '../../utils/DataStructuresUtils';
import {IItemBoxProps, ItemBox} from '../itemBox/ItemBox';
import {ItemBoxLoading} from '../loading/components/ItemBoxLoading';

export type IItemBoxPropsWithIndex = {index?: number} & IItemBoxProps;

export interface IListBoxOwnProps {
    /**
     * The content shown in the list of items when there are no items to display.
     *
     * @default {value: 'No Items'}
     */
    noResultItem?: IItemBoxProps;
    /**
     * Additional CSS classes to set on the list element
     */
    classes?: string[];
    id?: string;
    multi?: boolean;
    /**
     * The list of items to display as potential choices
     */
    items?: IItemBoxProps[];
    /**
     * Useful if you need to wrap the list of items with another component. We use this when combining with the InfiniteScroll HOC
     *
     * @param items The list of items in the form of a React Component
     */
    wrapItems?: (items: ReactNode) => ReactNode;
    /**
     * Content that is displayed underneath the list of items inside the dropdown
     */
    footer?: ReactNode;
    /**
     * Whether the items are currenty loading (being fetched). If true, it will render visual loading placeholders in the ListBox
     */
    isLoading?: boolean;
    /**
     * If true, no highlight will be rendered on active items. An item is active when using keyboard navigation
     */
    noActive?: boolean;
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

/**
 * @deprecated Use Mantine Menu instead: https://mantine.dev/core/menu/
 */
export class ListBox extends Component<IListBoxProps> {
    static defaultProps: Partial<IListBoxProps> = {
        noResultItem: {
            value: 'No Items',
        },
        wrapItems: _.identity,
        noActive: false,
    };

    componentDidMount() {
        this.props.onRender?.();
    }

    componentWillUnmount() {
        this.props.onDestroy?.();
    }

    private getClasses(): string {
        return classNames('list-box relative', {'list-box-with-footer': this.props.footer}, this.props.classes);
    }

    protected getItems(): ReactNode {
        const shouldShow = (item: IItemBoxProps) =>
            !item.hidden && (!this.props.multi || !_.contains(this.props.selected, item.value));
        const visibleLength = _.filter(
            this.props.items,
            (item: IItemBoxProps) => shouldShow(item) && !item.disabled,
        ).length;

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
                    itemWithIndex.active = !this.props.noActive;
                    activeSet = true;
                }
                return itemWithIndex;
            })
            .map((item: IItemBoxPropsWithIndex) => (
                <ItemBox
                    key={item.value}
                    {...item}
                    onOptionClick={(option: IItemBoxProps) => this.onSelectItem(item, item.index)}
                    selected={_.contains(this.props.selected, item.value)}
                />
            ))
            .value();

        const emptyItem = (
            <ItemBox
                {...this.props.noResultItem}
                classes={[classNames('multi-line', this.props.noResultItem.classes)]}
            />
        );

        return _.isEmpty(items) ? emptyItem : items;
    }

    private getLoadingItems(): ReactNode {
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
                <ul className={this.getClasses()} id={`${this.props.id}-container`} role="listbox" tabIndex={0}>
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
