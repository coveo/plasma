const validateValue = (jsonValue: string) => {
    try {
        JSON.parse(jsonValue);
        return true;
    } catch {
        return false;
    }
};

export const JSONEditorUtils = {
    validateValue,
};
