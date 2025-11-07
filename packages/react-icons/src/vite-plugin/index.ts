import type {Plugin} from 'vite';

/**
 * Vitest plugin to mock @coveord/plasma-react-icons with the mock version.
 * The mock uses a Proxy that dynamically generates icon components based on the property name.
 * This plugin transforms named imports into property access on the default import.
 */
const plasmaIconsMockPlugin = () =>
    ({
        name: 'coveord/plasma-react-icons/mock',
        enforce: 'pre',
        transform: (code: string, id: string) => {
            // Only transform relevant files (e.g., .ts, .tsx, .js, .jsx) that import from @coveord/plasma-react-icons
            if (!code.includes('@coveord/plasma-react-icons') || !/\.(ts|tsx|js|jsx)$/.test(id)) {
                return null;
            }

            // Transform named imports to default import + destructuring
            // e.g., import { IconA, IconB } from '@coveord/plasma-react-icons'
            // becomes: import __plasmaIcons from '@coveord/plasma-react-icons/mock'; const IconA = __plasmaIcons.IconA; const IconB = __plasmaIcons.IconB;
            // Only match value imports, not type-only imports
            const namedImportRegex = /import\s+(?!type\b)\{([^}]+)}\s+from\s+['"]@coveord\/plasma-react-icons['"]/g;

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
