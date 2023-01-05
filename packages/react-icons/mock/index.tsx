/**
 * You can use the following mock in jest to avoid loading the actual icons during tests, it can slow down your tests if you don't.
 * Just add the following entry to your moduleNameMappter config
 * '^@coveord/plasma-react-icons$': '<rootDir>/node_modules/@coveord/plasma-react-icons/mock',
 */

/**
 * Transforms ArrowUpSize16Px into arrowUp
 */
const formatLabel = (name: string) => {
    const label = name.replace(/(.+)Size\d+Px/, '$1');
    return label.charAt(0).toLowerCase() + label.slice(1);
};

const handler = {
    get: (obj, prop: string) => (props) => <span role="img" aria-label={formatLabel(prop)} {...props}></span>,
};

module.exports = new Proxy({}, handler);
