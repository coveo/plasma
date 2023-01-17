import classNames from 'clsx';
import {ReactNode, Component} from 'react';

import {Content, IContentProps} from '../content/Content';
import {PartialStringMatch} from '../partial-string-match/PartialStringMatch';
import {ITooltipProps, Tooltip} from '../tooltip/Tooltip';

export interface IItemBoxProps {
    value: string;
    displayValue?: ReactNode;
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
    onOptionClick?: (option?: IItemBoxProps, index?: number) => void;
    selectedDisplayValue?: string;
    selectedTooltip?: ITooltipProps;
}

/**
 * @deprecated Use Mantine Menu instead: https://mantine.dev/core/menu/
 */
export class ItemBox extends Component<IItemBoxProps> {
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
        return classNames(
            'body-m-book flex flex-center item-box',
            {
                selected: this.props.selected,
                active: this.props.active,
                disabled: this.props.disabled,
                hidden: this.props.hidden,
                divider: this.props.divider,
            },
            this.props.classes
        );
    }

    private handleOnOptionClick = () => {
        if (this.props.onOptionClick) {
            this.props.onOptionClick(this.props);
        }
    };

    render() {
        return (
            <Tooltip noSpanWrapper {...this.props.tooltip}>
                <li
                    ref={(li: HTMLLIElement) => (this.listItem = li)}
                    className={this.getClasses()}
                    onClick={() => this.handleOnOptionClick()}
                    data-value={this.props.value}
                    aria-hidden={this.props.hidden}
                    role="option"
                    onMouseDown={(event) => event.preventDefault()}
                >
                    <span className="truncate full-content-x">
                        {this.props.prepend ? <Content {...this.props.prepend} /> : null}
                        <PartialStringMatch partialMatch={this.props.highlight} caseInsensitive>
                            {this.props.displayValue || (!this.props.divider ? this.props.value : '')}
                        </PartialStringMatch>
                        {this.props.append ? <Content {...this.props.append} /> : null}
                    </span>
                </li>
            </Tooltip>
        );
    }
}
