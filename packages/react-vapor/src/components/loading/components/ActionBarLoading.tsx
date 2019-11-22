import * as React from 'react';
import {ActionBar} from '../../actions/ActionBar';

export const ActionBarLoading = () => (
    <ActionBar extraContainerClasses={['mod-no-border']}>
        <div className="coveo-table-actions">
            <div className="btn mod-rounded-border-2 bg-pure-white cursor-auto mod-no-border mod-small table-header-action-bar-button" />
        </div>
    </ActionBar>
);
