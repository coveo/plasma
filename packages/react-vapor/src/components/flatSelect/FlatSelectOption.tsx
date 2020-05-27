import classNames from 'classnames';
import * as React from 'react';
import {Content, IContentProps} from '../content/Content';
import {ITooltipProps, Tooltip} from '../tooltip/Tooltip';

export interface IFlatSelectOptionProps {
    id: string;
    option: IContentProps;
    classes?: string[];
    prepend?: IContentProps;
    append?: IContentProps;
    tooltip?: ITooltipProps;
    selected?: boolean;
    onClick?: (option: IFlatSelectOptionProps) => void;
    disabled?: boolean;
}

export class FlatSelectOption extends React.Component<IFlatSelectOptionProps, any> {
    static defaultProps: Partial<IFlatSelectOptionProps> = {
        selected: false,
    };

    private onClick() {
        if (this.props.onClick) {
            this.props.onClick(this.props);
        }
    }

    render() {
        const classes: string = classNames(
            'flat-select-option',
            {
                selectable: !this.props.selected,
                disabled: this.props.disabled,
            },
            this.props.classes
        );

        return (
            <a className={classes} onClick={() => this.onClick()}>
                <Tooltip {...this.props.tooltip}>
                    {this.props.prepend ? <Content {...this.props.prepend} /> : null}
                    {<Content {...this.props.option} />}
                    {this.props.append ? <Content {...this.props.append} /> : null}
                </Tooltip>
            </a>
        );
    }
}
