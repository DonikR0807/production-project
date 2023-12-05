module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'import/no-unresolved': 0,
        'react/function-component-definition': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'import/extensions': 0,
        'import/prefer-default-export': 0,
        indent: [0, 4],
        'react/react-in-jsx-scope': 0,
        'react/jsx-props-no-spreading': 1,
        'no-unused-vars': 1,
        'no-shadow': 'off',
        'react/require-default-props': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
    },
    globals: {
        __IS_DEV__: true,
    },
};
