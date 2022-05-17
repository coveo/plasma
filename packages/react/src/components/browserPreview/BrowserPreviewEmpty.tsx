import {UndoSize32Px} from '@coveord/plasma-react-icons';
import classNames from 'classnames';
import {FunctionComponent, ReactNode} from 'react';

export interface BrowserPreviewEmptyProps {
    onClick?: () => void;
    image?: ReactNode;
}

export const BrowserPreviewEmpty: FunctionComponent<BrowserPreviewEmptyProps> = ({image, onClick, children}) => (
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
