const getFile = (inputId: string): File => {
    const input = document.getElementById(inputId) as HTMLInputElement;
    return input?.files[0];
};

export const FilepickerSelectors = {
    getFile,
};
