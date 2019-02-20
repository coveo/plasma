import * as ReactModal from 'react-modal';

let _MODAL_ROOT: string = 'body';
let _MODAL_TIMEOUT: number = 300;

/* istanbul ignore next */
export abstract class Defaults {
    static get MODAL_ROOT(): string {
        return _MODAL_ROOT;
    }

    static set MODAL_ROOT(root: string) {
        _MODAL_ROOT = root;
    }

    static get MODAL_TIMEOUT(): number {
        return _MODAL_TIMEOUT;
    }

    static set MODAL_TIMEOUT(timeout: number) {
        _MODAL_TIMEOUT = timeout;
    }

    static set APP_ELEMENT(appElement: string | HTMLElement) {
        ReactModal.setAppElement(appElement);
    }
}
