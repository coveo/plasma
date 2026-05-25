import type {Plugin, TransformResult} from 'vite';

export interface PlasmaIconsMockPluginOptions {
    /**
     * Should the plugin transform import in dependencies (node_modules) as well.
     * This is useful if you want to mock icons in a dependency that imports @coveord/plasma-react-icons.
     *
     * @default true
     */
    includeDependencies?: boolean;
}

/**
 * Vitest plugin to mock @coveord/plasma-react-icons with the mock version.
 * The mock uses a Proxy that dynamically generates icon components based on the property name.
 * This plugin transforms named imports into property access on the default import.
 */
const plasmaIconsMockPlugin = ({includeDependencies = true}: PlasmaIconsMockPluginOptions = {}) =>
    ({
        name: 'coveord/plasma-react-icons/mock',
        enforce: 'pre',
        transform: (code: string, id: string): TransformResult => {
            // Only transform relevant files (e.g., .ts, .tsx, .js, .jsx) that import from @coveord/plasma-react-icons
            if (
                !code.includes('@coveord/plasma-react-icons') ||
                (!includeDependencies && id.includes('/node_modules/')) ||
                !/\.[cm]?[jt]sx?$/.test(id)
            ) {
                return null;
            }

            // Transform named imports to default import + destructuring
            // e.g., import { ArrowUpSize16Px, IconHome } from '@coveord/plasma-react-icons'
            // becomes:
            // import __plasmaIcons from '@coveord/plasma-react-icons/mock';
            // const ArrowUpSize16Px = __plasmaIcons.ArrowUpSize16Px;
            // const IconHome = __plasmaIcons.IconHome;
            const namedImportRegex = /import\s+(?!type\b)\{([^}]+)}\s+from\s+['"]@coveord\/plasma-react-icons['"];?/g;

            let transformedCode = code;
            const imports: string[] = [];

            // Collect all matches first to avoid issues with regex state and string mutation
            const matches = Array.from(code.matchAll(namedImportRegex));
            for (const match of matches) {
                // Extra safety: skip if this is a type-only import (shouldn't match, but just in case)
                if (/import\s+type\s*\{/.test(match[0])) {
                    continue;
                }

                const importedNames = match[1]
                    .split(',')
                    .map((name) => name.trim())
                    .filter((name) => !name.startsWith('type ')) // avoid type-only imports
                    .filter((name) => name);

                imports.push(...importedNames);

                // Remove the original import
                transformedCode = transformedCode.replace(match[0], '');
            }

            if (imports.length > 0) {
                // Add the default import and const declarations at the top
                const mockImport = `import __plasmaIconsMock from '@coveord/plasma-react-icons/mock';\n`;
                const constDeclarations = imports
                    .map((name) => `const ${name} = __plasmaIconsMock.${name};`)
                    .join('\n');
                transformedCode = mockImport + constDeclarations + '\n' + transformedCode;

                return {
                    code: transformedCode,
                    map: null,
                };
            }

            return null;
        },
    }) satisfies Plugin;

export default plasmaIconsMockPlugin;
