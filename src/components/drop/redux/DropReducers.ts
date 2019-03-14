import {IReactVaporState} from '../../../ReactVapor';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {DropReducerActions, IDropPayload} from './DropActions';

export interface IDropCompositeState extends IDropPayload {}

export const dropInitialState: IDropCompositeState = {id: undefined, isOpen: false};

export const dropCompositeReducer = (
    state: IDropCompositeState = dropInitialState,
    action: IReduxAction<IDropPayload>,
): IDropCompositeState => {
    switch (action.type) {
        case DropReducerActions.toggle:
            let isOpen = action.payload.isOpen;
            if (action.payload.id === state.id) {
                isOpen = !state.isOpen;
            }
            return {
                id: action.payload.id,
                isOpen,
            };
        default:
            return state;
    }
};

const isDropOpen = (state: IReactVaporState, props: {id: string}): boolean =>
    state.drop && state.drop.id === props.id ? state.drop.isOpen : false;

export const DropSelectors = {
    isOpen: isDropOpen,
};
