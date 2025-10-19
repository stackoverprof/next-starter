import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import prettierConfig from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import preferArrow from 'eslint-plugin-prefer-arrow';
import prettier from 'eslint-plugin-prettier';
import tailwindcss from 'eslint-plugin-tailwindcss';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    prettierConfig, // This disables ESLint rules that conflict with Prettier
    {
        plugins: {
            perfectionist: perfectionist,
            'prefer-arrow': preferArrow,
            tailwindcss: tailwindcss,
            prettier: prettier,
        },
    },
    {
        ignores: [
            'node_modules/**',
            '.next/**',
            'out/**',
            'build/**',
            '.vscode/**',
            'next-env.d.ts',
        ],
    },
    {
        rules: {
            // Prettier integration
            'prettier/prettier': 'error',

            // Keep non-formatting rules (Prettier handles formatting)
            'no-multiple-empty-lines': [
                'error',
                { max: 1, maxEOF: 0, maxBOF: 0 },
            ],
            'padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: '*', next: 'return' },
                {
                    blankLine: 'always',
                    prev: ['const', 'let', 'var'],
                    next: '*',
                },
                {
                    blankLine: 'any',
                    prev: ['const', 'let', 'var'],
                    next: ['const', 'let', 'var'],
                },
            ],

            // Essential Rules (High Impact, Low Friction)
            'no-console': 'warn',
            'prefer-const': 'error',
            'react/self-closing-comp': 'error',

            // Quote preferences: double quotes for imports/props, single for strings
            quotes: [
                'error',
                'single',
                {
                    avoidEscape: true,
                    allowTemplateLiterals: true,
                },
            ],
            'jsx-quotes': ['error', 'prefer-double'],
            'func-style': [
                'error',
                'expression',
                { allowArrowFunctions: true },
            ],
            'prefer-arrow-callback': 'error',
            'prefer-arrow/prefer-arrow-functions': [
                'warn',
                {
                    disallowPrototype: true,
                    singleReturnOnly: false,
                    classPropertiesAllowed: false,
                },
            ],

            // Moderate Rules (Good Practice)
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                    ],
                    'newlines-between': 'always',
                },
            ],
            'no-unused-vars': 'error',
            // Perfectionist rules for intuitive sorting
            'perfectionist/sort-jsx-props': [
                'error',
                {
                    type: 'natural',
                    order: 'asc',
                    groups: [
                        'react-specific',
                        'content',
                        'dimensions',
                        'styling',
                        'event-handlers',
                    ],
                    customGroups: {
                        'react-specific': [
                            'key',
                            'ref',
                            'href',
                            'target',
                            'rel',
                        ],
                        content: [
                            'src',
                            'alt',
                            'children',
                            'title',
                            'aria-label',
                            'aria-hidden',
                        ],
                        dimensions: ['width', 'height', 'size', 'rows', 'cols'],
                        styling: ['className', 'style', 'id'],
                        'event-handlers': [
                            'onClick',
                            'onChange',
                            'onSubmit',
                            'onFocus',
                            'onBlur',
                        ],
                    },
                },
            ],

            // Strict Rules (High Quality, More Friction)
            '@typescript-eslint/no-explicit-any': 'warn',
            'import/no-unresolved': 'error',

            // Tailwind CSS rules
            'tailwindcss/classnames-order': 'error',
            'tailwindcss/no-custom-classname': 'off', // Disabled to allow CSS custom properties
            'tailwindcss/no-contradicting-classname': 'warn',
        },
    },
];

export default eslintConfig;
