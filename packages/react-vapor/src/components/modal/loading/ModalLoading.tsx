import * as React from 'react';

import {Loading} from '../../loading/Loading';
import {ModalCompositeConnected} from '../ModalComposite';

export interface ModalLoadingProps {
    id: string;
    title?: React.ReactNode;
    openOnMount?: boolean;
}

export const ModalLoading: React.FunctionComponent<ModalLoadingProps> = (props) => (
    <ModalCompositeConnected
        id={props.id}
        classes="mod-prompt"
        modalBodyChildren={
            <div className="loading-prompt">
                {props.title ? <div>{props.title}</div> : null}
                <Loading fullContent />
            </div>
        }
        openOnMount={props.openOnMount}
        isPrompt
    />
);

ModalLoading.defaultProps = {
    openOnMount: true,
};
