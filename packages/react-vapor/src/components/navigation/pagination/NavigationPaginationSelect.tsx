import * as classNames from 'classnames';
import * as React from 'react';

export interface INavigationPaginationSelectProps extends React.ClassAttributes<NavigationPaginationSelect> {
    disabled?: boolean;
    selected: boolean;
    pageNb: number;
    onPageClick: (pageNb: number) => void;
}

export class NavigationPaginationSelect extends React.Component<INavigationPaginationSelectProps, any> {
    render() {
        const linkClasses: string = classNames('flat-select-option', {
            selectable: !this.props.selected,
            disabled: this.props.disabled,
        });

        return (
            <a
                className={linkClasses}
                data-page={this.props.pageNb}
                onClick={() => this.props.onPageClick(this.props.pageNb)}
            >
                {this.props.pageNb + 1}
            </a>
        );
    }
}
