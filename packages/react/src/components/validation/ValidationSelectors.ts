import {PlasmaState} from '../../PlasmaState.js';
import {ValidationState} from './ValidationState.js';

const getErrors = (id: string) => (state: PlasmaState) =>
    state.validation?.[id]?.error?.filter((error) => !!error.value) || [];
const getWarnings = (id: string) => (state: PlasmaState) =>
    state.validation?.[id]?.warning?.filter((warning) => !!warning.value) || [];
const getIsDirty = (id: string) => (state: PlasmaState) => state.validation?.[id]?.isDirty || [];

const getAnyError = (ids: string[]) => (state: PlasmaState) =>
    ids
        .reduce((all, id) => all.concat(getErrors(id)(state)), [] as ValidationState['error'])
        .filter((error) => !!error.value);
const getAnyWarning = (ids: string[]) => (state: PlasmaState) =>
    ids
        .reduce((all, id) => all.concat(getWarnings(id)(state)), [] as ValidationState['warning'])
        .filter((warning) => !!warning.value);
const getAnyDirty = (ids: string[]) => (state: PlasmaState) =>
    ids
        .reduce((all, id) => all.concat(getIsDirty(id)(state)), [] as ValidationState['isDirty'])
        .filter((dirty) => dirty.value);

const isInError = (ids: string[]) => (state: PlasmaState) => getAnyError(ids)(state).length > 0;
const isInWarning = (ids: string[]) => (state: PlasmaState) => getAnyWarning(ids)(state).length > 0;
const isDirty = (ids: string[]) => (state: PlasmaState) => getAnyDirty(ids)(state).length > 0;

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
