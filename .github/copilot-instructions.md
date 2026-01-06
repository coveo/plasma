# GitHub Copilot Instructions for Plasma

## Repository Overview

Plasma is Coveo's design system used in Coveo Cloud Administration Console. This is a monorepo containing multiple packages that provide design tokens, Mantine-themed components, React icons, and documentation.

### Key Packages

- **`@coveord/plasma-mantine`**: Plasma-flavoured Mantine theme with custom components
- **`@coveord/plasma-tokens`**: Design tokens (colors, spacing, typography, etc.)
- **`@coveord/plasma-react-icons`**: Icon components for React
- **`@coveord/plasma-website`**: Documentation and demo site
- **`@coveord/plasma-storybook`**: Storybook for component documentation

### Architecture

- **Monorepo**: Managed with pnpm workspaces and Turbo for build orchestration
- **UI Framework**: React 18+ with Mantine UI library
- **Build Tool**: SWC for fast TypeScript compilation
- **Testing**: Vitest with React Testing Library
- **Package Manager**: pnpm (version 10.25.0+)

## Coding Standards

### Code Style

- **Prettier**: Automatic formatting with these settings:
    - Print width: 120 characters
    - Tab width: 4 spaces
    - Single quotes for strings
    - No bracket spacing in objects
- **ESLint**: TypeScript ESLint with React-specific rules
- **Stylelint**: SCSS linting with standard configuration
- **Case Convention**: camelCase for keyframes and most identifiers

### TypeScript

- Use TypeScript for all new code
- Enable strict mode
- Prefer type inference where possible
- Export types and interfaces for public APIs

### React

- Use functional components with hooks
- Follow React 18+ patterns
- Use JSX runtime (no need to import React)
- Prefer named exports over default exports

### File Naming

- Components: PascalCase (e.g., `Button.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Tests: Same name as file with `.test.tsx` or `.test.ts` suffix
- Styles: Same name as component with `.module.scss` or `.scss` suffix

## Testing Practices

### Test Framework

- **Vitest**: Primary test runner (replacing Jest/Enzyme)
- **React Testing Library**: For component testing
- **Testing Library principles**: Test user behavior, not implementation details

### Writing Tests

- All new tests must use Vitest and React Testing Library
- Avoid using Enzyme (being phased out)
- Test files should be co-located with source files
- Use descriptive test names that explain the behavior being tested
- Run tests in UTC timezone (`TZ=UTC`)

### Running Tests

```bash
# Run all tests from root
pnpm test

# Run tests in a specific package
cd packages/{packageName}
pnpm test

# Watch mode for development
pnpm test:watch

# Debug tests in Chrome DevTools
pnpm test:debug
```

### Test Coverage

- Write unit tests for all new components and utilities
- Focus on user-facing behavior and edge cases
- Test accessibility features

## Build and Development

### Setup

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start development server
pnpm start
```

### Development Workflow

1. Run `pnpm start` to launch the development server with hot reload
2. Changes to any package source files trigger automatic rebuild
3. The demo site is available locally for testing

### Linting and Formatting

```bash
# Auto-fix linting and formatting issues
pnpm lintfix

# This runs:
# - Prettier on all supported files
# - ESLint on TypeScript files
# - Stylelint on SCSS/CSS files
```

### Pre-commit Hooks

- **Husky**: Manages Git hooks
- **lint-staged**: Runs linting and formatting on staged files
- Automatically runs on `git commit`:
    - Sorts package.json files
    - Formats code with Prettier
    - Fixes style issues with Stylelint

## Contribution Guidelines

### Commit Messages

**REQUIRED**: All commits must follow [Conventional Commits](https://www.conventionalcommits.org/) specification.

Format: `<type>(<scope>): <description>`

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:

- `feat(mantine): add new Button variant`
- `fix(tokens): correct primary color value`
- `docs(readme): update installation instructions`

Use the commit helper if needed:

```bash
git add .
npm run commit-cli
```

### Pull Request Process

1. Create a feature branch from the default branch
2. Make your changes following the coding standards
3. Ensure all tests pass: `pnpm test`
4. Ensure code is properly formatted: `pnpm lintfix`
5. Commit with conventional commit messages
6. Push your branch and create a pull request
7. CI will automatically:
    - Lint changed files
    - Run tests
    - Build and deploy a demo to S3
    - Add demo links as PR comments

### Code Review

- PRs require review before merging
- CI checks must pass
- Follow existing patterns and conventions in the codebase
- Update documentation for public API changes

## Package Management

### Adding Dependencies

```bash
# Add to a specific package
cd packages/{packageName}
pnpm add <package-name>

# Add to root (dev dependencies)
pnpm add -Dw <package-name>
```

### Workspace Dependencies

- Use `workspace:*` protocol for internal dependencies
- Example: `"@coveord/plasma-tokens": "workspace:*"`

### Peer Dependencies

- Mantine packages are peer dependencies in `@coveord/plasma-mantine`
- React and React DOM are peer dependencies for all React packages
- Mark optional peer dependencies in `peerDependenciesMeta`

## Common Tasks

### Creating a New Component

1. Create component file in appropriate package under `src/components/`
2. Write TypeScript component with proper typing
3. Add tests in co-located `.test.tsx` file
4. Export from package's main index file
5. Add to Storybook if applicable
6. Update package documentation

### Updating Design Tokens

1. Modify tokens in `packages/tokens/src/`
2. Ensure backward compatibility or document breaking changes
3. Run build to regenerate token outputs
4. Test affected components

### Debugging

- Use browser DevTools for runtime debugging
- Use `pnpm test:debug` for test debugging
- Check console for build/lint errors
- Review CI logs for automated checks

## Important Notes

### Browser Support

- Support last 1 version of major browsers
- IE 11 support included
- Cover 90% browser usage

### License

- All packages distributed under Apache 2.0 license
- Maintain copyright headers

### Deprecations

- `@coveord/plasma-style` and `@coveord/plasma-react` are in maintenance mode
- See `v53` branch for legacy packages
- New development focuses on Mantine-based components

### Security

- Follow OpenSSF Scorecard recommendations
- Run CodeQL security scanning
- Review dependency vulnerabilities with Renovate
- Use step-security/harden-runner in GitHub Actions

## Additional Resources

- **Demo Site**: https://plasma.coveo.com/
- **Repository**: https://github.com/coveo/plasma
- **Mantine Documentation**: https://mantine.dev/
- **Conventional Commits**: https://www.conventionalcommits.org/
