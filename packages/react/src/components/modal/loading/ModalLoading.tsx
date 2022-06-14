import {ReactNode, FunctionComponent} from 'react';

export interface ModalLoadingProps {
    id: string;
    title?: ReactNode;
    openOnMount?: boolean;
}

export const ModalLoading: FunctionComponent<ModalLoadingProps> = (props) => (
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
