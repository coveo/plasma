import * as React from 'react';

import {TooltipPlacement} from '../../../utils/TooltipUtils';
import {Svg} from '../../svg/Svg';
import {Tooltip} from '../../tooltip/Tooltip';

export interface ISelectedOptionProps {
    value: string;
    label: React.ReactNode;
    onRemoveClick?: (value: string) => void;
}

export class SelectedOption extends React.PureComponent<ISelectedOptionProps> {
    handleOnRemove = () => {
        this.props.onRemoveClick?.(this.props.value);
    };

    render() {
        const tooltipContent = React.Children.count(this.props.children) > 0 ? this.props.children : this.props.label;
        const tooltipLabel = typeof this.props.label === 'string' ? this.props.label : '';

        return (
            <div className="selected-option" key={this.props.value}>
                <Tooltip
                    title={tooltipLabel}
                    placement={TooltipPlacement.Top}
                    className="selected-option-value"
                    delayShow={300}
                >
                    {tooltipContent}
                </Tooltip>

                <div className="remove-option" onClick={this.handleOnRemove}>
                    <Svg svgName="clear" svgClass="icon fill-medium-blue mod-small" />
                </div>
            </div>
        );
    }
}
