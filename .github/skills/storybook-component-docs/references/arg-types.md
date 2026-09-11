# Controls and arg types

Use explicit `argTypes` metadata so the Controls table remains useful to UX designers and developers.
Apply these rules to every argument intentionally exposed by the representative story.

## Required metadata

Define these fields for each exposed argument:

- `control` and `options`, when the value is directly editable
- `description`, written in plain language
- `table.type.summary`, showing the useful public type
- `table.defaultValue.summary`, showing the actual component default

Use string summaries for types and defaults.
Write union values with quotes when the values are string literals.

```tsx
argTypes: {
    disabled: {
        control: 'boolean',
        description: 'Disables the button.',
        table: {
            type: {summary: 'boolean'},
            defaultValue: {summary: 'false'},
        },
    },
    size: {
        control: 'select',
        options: ['sm', 'md', 'lg'],
        description: 'Sets the size of the control.',
        table: {
            type: {summary: "'sm' | 'md' | 'lg'"},
            defaultValue: {summary: "'md'"},
        },
    },
}
```

## Descriptions

Describe the effect that the prop has on the rendered component.
Use the component JSDoc as source material, then rewrite unclear or implementation-oriented text.

Prefer:

- `Disables the button.`
- `Sets the number of visible items.`
- `Runs when the user selects the button.`

Avoid:

- Repeating only the prop name, such as `Disabled state`.
- Describing the Storybook widget, such as `Toggles the boolean control`.
- Claiming behavior not supported by implementation or tests.

## Types

Show the public type that helps consumers understand the prop.

- Use primitives such as `boolean`, `number`, and `string` directly.
- Show string literal unions, such as `'sm' | 'md' | 'lg'`.
- Use public named types when expanding the type would be noisy, such as `ReactNode` or `TooltipProps`.
- Include `undefined` only when it clarifies a meaningful union. Optionality already appears separately in generated API information.
- Describe callbacks with their public alias or signature, such as `ClickHandler<HTMLButtonElement>`.

Do not use the control widget type as the public prop type.
For example, a boolean demo toggle that inserts an icon does not change a public `ReactNode` prop into `boolean`.

## Defaults

Read component defaults from the implementation, wrapper configuration, or upstream component documentation.
Do not infer a component default from the representative story's `args`.

Use:

- `false`, `0`, or another literal for explicit defaults
- `'md'` for a string default
- `undefined` when an optional prop has no component default
- A concise expression such as `data.length` when that is the real computed default

Story `args` define the initial demo state, not the component API default.
They may differ intentionally so the demo contains meaningful content.

For a synthetic story-only argument, document the story default and the synthetic type.
Make the description clear that the argument controls the example rather than the component API.

## Controls

Match controls to the accepted argument values:

| Value                        | Control                                                           |
| ---------------------------- | ----------------------------------------------------------------- |
| Boolean                      | `boolean`                                                         |
| Number                       | `number` or an appropriate range                                  |
| Short string union           | `select`, `inline-radio`, or `radio` with `options`               |
| Free text                    | `text`                                                            |
| Callback                     | Storybook action, with no editable control                        |
| Complex object or React node | Disable the control or introduce a clearly named adapter argument |

Use `mapping` or a clearly named adapter argument when a simple control selects complex values.
Do not present an adapter value as though it were the public prop value.

For callbacks, retain an action and document the callback type and default:

```tsx
onClick: {
    action: 'clicked',
    description: 'Runs when the user selects the button.',
    table: {
        type: {summary: 'ClickHandler<HTMLButtonElement>'},
        defaultValue: {summary: 'undefined'},
    },
},
```

## Source order

Verify metadata against these sources:

1. Plasma component implementation and JSDoc
2. Wrapper defaults and preconfigured sub-components
3. Component tests
4. Read-only component specification
5. Mantine documentation for inherited props
6. Existing story metadata

When an inherited default depends on Mantine, verify the supported Mantine version instead of guessing.
Report discrepancies between the story and component API.

## Review

After building Storybook, confirm that each intentional row in Controls shows:

- A useful description
- The expected public type
- The actual component default
- A control that produces valid story arguments

Hide irrelevant inherited props with `table: {disable: true}` when they would distract from the representative demo.
