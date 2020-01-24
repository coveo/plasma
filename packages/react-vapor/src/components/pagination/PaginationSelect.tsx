import * as classNames from 'classnames';
import * as React from 'react';

export interface IPaginationSelectProps extends React.ClassAttributes<PaginationSelect> {
    disabled?: boolean;
    selected: boolean;
    pageNb: number;
    onPageClick: (pageNb: number) => void;
}

export class PaginationSelect extends React.Component<IPaginationSelectProps, any> {
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
