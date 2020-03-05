import {IReactVaporState} from '../../ReactVapor';
import {InputSelectors} from '../input/InputSelectors';
import {MultilineBoxSelectors} from '../multilineBox/MultilineBoxSelector';

const getValues = (state: IReactVaporState, id: string) =>
    MultilineBoxSelectors.getIds(state, {id})
        .map((inputId) => InputSelectors.getValue(state, {id: inputId}))
        .filter((value) => value !== '');

export const MultiValuesInputSelectors = {
    getValues,
};
