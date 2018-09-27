import * as React from 'react';
import * as _ from 'underscore';

import {callIfDefined} from '../../../utils/FalsyValuesUtils';
import {NavigationPerPageSelect} from './NavigationPerPageSelect';

export interface INavigationPerPageOwnProps extends React.ClassAttributes<NavigationPerPage> {
    id?: string;
    totalEntries: number;
    label?: string;
    perPageNumbers?: number[];
    loadingIds?: string[];
    initialPosition?: number;
}

export interface INavigationPerPageStateProps {
    currentPerPage?: number;
    currentPage?: number;
}

export interface INavigationPerPageDispatchProps {
    onRender?: (perPageNb: number) => void;
    onDestroy?: () => void;
    onPerPageClick?: (newPerPage: number, currentPerPage?: number, currentPage?: number) => void;
}

export interface INavigationPerPageProps extends INavigationPerPageOwnProps, INavigationPerPageStateProps,
    INavigationPerPageDispatchProps {}

export const PER_PAGE_NUMBERS: number[] = [10, 20, 30];
export const PER_PAGE_LABEL: string = 'Results per page';

export class NavigationPerPage extends React.Component<INavigationPerPageProps> {
    static defaultProps: Partial<INavigationPerPageProps> = {
        perPageNumbers: PER_PAGE_NUMBERS,
        label: PER_PAGE_LABEL,
    };
    private initialPosition: number;

    private handleClick(newPerPage: number) {
        if (this.props.onPerPageClick && this.props.currentPerPage !== newPerPage) {
            this.props.onPerPageClick(newPerPage, this.props.currentPerPage, this.props.currentPage);
        }
    }

    componentWillMount() {
        this.initialPosition = !_.isUndefined(this.props.initialPosition) ? this.props.initialPosition : Math.ceil(this.props.perPageNumbers.length / 2) - 1;
        callIfDefined(this.props.onRender, this.props.perPageNumbers[this.initialPosition]);
    }

    componentWillUnmount() {
        callIfDefined(this.props.onDestroy);
    }

    render() {
        const currentPerPage: number = this.props.currentPerPage || this.props.perPageNumbers[this.initialPosition];
        const topNumber: number = this.props.totalEntries;

        const perPageSelects: JSX.Element[] = _.map(this.props.perPageNumbers, (num: number, index: number): JSX.Element => {
            const shouldShowPerPageSelect: boolean = topNumber > (this.props.perPageNumbers[index - 1] || 0);

            if (shouldShowPerPageSelect) {
                const selectId: string = `perpage-${this.props.id || ''}-${num}`;
                const isSelected: boolean = currentPerPage === num;
                return (
                    <NavigationPerPageSelect
                        onPerPageClick={(newPerPageNb: number) => this.handleClick(newPerPageNb)}
                        perPageNb={num}
                        key={selectId}
                        selected={isSelected}
                    />
                );
            }
        });

        return (
            <div className='items-per-page prepended-flat-select'>
                <div className='flat-select-prepend'>{this.props.label}:</div>
                <div className='flat-select clearfix'>
                    {perPageSelects}
                </div>
            </div>
        );
    }
}
