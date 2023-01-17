import {CrossSize16Px} from '@coveord/plasma-react-icons';
import classNames from 'classnames';
import {Children, PureComponent, ReactNode} from 'react';

import {TooltipPlacement} from '../../../utils/TooltipUtils.js';
import {ITooltipProps, Tooltip} from '../../tooltip/Tooltip.js';

export interface ISelectedOptionProps {
    value: string;
    label: ReactNode;
    selectedTooltip: ITooltipProps;
    onRemoveClick?: (value: string) => void;
    readOnly?: boolean;
    prepend?: ReactNode;
    children?: ReactNode;
}

export class SelectedOption extends PureComponent<ISelectedOptionProps> {
    handleOnRemove = () => {
        this.props.onRemoveClick?.(this.props.value);
    };

    render() {
        const tooltipContent = Children.count(this.props.children) > 0 ? this.props.children : this.props.label;
        const tooltipLabel = typeof this.props.label === 'string' ? this.props.label : '';
        const tooltipCustomLabel = this.props.selectedTooltip?.title;
        const tooltipPosition = this.props.selectedTooltip?.placement;
        return (
            <div className="selected-option flex flex-center mod-border" key={this.props.value} role="listitem">
                {this.props.prepend}
                <Tooltip
                    delayShow={300}
                    {...this.props.selectedTooltip}
                    title={tooltipCustomLabel ?? tooltipLabel}
                    placement={tooltipPosition ?? TooltipPlacement.Top}
                    className={classNames('selected-option-value px2 py1', {readOnly: this.props.readOnly})}
                >
                    {tooltipContent}
                </Tooltip>
                {!this.props.readOnly && (
                    <button className="remove-option p1 mod-border-left cursor-pointer" onClick={this.handleOnRemove}>
                        <CrossSize16Px height={16} />
                    </button>
                )}
            </div>
        );
    }
}
