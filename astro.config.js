// astro.config.ts
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import yaml from 'vite-plugin-yaml2'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true, // or a path to the reset file
      transformers: [
        transformerVariantGroup(),
      ],
    }),
  ],
  vite: {
    plugins: [yaml()]
  }
});
