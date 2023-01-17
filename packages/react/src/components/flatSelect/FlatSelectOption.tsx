import classNames from 'classnames';
import {Component} from 'react';
import {Content, IContentProps} from '../content/Content.js';
import {ITooltipProps, Tooltip} from '../tooltip/Tooltip.js';

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

export class FlatSelectOption extends Component<IFlatSelectOptionProps, any> {
    static defaultProps: Partial<IFlatSelectOptionProps> = {
        selected: false,
        disabled: false,
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
                    <span className="flex mod-append-prepend">
                        {this.props.prepend ? <Content {...this.props.prepend} /> : null}
                        {<Content {...this.props.option} />}
                        {this.props.append ? <Content {...this.props.append} /> : null}
                    </span>
                </Tooltip>
            </a>
        );
    }
}
