import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    coverage: {
      reporter: ['text', 'json-summary'],
      exclude: ['vitest.config.js', 'src/server.js'],
      thresholds: {
        statements: 90,
        lines: 90
      }
    }
  }
});
