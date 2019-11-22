import * as React from 'react';
import {Section} from '../../section/Section';
import {ActionBarLoading} from '../components/ActionBarLoading';
import {BasicHeaderLoading} from '../components/BasicHeaderLoading';
import {TableLoading} from '../components/TableLoading';
import {Loading} from '../Loading';

export const LoadingExamples = () => (
    <Section className="mb3" title="Loading examples">
        <Section level={3} title="A table loading with 4 rows">
            <div className="form-group">
                <label className="form-control-label">Loading bouncing balls</label>
                <div className="mt2 mod-border" style={{width: 400, height: 200}}>
                    <Loading />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">Loading bouncing balls with full content</label>
                <div className="mt2 mod-border" style={{width: 400, height: 400}}>
                    <Loading fullContent />
                </div>
            </div>
        </Section>
        <Section level={3} title="A table header loading">
            <BasicHeaderLoading />
        </Section>
        <Section level={3} title="A table header loading">
            <ActionBarLoading />
        </Section>
        <Section level={3} title="A table with 4 column in loading">
            <TableLoading numberOfColumn={4} />
        </Section>
        <Section level={3} title="A table with 6 colomn in loading">
            <TableLoading numberOfColumn={6} />
        </Section>
    </Section>
);
