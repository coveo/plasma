import ReactModal from 'react-modal';

export abstract class Defaults {
    static MODAL_ROOT: string = 'body';
    static MODAL_TIMEOUT: number = 300;

    static DROP_ROOT: string = 'body';
    static DROP_PARENT_ROOT: string = 'body';

    static TOOLTIP_ROOT: string = 'body';

    static set APP_ELEMENT(appElement: string | HTMLElement) {
        ReactModal.setAppElement(appElement);
    }

    static REFRESH_CALLBACK_INTERVAL_MS: number = 1000;
}
