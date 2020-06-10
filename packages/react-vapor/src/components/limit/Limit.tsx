import classNames from 'classnames';
import * as React from 'react';
import {Input} from 'react-vapor';

export interface ILimitOwnProps {
    title: string;
    limitLabel?: string;
    usageNumber?: number;
    limitNumber?: number;
    isLimitModifiable?: boolean;
    isLimitTheGoalToReach?: boolean;
    isHistoryIncluded?: boolean;
}

export interface ILimitDispatchProps {
    onRender?: () => void;
    onDestroy?: () => void;
}

export interface ILimitProps extends ILimitOwnProps, ILimitDispatchProps {}

export class Limit extends React.Component<ILimitProps, {}> {
    static defaultProps: Partial<ILimitProps> = {
        limitLabel: 'Limit',
        limitNumber: 100,
        isLimitModifiable: false,
        isLimitTheGoalToReach: false,
        isHistoryIncluded: false,
    };

    componentDidMount() {
        this.props.onRender?.();
    }

    componentWillUnmount() {
        this.props.onDestroy?.();
    }

    render() {
        const mainLimitBoxClasses = classNames('limit-box-main', 'p2', 'pb1');

        return (
            <div className="limit-box mb2">
                <div className={mainLimitBoxClasses}>
                    {this.getHeaderDivision()}
                    {this.getContentDivision()}
                </div>
                {this.getProgressBar()}
            </div>
        );
    }

    private getHeaderDivision() {
        const titleClasses = classNames('flex', 'space-between');
        return (
            <div className={titleClasses}>
                <label className="form-control-label"> {this.props.title}</label>
                {this.getHistoryIcon()}
            </div>
        );
    }

    private getHistoryIcon() {
        const iconClasses = classNames('icon', 'mod-lg', 'limit-history-button');
        return (
            this.props.isHistoryIncluded && (
                <span className={iconClasses}>
                    <span className="fill-medium-blue">
                        <svg className="" viewBox="0 0 16 16">
                            <path d="M7.3 0v8.1c0 .2 0 .4.2.5l5.7 5.5C11.7 15.3 9.9 16 8 16c-4.4 0-8-3.6-8-8C0 3.8 3.2.4 7.3 0zm8 4.7c.4 1 .7 2.1.7 3.3 0 2-.8 3.9-2 5.3l-5.1-5zM8.4 0c2.6.1 4.9 1.6 6.3 3.6L8.4 7.3z" />
                        </svg>
                    </span>
                </span>
            )
        );
    }

    private getContentDivision() {
        const contentClasses = classNames('limit-box-numbers', 'pt1', 'flex');
        return (
            <div className={contentClasses}>
                {this.getUsageDivision()}
                {this.getLimitDivision()}
            </div>
        );
    }

    private getLimitDivision() {
        const limitAreaClasses = classNames('limit-box-limit', 'form-group', 'input-field', 'validate');
        const limitValueString: string = this.props.limitNumber.toString();
        if (this.props.isLimitModifiable) {
            return (
                <Input
                    type="number"
                    labelTitle={this.props.limitLabel}
                    defaultValue={limitValueString}
                    classes={limitAreaClasses}
                ></Input>
            );
        } else {
            return (
                <div className="limit-box-limit">
                    <label className="form-control-label">{this.props.limitLabel}</label>
                    <span className="limit-box-limit-value">{this.props.limitNumber}</span>
                </div>
            );
        }
    }

    private getUsageDivision() {
        const isUsageRequired: boolean = this.props.usageNumber ? true : false;
        return (
            isUsageRequired && (
                <div className="limit-box-usage">
                    <label className="form-control-label">Usage</label>
                    <span className="limit-box-usage-value">{this.props.usageNumber}</span>
                </div>
            )
        );
    }

    private getProgressBar() {
        const isUsageRequired: boolean = this.props.usageNumber ? true : false;
        const progressClass: string = this.getProgressClass();
        const progressClasses = classNames('limit-box-bar', progressClass, {
            'mod-green': this.props.isLimitTheGoalToReach,
        });

        return (
            isUsageRequired && (
                <div className="limit-box-footer">
                    <div className={progressClasses}></div>
                </div>
            )
        );
    }

    private getProgressClass() {
        const progress: number = Math.round((this.props.usageNumber / this.props.limitNumber) * 100);
        return 'progress-' + progress.toString();
    }
}
