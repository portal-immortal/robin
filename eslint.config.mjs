import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';

export default defineConfig([
  globalIgnores(['dist/**', '.astro/**', 'node_modules/**', 'public/**']),

  {
    extends: [js.configs.recommended, tseslint.configs.recommended, eslintPluginAstro.configs.recommended],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // TypeScript already catches genuinely undefined identifiers with
      // full type information; no-undef produces false positives on
      // ambient globals (e.g. Astro's ImageMetadata) that only exist as
      // types. See typescript-eslint's FAQ on this rule.
      'no-undef': 'off',
    },
  },

  {
    // Astro frontmatter is TypeScript — without this, `interface` and
    // `as const` (used throughout src/utils and every component's Props
    // type) fail to parse.
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
]);
