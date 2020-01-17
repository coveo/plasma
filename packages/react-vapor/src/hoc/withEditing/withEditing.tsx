import * as React from 'react';

import {StickyFooter} from '../../components/stickyFooter/StickyFooter';
import {withDirty} from '../withDirty/withDirty';

export interface IWithEditing {
    id: string;
    isDirty?: boolean;
    footerClassName?: string;
    footerChildren?: React.ReactNode;
}

export const withEditing = <T, R = any>(config: IWithEditing) => (
    Component: React.ComponentType<T>
): React.ComponentClass<T, R> => {
    return withDirty<T, R>({
        id: config.id,
        isDirty: config.isDirty,
        showDirty: (isDirty: boolean) => {
            return (
                config.footerChildren && (
                    <StickyFooter className={config.footerClassName} isOpened={isDirty}>
                        {config.footerChildren}
                    </StickyFooter>
                )
            );
        },
    })(Component);
};
