import classNames from 'classnames';
import {ReactNode, FunctionComponent} from 'react';

import {Svg} from '../svg';

export interface BrowserPreviewEmptyProps {
    onClick?: () => void;
    image?: ReactNode;
}

/**
 * @deprecated Use Mantine instead
 */
export const BrowserPreviewEmpty: FunctionComponent<BrowserPreviewEmptyProps> = ({image, onClick, children}) => (
    <div
        onClick={onClick}
        className={classNames('browser-preview__state flex flex-column flex-auto center-align', {
            'cursor-pointer': onClick,
        })}
    >
        {image ?? <Svg svgName="arrowLeftReturn" className="block" />}
        <p className="medium-title-text mt2 flex flex-column center-align center">{children}</p>
    </div>
);
