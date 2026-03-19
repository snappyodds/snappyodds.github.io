import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/fonts"],
  sanctum: {
    baseUrl: "http://localhost:8000",
  },
  css: ["~/assets/css/app.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  components: {
    dirs: [
      {
        path: "~/components",
        pathPrefix: false,
      },
    ],
  },
  app: {
    baseURL: "/",
    head: {
      meta: [
        {
          name: "theme-color",
          content: "#f5f5f5",
          media: "(prefers-color-scheme: light)",
        },
        {
          name: "theme-color",
          content: "#1d293d",
          media: "(prefers-color-scheme: dark)",
        },
        {
          name: "mobile-web-app-capable",
          content: "yes",
        },
        {
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
          sizes: "any",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
        {
          rel: "preload",
          as: "font",
          href: "/fonts/InstrumentSans-Regular.woff2",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  future: {
    compatibilityVersion: 4,
  },
});
