import classNames from 'classnames';
import {FunctionComponent, PropsWithChildren, ReactNode} from 'react';

import {TooltipPlacement} from '../../utils/TooltipUtils.js';
import {InfoToken, InfoTokenMode, InfoTokenSize, InfoTokenType} from '../info-token/index.js';
import {Tooltip} from '../tooltip/Tooltip.js';
import {InputDescription} from './InputDescription.js';

export interface ILabeledInputProps {
    label?: ReactNode;
    message?: ReactNode;
    helpText?: ReactNode;
    headerClassName?: string;
    optionalInformation?: string;
}

/**
 * @deprecated Use Mantine Input instead: https://mantine.dev/core/input/
 */
export const LabeledInput: FunctionComponent<PropsWithChildren<ILabeledInputProps>> = ({
    children,
    label,
    message,
    helpText: description,
    headerClassName,
    optionalInformation: information,
}) => {
    const header =
        !!label || !!information ? (
            <div className="flex">
                <header className={classNames('label', headerClassName)}>
                    {!!label ? <span>{label}</span> : null}
                </header>
                {!!information ? (
                    <Tooltip title={information} placement={TooltipPlacement.Right} className="labeled-tooltip">
                        <InfoToken
                            mode={InfoTokenMode.Stroked}
                            size={InfoTokenSize.Small}
                            type={InfoTokenType.Information}
                            className="ml1"
                        />
                    </Tooltip>
                ) : null}
            </div>
        ) : null;

    return (
        <div className="labeled-input">
            {header}
            {children}
            {!!message && <InputDescription>{message}</InputDescription>}
            {!!description && <InputDescription>{description}</InputDescription>}
        </div>
    );
};
