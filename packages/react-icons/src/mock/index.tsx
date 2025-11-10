import {forwardRef, type SVGProps} from 'react';
import {MockUtils} from './MockUtils';

/**
 * You can use the following mock in jest to avoid loading the actual icons during tests, it can slow down your tests if you don't.
 * Just add the following entry to your moduleNameMappter config
 * '^@coveord/plasma-react-icons$': '<rootDir>/node_modules/@coveord/plasma-react-icons/mock',
 */

const handler = {
    get: (obj: any, prop: string) => {
        if (prop.startsWith('Icon')) {
            const TablerIconMock = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
                ({height, width, className, ...others}, ref) => {
                    const tablerClassName = MockUtils.formatToTablerClassName(prop);
                    const combinedClassName = className ? [tablerClassName, className].join(' ') : tablerClassName;
                    return (
                        <svg
                            ref={ref}
                            width={width || height || '1em'}
                            height={height || width || '1em'}
                            className={combinedClassName}
                            {...others}
                        />
                    );
                },
            );
            TablerIconMock.displayName = prop;
            return TablerIconMock;
        }

        const IconMock = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(({height, width, ...others}, ref) => (
            <svg
                ref={ref}
                role="img"
                aria-label={MockUtils.formatLabel(prop)}
                width={width || height || '1em'}
                height={height || width || '1em'}
                {...others}
            />
        ));
        IconMock.displayName = prop;
        return IconMock;
    },
};

export default new Proxy({}, handler);
