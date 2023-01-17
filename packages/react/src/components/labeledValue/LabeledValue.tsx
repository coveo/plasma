import classNames from 'clsx';
import {PureComponent, ReactNode} from 'react';

import {TooltipPlacement} from '../../utils/TooltipUtils';
import {InfoToken, InfoTokenMode, InfoTokenSize, InfoTokenType} from '../info-token';
import {Tooltip} from '../tooltip/Tooltip';

export interface ILabeledValueProps {
    /**
     * The text to display
     */
    label: string;
    /**
     * The value to display with the label
     */
    value: ReactNode;
    /**
     * Set to true for the labeledValue to take the full row
     *
     * @default false
     */
    fullRow?: boolean;
    /**
     * The text to display in the tooltip. Will make a info icon appears after the label title
     */
    information?: ReactNode;
    /**
     * To choose the tooltip placement
     *
     * @default top
     */
    informationPlacement?: TooltipPlacement;
    /**
     * To set the padding or not
     *
     * @default true
     */
    padding?: boolean;
    /**
     * Do not use
     *
     * @deprecated
     */
    singleLine?: boolean;
    /**
     * Add CSS class to the component
     */
    className?: string;
}

/**
 * @deprecated Use Mantine instead
 */
export class LabeledValue extends PureComponent<ILabeledValueProps> {
    static defaultProps: Partial<ILabeledValueProps> = {
        padding: true,
    };

    render() {
        const informationSVG = !!this.props.information ? (
            <Tooltip
                title={this.props.information}
                placement={this.props.informationPlacement || TooltipPlacement.Top}
                className="labeled-tooltip"
            >
                <InfoToken mode={InfoTokenMode.Stroked} size={InfoTokenSize.Small} type={InfoTokenType.Information} />
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
                <div className="flex flex-center">
                    <header className={classNames('label', {'inline-block': this.props.singleLine})}>
                        <span className={classNames({mr1: !!this.props.information})}>{this.props.label}</span>
                    </header>
                    {informationSVG}
                </div>
                <section className={classNames('value', {'inline-block': this.props.singleLine})}>
                    {this.props.value}
                </section>
            </div>
        );
    }
}
