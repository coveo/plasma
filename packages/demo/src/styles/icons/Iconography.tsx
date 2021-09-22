import {icons} from '@react-vapor/tokens';
import * as React from 'react';
import classNames from 'classnames';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export const Iconography = () => (
    <VaporComponent id="list" title="Iconography" usage="List of all icons available, and their variants">
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Variants</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(icons)
                    .sort()
                    .map((iconName) => (
                        <IconSet key={iconName} iconName={iconName} variants={(icons as any)[iconName]} />
                    ))}
            </tbody>
        </table>
    </VaporComponent>
);

const IconSet = ({iconName, variants}: {iconName: string; variants: Record<string, string>}) => (
    <tr>
        <td>{iconName}</td>
        <td>
            {Object.entries(variants).map(([name, svgString]) => (
                <div key={name} className="flex flex-center">
                    <span className="mr1">{name}</span>
                    <Icon name={name} svgString={svgString} />
                </div>
            ))}
        </td>
    </tr>
);

const Icon = ({name, svgString}: {name: string; svgString: string}) => {
    const ref = React.useRef<HTMLSpanElement>();

    React.useEffect(() => {
        ref.current.innerHTML = svgString;
    }, []);

    return (
        <span
            ref={ref}
            className={classNames('icon', {
                'mod-16': name.includes('16'),
                'mod-24': name.includes('24'),
                'mod-32': name.includes('32'),
            })}
        />
    );
};

export default Iconography;
