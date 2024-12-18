import {createSafeContext, type DefaultMantineColor} from '@coveord/plasma-mantine';

interface ThemePickerContextType {
    setPrimaryColor: (newColor: DefaultMantineColor) => void;
}

export const [ThemePickerProvider, useThemePicker] = createSafeContext<ThemePickerContextType>(
    'ThemePickerProvider component was not found in tree',
);
