module.exports = {
  env: {
    browser: true,
    es2021: true, // Gebruik es2021 of hoger voor de nieuwste features
    node: true, // Als je ook Node.js gebruikt
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended', // Voor toegankelijkheid
    'plugin:import/errors', // Controleer import-statements
    'plugin:import/warnings',
    'plugin:import/typescript', // Als je TypeScript gebruikt
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect', // Detecteert automatisch de React-versie
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], // Voor import-plugin
      },
    },
  },
  plugins: ['react-refresh', 'jsx-a11y', 'import'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/prop-types': 'off',
    'no-unused-vars': 'warn', // Waarschuwingen voor ongebruikte variabelen
    'react/jsx-uses-react': 'off', // Niet nodig met React 17+
    'react/react-in-jsx-scope': 'off', // Niet nodig met React 17+
    'import/no-unresolved': 'error', // Verbiedt imports zonder bekende paden
    'import/named': 'error', // Verbiedt gebruik van verkeerde named imports
    'import/default': 'error', // Verbiedt gebruik van verkeerde default imports
    'import/namespace': 'error', // Verbiedt gebruik van verkeerde namespace imports
  },
};
