import * as classNames from 'classnames';
import * as React from 'react';
import {Content, IContentProps} from '../content/Content';
import {ITooltipProps, Tooltip} from '../tooltip/Tooltip';

export interface IItemBoxProps {
    value: string;
    displayValue?: string;
    selected?: boolean;
    active?: boolean;
    hidden?: boolean;
    disabled?: boolean;
    divider?: boolean;
    tooltip?: ITooltipProps;
    classes?: string[];
    prepend?: IContentProps;
    append?: IContentProps;
    onOptionClick?: (option: IItemBoxProps) => void;
}

export class ItemBox extends React.Component<IItemBoxProps, any> {

    static defaultProps: Partial<IItemBoxProps> = {
        tooltip: {
            title: '',
        },
    };

    private getClasses(): string {
        return classNames('item-box',
            {
                'selected': this.props.selected,
                'active': this.props.active,
                'disabled': this.props.disabled,
                'hidden': this.props.hidden,
                'divider': this.props.divider,
            },
            this.props.classes);
    }

    private handleOnOptionClick = () => {
        if (this.props.onOptionClick) {
            this.props.onOptionClick(this.props);
        }
    }

    render() {
        return (
            <Tooltip {...this.props.tooltip}>
                <li
                    className={this.getClasses()}
                    onClick={() => this.handleOnOptionClick()}
                    data-value={this.props.value}>
                    {this.props.prepend ? <Content {...this.props.prepend} /> : null}
                    {this.props.displayValue || this.props.value}
                    {this.props.append ? <Content {...this.props.append} /> : null}
                </li>
            </Tooltip>
        );
    }
}
