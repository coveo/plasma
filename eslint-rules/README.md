# Custom ESLint Rules

This directory contains custom ESLint rules for the Plasma project.

## Rules

### `local/require-ref-in-factory`

Ensures that Mantine `factory` and `polymorphicFactory` callbacks include the `ref` parameter.

#### Why?

Mantine's factory functions create components that should properly handle ref forwarding. This rule ensures that the callback function provided to `factory()` or `polymorphicFactory()` includes a `ref` parameter, even if it's prefixed with `_` to indicate it's intentionally unused.

#### ✅ Good Examples

```tsx
// Properly includes ref parameter
export const Component1 = factory((props, ref) => <div ref={ref} {...props} />);

// Uses _ref to indicate intentionally unused
export const Component2 = factory((props, _ref) => <div {...props} />);

// Works with polymorphicFactory too
export const Component3 = polymorphicFactory((props, ref) => <div ref={ref} {...props} />);
```

#### ❌ Bad Examples

```tsx
// Missing ref parameter - ERROR
export const Component1 = factory((props) => <div {...props} />);

// Only has one parameter - ERROR
export const Component2 = polymorphicFactory((props) => {
    return <div {...props} />;
});
```

## Using the Rules

The rules are automatically loaded in `eslint.config.mjs`:

```javascript
import localRules from './eslint-rules/index.js';

export default tsEslint.config({
    plugins: {
        local: localRules,
    },
    rules: {
        'local/require-ref-in-factory': 'error',
    },
});
```

## Testing the Rules

To test if the rules are working correctly, you can create a test file with violations and run ESLint on it:

```bash
npx eslint path/to/test-file.tsx
```
