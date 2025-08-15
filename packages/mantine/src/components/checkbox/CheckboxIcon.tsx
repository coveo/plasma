import {IconCheck, IconMinus} from '@coveord/plasma-react-icons';
import {ComponentPropsWithoutRef, FunctionComponent} from 'react';

interface CheckboxIconProps extends ComponentPropsWithoutRef<'svg'> {
    indeterminate: boolean | undefined;
}

export const CheckboxIcon: FunctionComponent<CheckboxIconProps> = ({indeterminate, ...others}: CheckboxIconProps) => {
    if (indeterminate) {
        return <IconMinus stroke={3} {...others} />;
    }

    return <IconCheck stroke={3} {...others} />;
};
