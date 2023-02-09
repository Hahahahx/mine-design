module.exports = {
  extends: [
    "turbo",
    "prettier",
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:solid/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:mdx/recommended",
  ],
  plugins: [
    "solid",
    "jsx-a11y",
    "@typescript-eslint",
    "import",
    "simple-import-sort",
  ],
  rules: {
    "import/first": "warn",
    "import/newline-after-import": "warn",
    "import/no-duplicates": "error",
    "import/no-named-as-default-member": "off",
    "simple-import-sort/imports": "off",
    "simple-import-sort/exports": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-namespace": "off",
    "solid/reactivity": "off",
    "@typescript-eslint/no-var-requires": "off",
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  settings: {
    "mdx/code-blocks": true,
    "mdx/language-mapper": {},
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        project: ["packages/*/tsconfig.json", "apps/*/tsconfig.json"],
        alwaysTryTypes: true,
      },
    },
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true, //启用全局strict mode
    },
  },
};
