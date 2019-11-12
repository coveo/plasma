import {FunctionComponent} from 'react';
import * as _ from 'underscore';
import {RefreshCallback} from './RefreshCallback';
import {IRefreshCallbackWithButtonProps, refreshCallbackWithButton} from './RefreshCallbackWithButton';

export const RefreshCallbackWithButton: FunctionComponent<IRefreshCallbackWithButtonProps> = _.compose(
    refreshCallbackWithButton({
        buttonContainerProps: {
            className: 'mb2',
        },
        button: {
            name: 'Refresh',
            enabled: true,
        },
    })
)(RefreshCallback);
