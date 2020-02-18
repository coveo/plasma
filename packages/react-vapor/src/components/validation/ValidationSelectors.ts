import {IReactVaporState} from '../../ReactVapor';
import {ValidationState} from './ValidationState';

const getErrors = (id: string) => (state: IReactVaporState) =>
    state.validation?.[id]?.error?.filter((error) => !!error.value) || [];
const getWarnings = (id: string) => (state: IReactVaporState) =>
    state.validation?.[id]?.warning?.filter((warning) => !!warning.value) || [];
const getIsDirty = (id: string) => (state: IReactVaporState) => state.validation?.[id]?.isDirty || [];

const getAnyError = (ids: string[]) => (state: IReactVaporState) =>
    ids
        .reduce((all, id) => all.concat(getErrors(id)(state)), [] as ValidationState['error'])
        .filter((error) => !!error.value);
const getAnyWarning = (ids: string[]) => (state: IReactVaporState) =>
    ids
        .reduce((all, id) => all.concat(getWarnings(id)(state)), [] as ValidationState['warning'])
        .filter((warning) => !!warning.value);
const getAnyDirty = (ids: string[]) => (state: IReactVaporState) =>
    ids
        .reduce((all, id) => all.concat(getIsDirty(id)(state)), [] as ValidationState['isDirty'])
        .filter((dirty) => dirty.value);

const isInError = (ids: string[]) => (state: IReactVaporState) => getAnyError(ids)(state).length > 0;
const isInWarning = (ids: string[]) => (state: IReactVaporState) => getAnyWarning(ids)(state).length > 0;
const isDirty = (ids: string[]) => (state: IReactVaporState) => getAnyDirty(ids)(state).length > 0;

export const ValidationSelectors = {
    getErrors,
    getWarnings,
    getIsDirty,
    getAnyError,
    getAnyWarning,
    getAnyDirty,
    isInError,
    isInWarning,
    isDirty,
};
