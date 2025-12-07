/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// Detect production build (Netlify)
const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [react()],

  // ❗ Disable Storybook tests entirely in production
  test: isProd
    ? {
        include: [], // no tests executed
        exclude: ["**/*.stories.*", ".storybook/**"]
      }
    : {
        projects: [
          {
            extends: true,
            plugins: [
              storybookTest({
                configDir: path.join(dirname, ".storybook")
              })
            ],
            test: {
              name: "storybook",
              browser: {
                enabled: true,
                headless: true,
                provider: playwright({}),
                instances: [{ browser: "chromium" }]
              },
              setupFiles: [".storybook/vitest.setup.ts"]
            }
          }
        ]
      }
});
