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
- **Package Manager**: pnpm

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
- Tests: Same name as file with `.spec.tsx` or `.spec.ts` suffix
- Styles: CSS module with the same name as component with `.module.css` or `.css` suffix

## Testing Practices

### Test Framework

- **Vitest**: Primary test runner
- **React Testing Library**: For component testing
- **Testing Library principles**: Test user behavior, not implementation details

### Writing Tests

- All new tests must use Vitest and React Testing Library
- Test files should be co-located with source files
- Use descriptive test names that explain the behavior being tested
- Avoid using `should` at the start of test names; use present tense instead
    - **Correct**: `it('returns true when value is valid')`, `it('throws an error')`
    - **Incorrect**: `it('should return true when value is valid')`, `it('should throw an error')`
- Run tests in UTC timezone (`TZ=UTC`)

### Test Coverage

- Write unit tests for all new components and utilities
- Focus on user-facing behavior and edge cases
- Test accessibility features

### Documentation

- Update documentation when making changes to public APIs
- Keep README files up to date with new features
- Document complex logic and architectural decisions
- Add JSDoc comments for exported functions and components

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

Examples (specify the subject when possible):

- `feat(mantine, button): add new variant`
- `fix(tokens, colors): correct primary color value`
- `docs(readme): update installation instructions`

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
3. Add tests in co-located `.spec.tsx` file
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

- Support last 1 versions of major browsers
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
