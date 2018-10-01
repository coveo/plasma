import * as classNames from 'classnames';
import * as React from 'react';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {callIfDefined} from '../../utils/FalsyValuesUtils';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {Button} from '../button/Button';
import {FilterBoxConnected} from '../filterBox/FilterBoxConnected';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {selectListBoxOption} from '../listBox/ListBoxActions';
import {Svg} from '../svg/Svg';
import {ISelectProps} from './SelectConnected';

export interface ISelectWithFilterOwnProps {
    matchFilter?: (filterValue: string, item: IItemBoxProps) => boolean;
    customValues?: boolean;
}
const SelectWithFilterPropsToOmit = keys<ISelectWithFilterOwnProps>();

export interface ISelectWithFilterDispatchProps {
    onClickAddCustomValue: () => void;
}

export interface ISelectWithFilterStateProps extends Partial<ISelectProps> {
    filterValue: string;
}

export interface ISelectWithFilterProps extends ISelectWithFilterOwnProps,
    ISelectProps,
    Partial<ISelectWithFilterDispatchProps> {}

export const selectWithFilter = (Component: (React.ComponentClass<ISelectWithFilterProps> | React.StatelessComponent<ISelectWithFilterProps>)): React.ComponentClass<ISelectWithFilterProps> => {
    const defaultMatchFilter = (filterValue: string, item: IItemBoxProps) => {
        if (filterValue === '') {
            return true;
        }

        const regex = new RegExp(filterValue, 'gi');
        return regex.test(item.value) || regex.test(item.displayValue);
    };

    const mapStateToProps = (state: IReactVaporState, ownProps: ISelectWithFilterProps): ISelectWithFilterStateProps => {
        const filter = _.findWhere(state.filters, {id: ownProps.id});
        const filterValue = filter && filter.filterText || '';

        const items = _.map(ownProps.items, (item: IItemBoxProps) => {
            const visible = _.isUndefined(ownProps.matchFilter)
                ? defaultMatchFilter(filterValue, item)
                : ownProps.matchFilter(filterValue, item);

            return {...item, hidden: !visible || item.hidden};
        });

        return {
            items,
            filterValue,
        };
    };

    const mapDispatchToProps = (dispatch: IDispatch, ownProps: ISelectWithFilterProps): ISelectWithFilterDispatchProps => ({
        onClickAddCustomValue: (filterValue: string) => {
            dispatch(selectListBoxOption(ownProps.id, true, filterValue));
        },
    });

    @ReduxConnect(mapStateToProps, mapDispatchToProps)
    class WrappedComponent extends React.Component<ISelectWithFilterProps> {

        private handleOnClick() {
            callIfDefined(this.props.onClickAddCustomValue);
        }

        render() {
            const buttonAddCustomValues: React.ReactNode = (
                <Button classes={['p1', 'ml1']} onClick={() => this.handleOnClick()}>
                    <Svg svgName={'add'} className='icon mod-lg mod-align-with-text' />
                </Button>
            );

            const filterBoxContainerClassNames: string = classNames({
                'mb2': !!this.props.children,
            });

            const filterBoxClassNames: string = classNames({
                'flex flex-center': this.props.customValues,
            });

            return (
                <Component {..._.omit(this.props, SelectWithFilterPropsToOmit)}>
                    <FilterBoxConnected
                        id={this.props.id}
                        containerClasses={[filterBoxContainerClassNames]}
                        onKeyDown={(this.props as any).onKeyDown}
                        onKeyUp={(this.props as any).onKeyUp}
                        className={filterBoxClassNames}
                        isAutoFocus
                    >
                        {this.props.customValues ? buttonAddCustomValues : null}
                    </FilterBoxConnected>
                </Component>
            );
        }
    }

    return WrappedComponent;
};
