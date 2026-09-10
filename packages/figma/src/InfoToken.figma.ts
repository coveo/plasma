// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components?node-id=7-50446
// component=InfoToken.Information

import figma from 'figma';

// Branch per variant; no default, else first.

let template;
if (figma.selectedInstance.getPropertyValue('Type') === 'Information') {
    const variant = figma.selectedInstance.getEnum('Variant', {
        Outline: 'outline',
        Light: 'light',
    });
    const size = figma.selectedInstance.getEnum('Size', {
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
    });

    template = {
        id: 'InfoToken.Information',
        imports: ["import { InfoToken } from '@coveord/plasma-mantine';"],
        example: figma.code`<InfoToken.Information${figma.helpers.react.renderProp(
            'variant',
            variant,
        )}${figma.helpers.react.renderProp('size', size)}/>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Type') === 'Question') {
    const variant = figma.selectedInstance.getEnum('Variant', {
        Outline: 'outline',
        Light: 'light',
    });
    const size = figma.selectedInstance.getEnum('Size', {
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
    });

    template = {
        id: 'InfoToken.Question',
        imports: ["import { InfoToken } from '@coveord/plasma-mantine';"],
        example: figma.code`<InfoToken.Question${figma.helpers.react.renderProp(
            'variant',
            variant,
        )}${figma.helpers.react.renderProp('size', size)}/>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Type') === 'Advice') {
    const variant = figma.selectedInstance.getEnum('Variant', {
        Outline: 'outline',
        Light: 'light',
    });
    const size = figma.selectedInstance.getEnum('Size', {
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
    });

    template = {
        id: 'InfoToken.Advice',
        imports: ["import { InfoToken } from '@coveord/plasma-mantine';"],
        example: figma.code`<InfoToken.Advice${figma.helpers.react.renderProp(
            'variant',
            variant,
        )}${figma.helpers.react.renderProp('size', size)}/>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Type') === 'Success') {
    const variant = figma.selectedInstance.getEnum('Variant', {
        Outline: 'outline',
        Light: 'light',
    });
    const size = figma.selectedInstance.getEnum('Size', {
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
    });

    template = {
        id: 'InfoToken.Success',
        imports: ["import { InfoToken } from '@coveord/plasma-mantine';"],
        example: figma.code`<InfoToken.Success${figma.helpers.react.renderProp(
            'variant',
            variant,
        )}${figma.helpers.react.renderProp('size', size)}/>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Type') === 'Warning') {
    const variant = figma.selectedInstance.getEnum('Variant', {
        Outline: 'outline',
        Light: 'light',
    });
    const size = figma.selectedInstance.getEnum('Size', {
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
    });

    template = {
        id: 'InfoToken.Warning',
        imports: ["import { InfoToken } from '@coveord/plasma-mantine';"],
        example: figma.code`<InfoToken.Warning${figma.helpers.react.renderProp(
            'variant',
            variant,
        )}${figma.helpers.react.renderProp('size', size)}/>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Type') === 'Error') {
    const variant = figma.selectedInstance.getEnum('Variant', {
        Outline: 'outline',
        Light: 'light',
    });
    const size = figma.selectedInstance.getEnum('Size', {
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
    });

    template = {
        id: 'InfoToken.Error',
        imports: ["import { InfoToken } from '@coveord/plasma-mantine';"],
        example: figma.code`<InfoToken.Error${figma.helpers.react.renderProp(
            'variant',
            variant,
        )}${figma.helpers.react.renderProp('size', size)}/>`,
        metadata: {nestable: true},
    };
} else {
    const variant = figma.selectedInstance.getEnum('Variant', {
        Outline: 'outline',
        Light: 'light',
    });
    const size = figma.selectedInstance.getEnum('Size', {
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
    });

    template = {
        id: 'InfoToken.Information',
        imports: ["import { InfoToken } from '@coveord/plasma-mantine';"],
        example: figma.code`<InfoToken.Information${figma.helpers.react.renderProp(
            'variant',
            variant,
        )}${figma.helpers.react.renderProp('size', size)}/>`,
        metadata: {nestable: true},
    };
}

export default template;
