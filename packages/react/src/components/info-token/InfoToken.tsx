import {
    CheckmarkSize16Px,
    CheckmarkSize24Px,
    CheckmarkSize32Px,
    CriticalSize16Px,
    CriticalSize24Px,
    CriticalSize32Px,
    Icon,
    InfoSize16Px,
    InfoSize24Px,
    InfoSize32Px,
    QuestionSize16Px,
    QuestionSize24Px,
    QuestionSize32Px,
    TipSize16Px,
    TipSize24Px,
    TipSize32Px,
    WarningSize16Px,
    WarningSize24Px,
    WarningSize32Px,
} from '@coveord/plasma-react-icons';
import classNames from 'clsx';
import {FunctionComponent} from 'react';

export enum InfoTokenType {
    Information,
    Success,
    Warning,
    Critical,
    Tip,
    Question,
}

export enum InfoTokenSize {
    Small,
    Medium,
    Large,
}

export enum InfoTokenMode {
    Stroked,
    Filled,
}

export interface InfoTokenProps {
    type: InfoTokenType;
    size: InfoTokenSize;
    mode: InfoTokenMode;
    className?: string;
}

const IconMapping: Record<InfoTokenType, Record<InfoTokenSize, Icon>> = {
    [InfoTokenType.Information]: {
        [InfoTokenSize.Small]: InfoSize16Px,
        [InfoTokenSize.Medium]: InfoSize24Px,
        [InfoTokenSize.Large]: InfoSize32Px,
    },
    [InfoTokenType.Success]: {
        [InfoTokenSize.Small]: CheckmarkSize16Px,
        [InfoTokenSize.Medium]: CheckmarkSize24Px,
        [InfoTokenSize.Large]: CheckmarkSize32Px,
    },
    [InfoTokenType.Warning]: {
        [InfoTokenSize.Small]: WarningSize16Px,
        [InfoTokenSize.Medium]: WarningSize24Px,
        [InfoTokenSize.Large]: WarningSize32Px,
    },
    [InfoTokenType.Critical]: {
        [InfoTokenSize.Small]: CriticalSize16Px,
        [InfoTokenSize.Medium]: CriticalSize24Px,
        [InfoTokenSize.Large]: CriticalSize32Px,
    },
    [InfoTokenType.Tip]: {
        [InfoTokenSize.Small]: TipSize16Px,
        [InfoTokenSize.Medium]: TipSize24Px,
        [InfoTokenSize.Large]: TipSize32Px,
    },
    [InfoTokenType.Question]: {
        [InfoTokenSize.Small]: QuestionSize16Px,
        [InfoTokenSize.Medium]: QuestionSize24Px,
        [InfoTokenSize.Large]: QuestionSize32Px,
    },
};

const SizeMapping: Record<InfoTokenSize, number> = {
    [InfoTokenSize.Small]: 16,
    [InfoTokenSize.Medium]: 24,
    [InfoTokenSize.Large]: 32,
};

const ColorMapping: Record<InfoTokenType, string> = {
    [InfoTokenType.Information]: 'mod-info',
    [InfoTokenType.Success]: 'mod-success',
    [InfoTokenType.Warning]: 'mod-warning',
    [InfoTokenType.Critical]: 'mod-error',
    [InfoTokenType.Tip]: 'mod-success',
    [InfoTokenType.Question]: 'mod-info',
};

const ModeMapping: Record<InfoTokenMode, string> = {
    [InfoTokenMode.Stroked]: 'stroked',
    [InfoTokenMode.Filled]: 'filled',
};

/**
 * @deprecated Use Mantine instead
 */
export const InfoToken: FunctionComponent<InfoTokenProps> = ({mode, size, type, className}) => {
    const IconComponent = IconMapping[type][size];
    return (
        <IconComponent
            height={SizeMapping[size]}
            className={classNames('info-token', ModeMapping[mode], ColorMapping[type], className)}
        />
    );
};
