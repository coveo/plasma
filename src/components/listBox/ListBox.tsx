import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';
import {mod} from '../../utils/DataStructuresUtils';
import {callIfDefined} from '../../utils/FalsyValuesUtils';
import {IItemBoxProps, ItemBox} from '../itemBox/ItemBox';

export interface IListBoxCommonProps {
    items: IItemBoxProps[];
}

export interface IListBoxOwnProps extends IListBoxCommonProps {
    noResultItem?: IItemBoxProps;
    classes?: string[];
    id?: string;
    multi?: boolean;
    highlight?: string;
}

export interface IListBoxStateProps extends IListBoxCommonProps {
    selected?: string[];
    active?: number;
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
        return classNames('list-box bg-pure-white', this.props.classes);
    }

    protected getItems(): React.ReactNode {
        const shouldShow = (item: IItemBoxProps) => !item.hidden && (!this.props.multi || !_.contains(this.props.selected, item.value));
        const visibleLength = _.filter(this.props.items, (item: IItemBoxProps) => shouldShow(item) && !item.disabled).length;

        let index = 0;
        const items = _.chain(this.props.items)
            .filter(shouldShow)
            .map((item: IItemBoxProps) => {
                let active = false;
                if (!item.disabled) {
                    active = mod(this.props.active, visibleLength) === index;
                    index++;
                }
                return {...item, active};
            })
            .map((item: IItemBoxProps) => <ItemBox
                key={item.value}
                {...item}
                onOptionClick={(option: IItemBoxProps) => this.onSelectItem(item)}
                selected={_.contains(this.props.selected, item.value)}
                highlight={this.props.highlight}
            />)
            .value();

        return items.length
            ? items
            : <ItemBox {...{...this.props.noResultItem, classes: ['multi-line']}} />;
    }

    render() {
        return (
            <ul className={this.getClasses()}>
                {this.getItems()}
            </ul>
        );
    }

    private onSelectItem(item: IItemBoxProps) {
        if (!item.disabled) {
            callIfDefined(this.props.onOptionClick, item);
            callIfDefined(item.onOptionClick, item);
        }
    }
}
