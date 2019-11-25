import * as React from 'react';
import {BasicHeader} from '../../headers/BasicHeader';

export const BasicHeaderLoading = () => {
    return (
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
};
