import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://jeffercbs.me",
  integrations: [sitemap(), tailwind(), icon()],
  redirects: {
    "/blog/": "blog/1",
    "/en/blog/": "/blog/1",
    "/en/blog/p/[...slug]": "/blog/p/[...slug]",
    "/en/services": "/en/services/web",
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
