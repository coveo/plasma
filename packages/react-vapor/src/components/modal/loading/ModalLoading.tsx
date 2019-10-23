import * as React from 'react';
import {Loading} from '../../loading/Loading';
import {ModalCompositeConnected} from '../ModalCompositeConnected';

export interface ModalLoadingProps {
    id: string;
    title?: React.ReactNode;
}

export const ModalLoading = (props: ModalLoadingProps) => {
    return (
        <ModalCompositeConnected
            id={props.id}
            classes="mod-prompt"
            modalBodyChildren={
                <div className="loading-prompt">
                    <div>{props.title}</div>
                    <Loading fullContent />
                </div>
            }
            isPrompt
        />
    );
};
