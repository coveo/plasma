import Svg from '../Svg';

const mods = ['', 'mod-16', 'mod-lg', 'mod-2x', 'mod-3x', 'mod-4x', 'mod-5x'];

export const IconModifiers = () => (
    <div className="sg-icons-mod">
        {mods.map((mod) => (
            <Svg key={mod} name="plus" className={`icon ${mod}`} />
        ))}
    </div>
);

export default IconModifiers;
