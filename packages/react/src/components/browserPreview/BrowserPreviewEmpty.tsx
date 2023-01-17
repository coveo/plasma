import {UndoSize32Px} from '@coveord/plasma-react-icons';
import classNames from 'clsx';
import {FunctionComponent, PropsWithChildren, ReactNode} from 'react';

export interface BrowserPreviewEmptyProps {
    onClick?: () => void;
    image?: ReactNode;
}

/**
 * @deprecated Use Mantine instead
 */
export const BrowserPreviewEmpty: FunctionComponent<PropsWithChildren<BrowserPreviewEmptyProps>> = ({
    image,
    onClick,
    children,
}) => (
    <div
        onClick={onClick}
        className={classNames('browser-preview__state flex flex-column flex-auto center-align', {
            'cursor-pointer': onClick,
        })}
    >
        {image ?? <UndoSize32Px style={{color: 'var(--info-60)'}} />}
        <p className="medium-title-text mt2 flex flex-column center-align center">{children}</p>
    </div>
);
