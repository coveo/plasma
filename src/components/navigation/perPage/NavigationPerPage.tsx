import * as React from 'react';
import * as _ from 'underscore';
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
    onPerPageClick?: (perPageNb: number, oldPerPageNb: number, currentPage: number) => void;
}

export interface INavigationPerPageProps extends INavigationPerPageOwnProps, INavigationPerPageStateProps,
    INavigationPerPageDispatchProps {}

export const PER_PAGE_NUMBERS: number[] = [10, 20, 30];
export const PER_PAGE_LABEL: string = 'Results per page';

export class NavigationPerPage extends React.Component<INavigationPerPageProps, any> {
    static defaultProps: Partial<INavigationPerPageProps> = {
        initialPosition: 1,
    };
    private perPageNumbers: number[];

    private handleClick(newPerPage: number) {
        if (this.props.onPerPageClick && this.props.currentPerPage !== newPerPage) {
            this.props.onPerPageClick(newPerPage, this.props.currentPerPage, this.props.currentPage);
        }
    }

    componentWillMount() {
        this.perPageNumbers = this.props.perPageNumbers || PER_PAGE_NUMBERS;
        if (this.props.onRender) {
            this.props.onRender(this.perPageNumbers[this.props.initialPosition]);
        }
    }

    componentWillUnmount() {
        if (this.props.onDestroy) {
            this.props.onDestroy();
        }
    }

    render() {
        this.perPageNumbers = this.props.perPageNumbers || PER_PAGE_NUMBERS;

        const currentPerPage: number = this.props.currentPerPage || this.perPageNumbers[this.props.initialPosition];
        const topNumber: number = this.props.totalEntries;
        const label: string = this.props.label || PER_PAGE_LABEL;

        const perPageSelects: JSX.Element[] = _.map(this.perPageNumbers, (num: number, index: number): JSX.Element => {
            const shouldShowPerPageSelect: boolean =
                topNumber > (this.perPageNumbers[index - 1] || 0);

            if (shouldShowPerPageSelect) {
                const selectId: string = 'perpage-' + (this.props.id || '') + num;
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
                <div className='flat-select-prepend'>{label}:</div>
                <div className='flat-select clearfix'>
                    {perPageSelects}
                </div>
            </div>
        );
    }
}
