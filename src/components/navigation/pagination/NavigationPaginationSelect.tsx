import * as React from 'react';

export interface INavigationPaginationSelectProps extends React.ClassAttributes<NavigationPaginationSelect> {
    selected: boolean;
    pageNb: number;
    onPageClick: (pageNb: number) => void;
}

export class NavigationPaginationSelect extends React.Component<INavigationPaginationSelectProps, any> {

    render() {
        const linkClasses: string = 'flat-select-option' + (this.props.selected ? '' : ' selectable');

        return (
            <a className={linkClasses}
                data-page={this.props.pageNb}
                onClick={() => this.props.onPageClick(this.props.pageNb)}>
                {this.props.pageNb + 1}
            </a>
        );
    }
}
