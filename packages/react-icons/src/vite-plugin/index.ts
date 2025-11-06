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
        transform: (code: string) => {
            // Only transform files that import from @coveord/plasma-react-icons
            if (!code.includes('@coveord/plasma-react-icons')) {
                return null;
            }

            // Transform named imports to default import + destructuring
            // e.g., import { IconA, IconB } from '@coveord/plasma-react-icons'
            // becomes: import __plasmaIcons from '@coveord/plasma-react-icons/mock'; const IconA = __plasmaIcons.IconA; const IconB = __plasmaIcons.IconB;
            const namedImportRegex = /import\s+\{([^}]+)}\s+from\s+['"]@coveord\/plasma-react-icons['"]/g;

            let transformedCode = code;
            let match;
            const imports: string[] = [];

            while ((match = namedImportRegex.exec(code)) !== null) {
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
