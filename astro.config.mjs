// @ts-check
import { defineConfig,envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output:"server", //Inicializa un servidor que solo se usa cuando se necesite
  integrations: [tailwind()],
  env:{
    schema:{
      SHOW_BUY_BUTTON: envField.boolean({context: 'server',access: 'public'}),
      SCORE_API_ENDPOINT: envField.string({context: 'client',access: 'public'}),
    }
  }
});