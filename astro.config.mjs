// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: 'https://ec2854.fish',
    integrations: [mdx()],
    markdown: {
        shikiConfig: {
            themes: {
                light: 'github-light',
                dark: 'catppuccin-mocha',
            },
        }
    },
    vite: {
        plugins: [tailwindcss()],
    },
})
