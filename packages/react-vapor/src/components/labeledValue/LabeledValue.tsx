import classNames from 'classnames';
import * as React from 'react';
import {TooltipPlacement} from '../../utils/TooltipUtils';
import {Svg} from '../svg/Svg';
import {Tooltip} from '../tooltip/Tooltip';

export interface ILabeledValueProps {
    label: string;
    value: React.ReactNode;
    fullRow?: boolean;
    information?: string;
    informationPlacement?: TooltipPlacement;
    padding?: boolean;
    singleLine?: boolean;
    className?: string;
}

export class LabeledValue extends React.PureComponent<ILabeledValueProps> {
    static defaultProps: Partial<ILabeledValueProps> = {
        padding: true,
    };

    render() {
        const informationSVG = !!this.props.information ? (
            <Tooltip title={this.props.information} placement={this.props.informationPlacement || TooltipPlacement.Top}>
                <Svg svgName="info-14" svgClass="icon fill-medium-grey" />
            </Tooltip>
        ) : null;

        return (
            <div
                className={classNames(
                    'box',
                    {padded: this.props.padding, 'full-content-x': !!this.props.fullRow},
                    this.props.className
                )}
            >
                <header className={classNames('label', {'inline-block': this.props.singleLine})}>
                    <span className={classNames({mr1: !!this.props.information})}>{this.props.label}</span>
                    {informationSVG}
                </header>
                <section className={classNames('value', {'inline-block': this.props.singleLine})}>
                    {this.props.value}
                </section>
            </div>
        );
    }
}
