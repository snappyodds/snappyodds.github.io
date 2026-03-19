<script lang="ts" setup>

  useHead({
    title: "Snappy Odds",
    meta: [
      {
        name: "description",
        content: "Snappy Odds is a sports betting odds comparison website that helps users find the best odds for their bets. We compare odds from multiple bookmakers to ensure that our users get the best value for their bets.",
      },
    ],
  });
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