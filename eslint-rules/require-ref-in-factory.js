/**
 * Custom ESLint rule to ensure Mantine factory and polymorphicFactory callbacks include ref parameter
 * @fileoverview Flags calls to identifiers named 'factory' or 'polymorphicFactory' that omit ref parameter
 */

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Ensure Mantine factory and polymorphicFactory callbacks include and forward ref parameter',
            category: 'Best Practices',
            recommended: true,
        },
        messages: {
            missingRef: 'Factory callback must include "ref" parameter (or "_ref" if unused)',
        },
        schema: [],
    },
    create(context) {
        /**
         * Check if a node is a call to factory or polymorphicFactory
         */
        function isFactoryCall(node) {
            if (!node || node.type !== 'CallExpression') {
                return false;
            }

            const callee = node.callee;

            // Direct identifier: factory(...) or polymorphicFactory(...)
            if (callee.type === 'Identifier') {
                return callee.name === 'factory' || callee.name === 'polymorphicFactory';
            }

            // Member expression: M.factory(...) or M.polymorphicFactory(...)
            if (callee.type === 'MemberExpression' && callee.property.type === 'Identifier') {
                return callee.property.name === 'factory' || callee.property.name === 'polymorphicFactory';
            }

            return false;
        }

        /**
         * Check if a function/arrow function includes ref parameter
         */
        function hasRefParameter(func) {
            if (!func || !func.params) {
                return true; // If no params info, assume it's ok to avoid false positives
            }

            // For Mantine factories, ref is typically the second parameter
            // factory<T>((props, ref) => ...)
            // polymorphicFactory<T>((props, ref) => ...)
            
            if (func.params.length < 2) {
                return false; // Must have at least 2 parameters (props, ref)
            }

            const refParam = func.params[1];
            
            // Check if the second parameter is named 'ref' or '_ref'
            if (refParam.type === 'Identifier') {
                return refParam.name === 'ref' || refParam.name === '_ref';
            }

            return false;
        }

        return {
            CallExpression(node) {
                if (!isFactoryCall(node)) {
                    return;
                }

                // Check if the first argument is a function (arrow or regular)
                const firstArg = node.arguments[0];
                if (!firstArg) {
                    return;
                }

                let funcToCheck = null;

                if (firstArg.type === 'ArrowFunctionExpression' || firstArg.type === 'FunctionExpression') {
                    funcToCheck = firstArg;
                } 
                // Handle wrapped function expressions (e.g., in parentheses or type assertions)
                else if (firstArg.type === 'TSAsExpression' || firstArg.type === 'TSTypeAssertion') {
                    const expr = firstArg.expression;
                    if (expr && (expr.type === 'ArrowFunctionExpression' || expr.type === 'FunctionExpression')) {
                        funcToCheck = expr;
                    }
                }

                if (funcToCheck && !hasRefParameter(funcToCheck)) {
                    context.report({
                        node: funcToCheck,
                        messageId: 'missingRef',
                    });
                }
            },
        };
    },
};
