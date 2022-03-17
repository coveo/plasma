import {svg} from '@coveord/plasma-style';
import classNames from 'classnames';
import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {PlasmaState} from '../../PlasmaState';
import {IDispatch} from '../../utils/ReduxUtils';
import {InputConnected} from '../input';
import {changeInputValue} from '../input/InputActions';
import {InputSelectors} from '../input/InputSelectors';
import {Svg} from '../svg';

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
     * Whether or not the limit value is a goal. When the goal is achived, the progress bar stay teal color instead of turning red
     */
    isLimitTheGoalToReach?: boolean;
    /**
     * Whether or not the history icons is rendered
     */
    isHistoryIncluded?: boolean;
    /**
     * A callback function that gets executed after the History icon is clicked
     */
    onHistoryIconClick?: () => void;
}

export const Limit: React.FunctionComponent<LimitOwnProps> = (props) => {
    const {id, limit, className} = props;
    const {currentLimit} = useSelector((state: PlasmaState) => ({
        currentLimit: +InputSelectors.getValue(state, {id}) || limit,
    }));

    return (
        <div className={classNames('limit-box mb2', className)}>
            <div className="limit-box-main p2 pb1">
                <HeaderDivision {...props} />
                <ContentDivision {...props} currentLimit={currentLimit} />
            </div>
            <ProgressBar usage={props.usage} isLimitTheGoalToReach={props.isLimitTheGoalToReach} limit={currentLimit} />
        </div>
    );
};

const HeaderDivision: React.FunctionComponent<LimitOwnProps> = ({title, isHistoryIncluded, onHistoryIconClick}) => (
    <div className="flex space-between">
        <label className="form-control-label"> {title}</label>
        <HistoryIcon isHistoryIncluded={isHistoryIncluded} onHistoryIconClick={onHistoryIconClick} />
    </div>
);

const HistoryIcon: React.FunctionComponent<Omit<LimitOwnProps, 'title'>> = ({isHistoryIncluded, onHistoryIconClick}) =>
    isHistoryIncluded ? (
        <span className="icon limit-history-button documentation-link" onClick={onHistoryIconClick}>
            <Svg svgName={svg.menuAnalytics.name} />
        </span>
    ) : null;

const ContentDivision: React.FunctionComponent<Omit<LimitOwnProps, 'title'> & {currentLimit: number}> = ({
    id,
    usage,
    limit,
    isLimitEditable,
    limitLabel = 'Limit',
    currentLimit,
}) => (
    <div className="limit-box-numbers pt1 flex">
        <UsageDivision usage={usage} />
        <LimitDivision
            id={id}
            usage={usage}
            limit={limit}
            isLimitEditable={!!currentLimit && isLimitEditable}
            limitLabel={currentLimit ? limitLabel : ''}
        />
    </div>
);

const UsageDivision: React.FunctionComponent<Omit<LimitOwnProps, 'title'>> = ({usage}) => (
    <div className="limit-box-usage">
        <label className="form-control-label">Usage</label>
        <span className="limit-box-usage-value">{usage ?? 0}</span>
    </div>
);

const LimitDivision: React.FunctionComponent<Omit<LimitOwnProps, 'title'>> = ({
    id,
    limit,
    usage,
    isLimitEditable,
    limitLabel,
}) => {
    const limitValueString: string = limit?.toString();
    const minLimitValue: number = usage ?? 0;
    const dispatch: IDispatch = useDispatch();
    return isLimitEditable ? (
        <InputConnected
            id={id}
            type="number"
            labelTitle={limitLabel}
            defaultValue={limitValueString}
            min={minLimitValue}
            classes="limit-box-limit form-group input-field validate"
            onChange={(limitValue: string) => dispatch(changeInputValue(id, limitValue, true))}
        />
    ) : (
        <div className="limit-box-limit">
            <label className="form-control-label">{limitLabel}</label>
            <span className="limit-box-limit-value">{limit}</span>
        </div>
    );
};

const ProgressBar: React.FunctionComponent<Omit<LimitOwnProps, 'title'>> = ({usage, isLimitTheGoalToReach, limit}) => {
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
