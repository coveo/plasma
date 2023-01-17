import {BasicHeader} from '../../headers/BasicHeader.js';

/**
 * @deprecated Use Mantine instead
 */
export const BasicHeaderLoading = () => (
    <BasicHeader
        title={{
            text: (
                <div className="btn content-placeholder cursor-auto mod-no-border mod-small table-header-title-loading-width" />
            ),
        }}
        actions={[
            {
                content: (
                    <div className="btn mod-primary mod-no-border transparency-3 table-header-action-button-loading-width" />
                ),
            },
        ]}
    />
);
