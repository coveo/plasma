import * as classNames from 'classnames';
import * as React from 'react';
import {TooltipPlacement} from '../../utils/TooltipUtils';
import {Svg} from '../svg/Svg';
import {Tooltip} from '../tooltip/Tooltip';
import {InputDescription} from './InputDescription';

export interface ILabeledInputProps {
    label?: string;
    message?: React.ReactNode;
    description?: React.ReactNode;
    className?: string;
    information?: string;
}

export const LabeledInput: React.FunctionComponent<ILabeledInputProps> = ({
    children,
    label,
    message,
    description,
    className,
    information,
}) => {
    const header =
        !!label || information ? (
            <header className={classNames('label', 'text-light-blue', className)}>
                {!!label ? <span>{label}</span> : null}
                {!!information ? (
                    <Tooltip title={information} placement={TooltipPlacement.Top} className="ml1">
                        <Svg svgName="info-14" svgClass="icon fill-medium-grey" />
                    </Tooltip>
                ) : null}
            </header>
        ) : null;

    return (
        <>
            {header}
            {children}
            {!!message && <InputDescription>{message}</InputDescription>}
            {!!description && <InputDescription>{description}</InputDescription>}
        </>
    );
};
