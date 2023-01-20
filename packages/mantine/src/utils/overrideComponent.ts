/**
 * Allows to override static properties from a component function
 *
 * @param component The component which holds the static properties
 * @param properties The new static properties to assign on the component
 * @returns A new component with the specified properties. It doesn't change the original component
 * @example const Menu = overrideComponent(MantineMenu, {Item: MyMenuItem}); // Menu.Item will equal MyMenuItem
 */
export const overrideComponent = <
    Component extends (...args: Parameters<Component>) => ReturnType<Component>,
    StaticProperties = Record<keyof Component, never>
>(
    component: Component,
    properties: StaticProperties
): ((...args: Parameters<Component>) => ReturnType<Component>) & Component & StaticProperties => {
    const componentClone = (...args: Parameters<Component>) => component(...args);
    return Object.assign(componentClone, component, properties);
};
