import {ChartPieSize16Px} from '@coveord/plasma-react-icons';
import classNames from 'classnames';
import {FunctionComponent} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {PlasmaState} from '../../PlasmaState.js';
import {IDispatch} from '../../utils/ReduxUtils.js';
import {InputConnected, InputSelectors} from '../input/index.js';
import {changeInputValue} from '../input/InputActions.js';

export interface LimitOwnProps {
    /**
     * Unique identifier of the Limit card
     */
    id?: string;
    /**
     * The text displayed as the title of the Limit card
     */
    title: string;
    /**
     * The text displayed as the title of the limit value
     *
     * @default Limit
     */
    limitLabel?: string;
    /**
     * Additionnal CSS classes to customize the style of the Limit card
     */
    className?: string;
    /**
     * Display the current usage under the Usage label
     */
    usage?: number;
    /**
     * Set the limit value of the Limit card. When the limit is reached, the progress bar is turning red color.
     */
    limit?: number;
    /**
     * Whether the limit value is editable directly in the Limit card
     */
    isLimitEditable?: boolean;
    /**
     * Whether the limit value is a goal. When the goal is achived, the progress bar stay teal color instead of turning red
     */
    isLimitTheGoalToReach?: boolean;
    /**
     * Whether the history icons is rendered
     */
    isHistoryIncluded?: boolean;
    /**
     * A callback function that gets executed after the History icon is clicked
     */
    onHistoryIconClick?: () => void;
}

const isANumber = (n: any): n is number => typeof n === 'number' && !Number.isNaN(n);

/**
 * @deprecated Use Mantine instead
 */
export const Limit: FunctionComponent<LimitOwnProps> = (props) => {
    const {currentLimit} = useSelector((state: PlasmaState) => ({
        currentLimit: +InputSelectors.getValue(state, {id: props.id}) || props.limit,
    }));

    return (
        <div className={classNames('limit-box mb2', props.className)}>
            <div className="limit-box-main p2 pb1">
                <HeaderDivision {...props} />
                <ContentDivision {...props} limit={currentLimit} />
            </div>
            <ProgressBar usage={props.usage} isLimitTheGoalToReach={props.isLimitTheGoalToReach} limit={currentLimit} />
        </div>
    );
};

const HeaderDivision: FunctionComponent<LimitOwnProps> = ({title, isHistoryIncluded, onHistoryIconClick}) => (
    <div className="flex space-between">
        <label className="form-control-label"> {title}</label>
        <HistoryIcon isHistoryIncluded={isHistoryIncluded} onHistoryIconClick={onHistoryIconClick} />
    </div>
);

const HistoryIcon: FunctionComponent<Omit<LimitOwnProps, 'title'>> = ({isHistoryIncluded, onHistoryIconClick}) =>
    isHistoryIncluded ? (
        <button className="link" onClick={onHistoryIconClick}>
            <ChartPieSize16Px height={16} />
        </button>
    ) : null;

const ContentDivision: FunctionComponent<Omit<LimitOwnProps, 'title'>> = ({
    id,
    usage,
    limit,
    isLimitEditable,
    limitLabel = 'Limit',
}) => (
    <div className="limit-box-numbers pt1 flex">
        <UsageDivision usage={usage} />
        <LimitDivision id={id} usage={usage} limit={limit} isLimitEditable={isLimitEditable} limitLabel={limitLabel} />
    </div>
);

const UsageDivision: FunctionComponent<Omit<LimitOwnProps, 'title'>> = ({usage}) =>
    isANumber(usage) ? (
        <div className="limit-box-usage">
            <label className="form-control-label">Usage</label>
            <span className="limit-box-usage-value">{usage.toLocaleString()}</span>
        </div>
    ) : null;

const LimitDivision: FunctionComponent<Omit<LimitOwnProps, 'title'>> = ({
    id,
    limit,
    usage,
    isLimitEditable,
    limitLabel,
}) => {
    const dispatch: IDispatch = useDispatch();

    if (isLimitEditable) {
        const limitValueString: string = limit?.toString() ?? '';
        const minLimitValue: number = usage ?? 0;
        return (
            <InputConnected
                id={id}
                type="number"
                labelTitle={limitLabel}
                defaultValue={limitValueString}
                min={minLimitValue}
                classes="limit-box-limit form-group input-field validate"
                onChange={(limitValue: string) => dispatch(changeInputValue(id, limitValue, true))}
            />
        );
    }

    return isANumber(limit) ? (
        <div className="limit-box-limit">
            <label className="form-control-label">{limitLabel}</label>
            <span className="limit-box-limit-value">{limit.toLocaleString()}</span>
        </div>
    ) : null;
};

const ProgressBar: FunctionComponent<Omit<LimitOwnProps, 'title'>> = ({usage, isLimitTheGoalToReach, limit}) => {
    const progressClass: string = getProgressBarClass(usage, limit);
    const progressClasses = classNames('limit-box-bar', progressClass, {
        'mod-green': isLimitTheGoalToReach,
    });

    return (
        <div className={classNames('limit-box-footer', {'no-limit': !limit})}>
            <div className={[usage, limit].every((value) => Number.isInteger(value)) ? progressClasses : ''}></div>
        </div>
    );
};

const getProgressBarClass = (usageValue: number, limitValue: number): string => {
    const progress: number = Math.round((usageValue / limitValue) * 100);
    return progress <= 100 ? `progress-${progress.toString()}` : `progress-100`;
};
