import * as React from 'react';
import {ActionBarLoading, BasicHeaderLoading, Loading, PaginationLoading, Section, TableLoading} from 'react-vapor';

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
        <Section level={3} title="Header loading">
            <BasicHeaderLoading />
        </Section>
        <Section level={3} title="Action Bar loading">
            <ActionBarLoading />
        </Section>
        <Section level={3} title="Table with 4 column in loading">
            <TableLoading.Table numberOfColumns={4} />
        </Section>
        <Section level={3} title="Table with 6 column and 5 row in loading">
            <TableLoading.Table numberOfColumns={6} numberOfRow={5} />
        </Section>
        <Section level={3} title="Table of cards with 2 column, 2 rows and 4 sub rows in loading">
            <TableLoading.Table isCard numberOfColumns={2} numberOfRow={2} numberOfSubRow={4} />
        </Section>
        <Section level={3} title="Table pagination in loading">
            <PaginationLoading />
        </Section>
    </Section>
);
