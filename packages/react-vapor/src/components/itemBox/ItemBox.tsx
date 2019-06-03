import * as classNames from 'classnames';
import * as React from 'react';

import {Content, IContentProps} from '../content/Content';
import {PartialStringMatch} from '../partial-string-match/PartialStringMatch';
import {ITooltipProps, Tooltip} from '../tooltip/Tooltip';

export interface IItemBoxProps {
    value: string;
    displayValue?: string;
    highlight?: string;
    selected?: boolean;
    active?: boolean;
    hidden?: boolean;
    disabled?: boolean;
    divider?: boolean;
    tooltip?: ITooltipProps;
    classes?: string[];
    prepend?: IContentProps;
    append?: IContentProps;
    onOptionClick?: (option?: IItemBoxProps) => void;
    selectedDisplayValue?: string;
}

export class ItemBox extends React.Component<IItemBoxProps> {

    static defaultProps: Partial<IItemBoxProps> = {
        tooltip: {
            title: '',
        },
        highlight: '',
    };

    private listItem: HTMLLIElement;

    componentDidUpdate(prevProps: IItemBoxProps) {
        if (!prevProps.active && this.props.active) {
            // First parent is the span of the tooltip, second is the list
            const container = this.listItem.offsetParent as HTMLElement;
            if (container) {
                this.scrollIfNeeded(this.listItem, container);
            }
        }
    }

    private scrollIfNeeded(element: HTMLElement, container: HTMLElement) {
        if (element.offsetTop < container.scrollTop) {
            container.scrollTop = element.offsetTop;
        } else {
            const offsetBottom = element.offsetTop + element.offsetHeight;
            const scrollBottom = container.scrollTop + container.offsetHeight;
            if (offsetBottom > scrollBottom) {
                container.scrollTop = offsetBottom - container.offsetHeight;
            }
        }
    }

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
                    ref={(li: HTMLLIElement) => this.listItem = li}
                    className={this.getClasses()}
                    onClick={() => this.handleOnOptionClick()}
                    data-value={this.props.value}>
                    {this.props.prepend ? <Content {...this.props.prepend} /> : null}
                    <PartialStringMatch partialMatch={this.props.highlight} caseInsensitive>
                        {this.props.displayValue || this.props.value}
                    </PartialStringMatch>
                    {this.props.append ? <Content {...this.props.append} /> : null}
                </li>
            </Tooltip>
        );
    }
}
