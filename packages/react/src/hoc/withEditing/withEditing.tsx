import {ReactNode, ComponentType, ComponentClass} from 'react';

import {StickyFooter} from '../../components/stickyFooter/StickyFooter';
import {withDirty} from '../withDirty/withDirty';

export interface IWithEditing {
    id: string;
    isDirty?: boolean;
    footerClassName?: string;
    footerChildren?: ReactNode;
}

export const withEditing = <T, R = any>(config: IWithEditing) => (Component: ComponentType<T>): ComponentClass<T, R> =>
    withDirty<T, R>({
        id: config.id,
        isDirty: config.isDirty,
        showDirty: (isDirty: boolean) =>
            config.footerChildren && (
                <StickyFooter className={config.footerClassName} isOpened={isDirty}>
                    {config.footerChildren}
                </StickyFooter>
            ),
    })(Component);
