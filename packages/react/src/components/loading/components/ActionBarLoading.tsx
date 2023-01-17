import {ActionBar} from '../../actions/ActionBar.js';

/**
 * @deprecated Use Mantine instead
 */
export const ActionBarLoading = () => (
    <ActionBar extraContainerClasses={['mod-no-border']}>
        <div className="coveo-table-actions">
            <div className="btn mod-rounded-border-2 cursor-auto mod-no-border mod-small table-header-action-bar-button" />
        </div>
    </ActionBar>
);
