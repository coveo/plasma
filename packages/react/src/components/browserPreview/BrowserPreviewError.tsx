import previewError from '@coveord/plasma-style/resources/icons/svg/preview-error.svg';
import classNames from 'classnames';
import {FunctionComponent} from 'react';

export interface BrowserPreviewErrorProps {
    onClick?: () => void;
    description?: string;
    errorMessage?: string;
}

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
        <img src={previewError} />
        <p className="medium-title-text mt2 center bolder">{description ?? 'Unable to show preview'}</p>
        {errorMessage ? <p className="center mt1 browser-preview__state--error">{errorMessage}</p> : null}
    </div>
);
