import * as React from 'react';
import {StatusCard} from 'react-vapor';

export const StatusCardExamples = () => (
    <div className="mt2">
        <div className="form-group">
            <label className="form-control-label">Status card</label>
            <div className="form-control">
                <StatusCard color="green" title="Tasks" icon="date-today">
                    10/10 done!
                </StatusCard>
            </div>
        </div>
        <div className="form-group">
            <label className="form-control-label">Status card red</label>
            <div className="form-control">
                <StatusCard color="red" title="Tasks" icon="date-today">
                    2/10 done!
                </StatusCard>
            </div>
        </div>
        <div className="form-group">
            <label className="form-control-label">Simple status card</label>
            <div className="form-control">
                <StatusCard color="yellow" title="Tasks" simple>
                    6/10 done!
                </StatusCard>
            </div>
        </div>
        <div className="form-group">
            <label className="form-control-label">Many status cards</label>
            <div className="form-control">
                <div className="status-card-wrapper">
                    <StatusCard color="red" title="Engine 1" icon="settings">
                        Limited
                    </StatusCard>
                    <StatusCard color="yellow" title="Engine 2" icon="settings" loading>
                        Cool
                    </StatusCard>
                    <StatusCard color="green" title="Speed" icon="peak">
                        Below the limit
                    </StatusCard>
                    <StatusCard color="yellow" title="View" icon="view">
                        Hazardeous
                    </StatusCard>
                    <StatusCard color="yellow" title="Boost" icon="update">
                        Ready
                    </StatusCard>
                </div>
            </div>
        </div>
    </div>
);
