import klawSync from 'klaw-sync';
import {CSS_MODULE_FILENAME_PATTERN, DEMO_FILENAME_PATTERN} from './constants';

export const findTsxAndCssModule = async (sourceFolder: string): Promise<string[]> => {
    const files = klawSync(sourceFolder, {
        nodir: true,
        traverseAll: true,
        filter: (file) => !!(file.path.match(DEMO_FILENAME_PATTERN) || file.path.match(CSS_MODULE_FILENAME_PATTERN)),
    });
    return files
        .map((file) => file.path)
        .filter(
            (file) =>
                // do we want only simple stuff?
                // file.includes('.usage.') &&
                // skip affix, table, highlight, ...)
                !file.includes('Affix.') &&
                !file.includes('Highlight.') &&
                !file.includes('Table.') &&
                !file.includes('TypographyStylesProvider.') &&
                !file.includes('TagsInput.') &&
                !file.includes('AspectRatio.') &&
                // we don't want storybook stuff
                !file.includes('.story.') &&
                // our demo is not built to overlay components
                !file.includes('.stylesApi.') &&
                // those are files that extend the component and I had trouble making it work
                !file.includes('.customSize.') &&
                !file.includes('.customVariant.') &&
                !file.includes('.responsive.') &&
                !file.includes('.defaultProps.') &&
                !file.includes('.sharedStyles.') &&
                !file.includes('.cssLoader.') &&
                !file.includes('.sizes.') &&
                !file.includes('.customType.') &&
                // those files are dynamically generated examples and would need to be evaluated
                !file.includes('.swatches.') &&
                !file.includes('.swatchesConfigurator.') &&
                // skip broken demos
                !file.includes('Accordion.demo.chevron.tsx') &&
                !file.includes('Accordion.demo.configurator.tsx') &&
                !file.includes('Accordion.demo.customize.tsx') &&
                !file.includes('Accordion.demo.disabled.tsx') &&
                !file.includes('ActionIcon.demo.loading.tsx') &&
                !file.includes('Alert.demo.configurator.tsx') &&
                !file.includes('Anchor.demo.textProps.tsx') &&
                !file.includes('Autocomplete.demo.dropdownOpened.tsx') &&
                !file.includes('Badge.demo.variantColorsResolver.tsx') &&
                !file.includes('Button.demo.loading.tsx') &&
                !file.includes('Checkbox.demo.card.tsx') &&
                !file.includes('Checkbox.demo.customize.tsx') &&
                !file.includes('Checkbox.demo.indeterminate.tsx') &&
                !file.includes('Chip.demo.group.tsx') &&
                !file.includes('ColorInput.demo.onChangeEnd.tsx') &&
                !file.includes('Fieldset.demo.usage.tsx') &&
                !file.includes('Input.demo.wrapper.tsx') &&
                !file.includes('LoadingOverlay.demo.customLoader.tsx') &&
                !file.includes('LoadingOverlay.demo.loaderProps.tsx') &&
                !file.includes('LoadingOverlay.demo.usage.tsx') &&
                !file.includes('MultiSelect.demo.dropdownOpened.tsx') &&
                !file.includes('Notification.demo.configurator.tsx') &&
                !file.includes('Pagination.demo.autoContrast.tsx') &&
                !file.includes('Pagination.demo.withContent.tsx') &&
                !file.includes('Popover.demo.arrow.tsx') &&
                !file.includes('Progress.demo.usage.tsx') &&
                !file.includes('Radio.demo.groupConfigurator.tsx') &&
                !file.includes('RingProgress.demo.label.tsx') &&
                !file.includes('ScrollArea.demo.autosizePopover.tsx') &&
                !file.includes('SegmentedControl.demo.disabled.ts') &&
                !file.includes('SegmentedControl.demo.transitions.tsx') &&
                !file.includes('Select.demo.dropdownOpened.tsx') &&
                !file.includes('Stepper.demo.stylesApi3.tsx') &&
                !file.includes('TagsInput.demo.dropdownOpened.tsx') &&
                !file.includes('Text.demo.truncate.tsx'),
        );
};
