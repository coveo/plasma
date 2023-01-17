import {svg as Icons} from '@coveord/plasma-style';
import classNames from 'clsx';
import {FunctionComponent} from 'react';

export interface BrowserPreviewErrorProps {
    onClick?: () => void;
    description?: string;
    errorMessage?: string;
}

/**
 * @deprecated Use Mantine instead
 */
export const BrowserPreviewError: FunctionComponent<BrowserPreviewErrorProps> = ({
    onClick,
    description,
    errorMessage,
}) => (
    <div
        onClick={onClick}
        className={classNames('browser-preview__state flex flex-column flex-auto center-align', {
            'cursor-pointer': onClick,
        })}
    >
        <img src={URL.createObjectURL(new Blob([Icons.previewError.svgString], {type: 'image/svg+xml'}))} />
        <p className="medium-title-text mt2 center bolder">{description ?? 'Unable to show preview'}</p>
        {errorMessage ? <p className="center mt1 browser-preview__state--error">{errorMessage}</p> : null}
    </div>
);
