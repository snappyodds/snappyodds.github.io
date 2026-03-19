<script lang="ts" setup>
import constants from './pages/constants';


  useHead({
    title: 'SnappyOdds | Premium Sports Betting Insights',
    link: [
      {
        rel: 'canonical',
        href: constants.APP_URL
      }
    ],
    meta: [
      // Standard Meta
      { name: 'keywords', content: 'betting odds, free betting picks, VIP accumulators, sports betting, football predictions, daily sure odds, AI betting insights' },
      { name: 'author', content: 'SnappyOdds' },
      { name: 'robots', content: 'index, follow' },

      // Theme Colors with Media Queries
      { name: 'theme-color', content: '#f8fafc', media: '(prefers-color-scheme: light)' },
      { name: 'theme-color', content: '#020617', media: '(prefers-color-scheme: dark)' },

      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: constants.APP_URL },
      { property: 'og:title', content: 'SnappyOdds | Premium Sports Betting Insights' },
      { property: 'og:description', content: 'Stop guessing and start winning. Access free daily betting picks, or join our VIP community for AI-driven predictions and massive accumulators.' },
      { property: 'og:image', content: constants.APP_URL + 'icon-512-maskable.png' },
      { property: 'og:site_name', content: 'SnappyOdds' },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: constants.APP_URL },
      { name: 'twitter:title', content: 'SnappyOdds | Premium Sports Betting Insights' },
      { name: 'twitter:description', content: 'Stop guessing and start winning. Access free daily betting picks, or join our VIP community for AI-driven predictions and massive accumulators.' },
      { name: 'twitter:image', content: constants.APP_URL + 'icon-512-maskable.png' }
    ]
  })
</script>

<template>
  <!-- <div class="grid min-h-screen grid-rows-[auto_1fr_auto] w-full overflow-x-hidden"> -->
  <Header />
  <main class="grow">
    <NuxtPage />
  </main>
  <Footer />
  <!-- </div> -->
</template>

<style scoped></style>