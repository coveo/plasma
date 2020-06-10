import * as React from 'react';
import {Limit} from 'react-vapor';

export class LimitExamples extends React.Component {
    render() {
        const title: string = 'Limit example';
        const usageNumber: number = 42;
        const usageNumberNearLimit: number = 80;
        const usageNumberEqualToLimit: number = Limit.defaultProps.limitNumber;
        const customLimitNumber: number = 130;
        const customLimitTitle: string = 'Throttling limit';
        const isLimitCanBeChanged: boolean = true;
        const isLimitIsTheGoalToReach: boolean = true;
        const isHistoryIsIncluded: boolean = true;

        return (
            <div className="coveo-form">
                <div className="form-group">
                    <label className="form-control-label"> A limit with an usage value</label>
                    <div className="form-control">
                        <Limit title={title} usageNumber={usageNumber} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">A limit with a history icon included</label>
                    <div className="form-control">
                        <Limit
                            title={title}
                            usageNumber={usageNumberNearLimit}
                            isHistoryIncluded={isHistoryIsIncluded}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">
                        {' '}
                        A limit with an usage value that reached the limit value
                    </label>
                    <div className="form-control">
                        <Limit title={title} usageNumber={usageNumberEqualToLimit} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">
                        A limit with an usage value that reached the "goal" limit value
                    </label>
                    <div className="form-control">
                        <Limit
                            title={title}
                            usageNumber={usageNumberEqualToLimit}
                            isLimitTheGoalToReach={isLimitIsTheGoalToReach}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">
                        A limit with a custom limit value and a custom limit title
                    </label>
                    <div className="form-control">
                        <Limit
                            title={title}
                            usageNumber={usageNumber}
                            limitNumber={customLimitNumber}
                            limitLabel={customLimitTitle}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label"> A limit with a modifiable limit value </label>
                    <div className="form-control">
                        <Limit title={title} usageNumber={usageNumber} isLimitModifiable={isLimitCanBeChanged} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label"> A limit without an usage value</label>
                    <div className="form-control">
                        <Limit title={title} isLimitModifiable={isLimitCanBeChanged} />
                    </div>
                </div>
            </div>
        );
    }
}
