// astro.config.ts
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import yaml from 'vite-plugin-yaml2';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import { presetTypography, presetUno } from 'unocss';
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({
    injectReset: true,
    // or a path to the reset file
    transformers: [transformerVariantGroup()],
    presets: [presetTypography(), presetUno()]
  }), svelte()],
  vite: {
    plugins: [yaml()]
  }
});