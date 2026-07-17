# @coveord/plasma-tokens

Design tokens of the Plasma Design System.

#### What is a design token?

Simply put, a design token is a stored design decision. It can be understood as a variable that holds the result of a choice (in this case made in Figma). Decisions can be made about multiple different subjects, for example colors, typography, spacing, etc. Therefore, it is important to consider that design tokens come in as many types as there are design subjects.

#### Objective of this package

Distribute design tokens to all Coveo products that rely on the Plasma Design System through code.

## Installation

```bash
npm install @coveord/plasma-tokens
```

For TypeScript users: the package provides its own type declarations.

## Usage

Tokens are provided through multiple outputs. Choose the format that best suits your needs.

### TypeScript

```ts
import * as PlasmaTokens from '@coveord/plasma-tokens';

PlasmaTokens.color.primary.actionBlue[6]; // '#1372ec'
```

### Sass

```scss
@import '~@coveord/plasma-tokens/scss';
// or individual libraries
@import '~@coveord/plasma-tokens/scss/Colors';

.something {
    background-color: $plasma-color-primary-action-blue-6;
}
```

### CSS

First include the css file you want tokens from in your page.

```html
<link href="/node_modules/@coveord/plasma-tokens/css/Colors.css" rel="stylesheet" />
```

Tokens in CSS are exposed as [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

```css
.something {
    background-color: var(--plasma-color-primary-action-blue-6);
}
```

### Icons

All icons are located under the `icons` folder in `.svg` format.

If you want to use icons in a React application, refer to [`@coveord/plasma-react-icons`](https://github.com/coveo/plasma/tree/master/packages/react-icons).

## Available token libraries

| Library Name | Available Formats     | Description                                                                       |
| ------------ | --------------------- | --------------------------------------------------------------------------------- |
| `Icons`      | svg, typescript       | xml markup of the svg elements of all the icons and their variants.               |
| `Colors`     | typescript, scss, css | Values of the different palettes used throughout plasma, also contains gradients. |
