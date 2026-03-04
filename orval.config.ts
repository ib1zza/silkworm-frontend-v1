import { defineConfig } from 'orval';

export default defineConfig({
  silkworm: {
    input: {
      target: 'https://digital-twilight.ru/swagger/v1/swagger.json',
    },
    output: {
      mode: 'split',
      target: 'src/api/generated/index.ts',
      schemas: 'src/api/generated/schemas',
      client: 'axios',
      override: {
        mutator: {
          path: './src/api/http.ts',
          name: 'customInstance',
        },
      },
    },
  },
});
