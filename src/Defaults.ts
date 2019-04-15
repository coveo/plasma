import * as ReactModal from 'react-modal';

export abstract class Defaults {

    static MODAL_ROOT: string = 'body';
    static MODAL_TIMEOUT: number = 300;

    static DROP_ROOT: string = 'body';

    static set APP_ELEMENT(appElement: string | HTMLElement) {
        ReactModal.setAppElement(appElement);
    }
}
