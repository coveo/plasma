import * as React from 'react';
import {StatusCard} from 'react-vapor';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

// start-print

export const StatusCardExamples = () => (
    <VaporComponent id="status-card" title="Status Card" usage="" withSource>
        <div className="mt2">
            <div className="form-group">
                <label className="form-control-label">Status card success</label>
                <div className="form-control">
                    <StatusCard className="mod-success" title="Tasks" icon="dateToday">
                        10/10 done!
                    </StatusCard>
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">Status card warning</label>
                <div className="form-control">
                    <StatusCard className="mod-warning" title="Tasks" icon="pause">
                        Something is wrong!
                    </StatusCard>
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">Status card critical</label>
                <div className="form-control">
                    <StatusCard className="mod-critical" title="Tasks" icon="dateToday">
                        2/10 done!
                    </StatusCard>
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">Status card information</label>
                <div className="form-control">
                    <StatusCard className="mod-information" title="Tasks" icon="info">
                        This card has VERY important informations to show you.
                    </StatusCard>
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">Simple status card</label>
                <div className="form-control">
                    <StatusCard className="mod-warning" title="Tasks" simple>
                        6/10 done!
                    </StatusCard>
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">Many status cards</label>
                <div className="form-control">
                    <div className="status-card-wrapper">
                        <StatusCard className="mod-critical" title="Engine 1" icon="settings">
                            Limited
                        </StatusCard>
                        <StatusCard className="mod-warning" title="Engine 2" icon="settings" loading>
                            Cool
                        </StatusCard>
                        <StatusCard className="mod-success" title="Speed" icon="peak">
                            Below the limit
                        </StatusCard>
                        <StatusCard className="mod-warning" title="View" icon="view">
                            Hazardeous
                        </StatusCard>
                        <StatusCard className="mod-information" title="Boost" icon="update">
                            Ready
                        </StatusCard>
                    </div>
                </div>
            </div>
        </div>
    </VaporComponent>
);
