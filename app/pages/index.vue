<script lang="ts" setup>

</script>

<template>
      <section class="relative py-20 lg:py-32 overflow-hidden bg-snappy-darker transition-colors">
            <div
              class="absolute top-[-10%] left-[-10%] w-96 h-96 bg-snappy-gold opacity-20 dark:opacity-10 blur-3xl rounded-full">
            </div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                  <span
                    class="inline-block py-1 px-3 rounded-full bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-bold mb-6 border border-orange-200 dark:border-orange-800/50">🔥
                        Over 10,000+ Winners this month</span>
                  <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                        Win Smarter, <br />
                        <span class="text-transparent bg-clip-text bg-linear-to-r from-snappy-gold to-orange-500">Not
                              Harder.</span>
                  </h1>
                  <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
                        Stop guessing. Start investing. Get access to highly analyzed free
                        daily betting odds, or upgrade to VIP for premium insights, deep AI
                        analytics, and massive accumulators.
                  </p>
                  <div class="flex flex-col sm:flex-row justify-center gap-4">
                        <NuxtLink href=""
                          class="px-8 py-4 rounded-xl border-2 border-snappy-dark  font-bold hover:bg-white hover:text-snappy-dark transition w-full sm:w-auto text-center">View
                              Free Odds</NuxtLink>
                        <NuxtLink href=""
                          class="px-8 py-4 rounded-xl bg-linear-to-r from-snappy-gold to-orange-500 text-white font-bold shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition transform w-full sm:w-auto text-center">Join
                              VIP Now</NuxtLink>
                  </div>
            </div>
      </section>

      <section
        class="py-16 bg-snappy-dark transition-colors border-y border-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div class="flex justify-between items-end mb-8">
                        <div>
                              <h2 class="text-3xl font-bold">Today's Hot Picks</h2>
                              <p class="text-gray-500 mt-2">
                                    Swipe to see the most anticipated matches
                              </p>
                        </div>
                        <div class="hidden md:flex gap-2">
                              <button onclick="scrollCarousel('left')"
                                class="p-3 rounded-full bg-gray-800 hover:bg-snappy-gold hover:text-white transition">
                                    ←
                              </button>
                              <button onclick="scrollCarousel('right')"
                                class="p-3 rounded-full bg-gray-800 hover:bg-snappy-gold hover:text-white transition">
                                    →
                              </button>
                        </div>
                  </div>

                  <div id="odds-carousel"
                    class="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
                        <div
                          class="snap-center shrink-0 w-80 bg-snappy-card-dark rounded-2xl p-6 border border-gray-800 shadow-sm">
                              <div class="flex justify-between text-sm text-gray-500 mb-4">
                                    <span>Premier League</span>
                                    <span>20:00 GMT</span>
                              </div>
                              <div class="flex justify-between items-center mb-6">
                                    <span class="font-bold text-lg">Arsenal</span>
                                    <span class="text-gray-400 font-bold text-sm">VS</span>
                                    <span class="font-bold text-lg">Chelsea</span>
                              </div>
                              <div class="grid grid-cols-3 gap-2">
                                    <button
                                      class="py-2 rounded bg-gray-800 hover:bg-snappy-gold hover:text-white border border-gray-700 font-semibold transition flex flex-col items-center">
                                          <span>1</span><span class="text-gray-500 text-xs mt-1">1.95</span>
                                    </button>
                                    <button
                                      class="py-2 rounded bg-gray-800 hover:bg-snappy-gold hover:text-white border border-gray-700 font-semibold transition flex flex-col items-center">
                                          <span>X</span><span class="text-gray-500 text-xs mt-1">3.40</span>
                                    </button>
                                    <button
                                      class="py-2 rounded bg-gray-800 hover:bg-snappy-gold hover:text-white border border-gray-700 font-semibold transition flex flex-col items-center">
                                          <span>2</span><span class="text-gray-500 text-xs mt-1">3.80</span>
                                    </button>
                              </div>
                        </div>

                        <div
                          class="snap-center shrink-0 w-80 bg-linear-to-br from-snappy-darker to-snappy-dark rounded-2xl p-6 border border-snappy-gold shadow-md relative overflow-hidden">
                              <div
                                class="absolute top-0 right-0 bg-snappy-gold text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    VIP ONLY
                              </div>
                              <div class="flex justify-between text-sm text-gray-400 mb-4">
                                    <span>La Liga</span>
                                    <span>21:30 GMT</span>
                              </div>
                              <div class="flex justify-between items-center mb-6 text-white">
                                    <span class="font-bold text-lg">Real Madrid</span>
                                    <span class="text-gray-500 font-bold text-sm">VS</span>
                                    <span class="font-bold text-lg">Barcelona</span>
                              </div>
                              <NuxtLink href=""
                                class="block w-full text-center py-3 bg-white/10 hover:bg-snappy-gold rounded-lg text-white font-semibold transition backdrop-blur-sm border border-white/20">
                                    Unlock Odds 🔒
                              </NuxtLink>
                        </div>

                        <div
                          class="snap-center shrink-0 w-80 bg-snappy-card-dark rounded-2xl p-6 border border-gray-800 shadow-sm">
                              <div class="flex justify-between text-sm text-gray-500 mb-4">
                                    <span>Serie A</span>
                                    <span>19:45 GMT</span>
                              </div>
                              <div class="flex justify-between items-center mb-6">
                                    <span class="font-bold text-lg">Juventus</span>
                                    <span class="text-gray-400 font-bold text-sm">VS</span>
                                    <span class="font-bold text-lg">AC Milan</span>
                              </div>
                              <div
                                class="w-full text-center py-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg font-bold border border-green-200 dark:border-green-800">
                                    Pick: Over 2.5 Goals
                              </div>
                        </div>
                  </div>
            </div>
      </section>

      <section class="py-20 bg-snappy-darker transition-colors">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div class="text-center max-w-3xl mx-auto mb-16">
                        <h2 class="text-3xl md:text-4xl font-bold mb-4">
                              The Snappy <span class="text-snappy-gold">Advantage</span>
                        </h2>
                        <p class="text-gray-400">
                              We don't rely on gut feelings. Our picks are backed by rigorous
                              statistical analysis and insider information.
                        </p>
                  </div>

                  <div class="grid md:grid-cols-3 gap-8">
                        <div
                          class="bg-snappy-card-dark p-8 rounded-2xl shadow-sm border border-gray-800">
                              <div
                                class="w-14 h-14 bg-orange-900/30 rounded-xl flex items-center justify-center text-2xl mb-6">
                                    🤖
                              </div>
                              <h3 class="text-xl font-bold mb-3">AI-Driven Insights</h3>
                              <p class="dark:text-gray-400">
                                    Our proprietary algorithm scans thousands of data points
                                    including player form, weather, and historical matchups to find
                                    value bets.
                              </p>
                        </div>
                        <div
                          class="bg-snappy-card-dark p-8 rounded-2xl shadow-sm border border-gray-800">
                              <div
                                class="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-2xl mb-6">
                                    📈
                              </div>
                              <h3 class="text-xl font-bold mb-3">Verified Track Record</h3>
                              <p class="dark:text-gray-400">
                                    Transparency is key. We post our wins and our losses. Our VIP
                                    members enjoy a sustained +82% strike rate over the last 6
                                    months.
                              </p>
                        </div>
                        <div
                          class="bg-snappy-card-dark p-8 rounded-2xl shadow-sm border border-gray-800">
                              <div
                                class="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-2xl mb-6">
                                    💬
                              </div>
                              <h3 class="text-xl font-bold mb-3">Private Community</h3>
                              <p class="dark:text-gray-400">
                                    Join thousands of smart punters in our exclusive Telegram group.
                                    Share slips, discuss strategies, and get live in-play alerts.
                              </p>
                        </div>
                  </div>
            </div>
      </section>

      <section class="py-20 bg-snappy-dark text-white border-y border-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                        <div class="max-w-2xl">
                              <h2 class="text-3xl md:text-4xl font-bold mb-4">
                                    Recent VIP Cashouts 💸
                              </h2>
                              <p class="text-gray-400">
                                    Don't just take our word for it. Here are some of the slips we
                                    landed for our VIP members this week.
                              </p>
                        </div>
                        <NuxtLink href=""
                          class="px-6 py-3 rounded-lg bg-snappy-gold text-white font-bold hover:bg-orange-500 transition whitespace-nowrap">Get
                              on the next slip</NuxtLink>
                  </div>

                  <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-gray-900 border border-green-500/30 rounded-2xl p-6 relative">
                              <div
                                class="absolute top-4 right-4 bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/50">
                                    WON
                              </div>
                              <div class="text-sm text-gray-400 mb-4">
                                    Weekend Acca • Total Odds:
                                    <span class="text-snappy-gold font-bold text-lg">14.50</span>
                              </div>
                              <ul class="space-y-3 mb-6 border-l-2 border-gray-800 pl-4">
                                    <li>
                                          <span class="text-green-400 mr-2">✓</span> Arsenal to Win
                                          (1.50)
                                    </li>
                                    <li>
                                          <span class="text-green-400 mr-2">✓</span> Man City Over 2.5
                                          Goals (1.85)
                                    </li>
                                    <li>
                                          <span class="text-green-400 mr-2">✓</span> Real Madrid -1
                                          Handicap (2.10)
                                    </li>
                                    <li>
                                          <span class="text-green-400 mr-2">✓</span> Inter Milan to Win
                                          to Nil (2.50)
                                    </li>
                              </ul>
                        </div>

                        <div class="bg-gray-900 border border-green-500/30 rounded-2xl p-6 relative">
                              <div
                                class="absolute top-4 right-4 bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/50">
                                    WON
                              </div>
                              <div class="text-sm text-gray-400 mb-4">
                                    Midweek Double • Total Odds:
                                    <span class="text-snappy-gold font-bold text-lg">3.80</span>
                              </div>
                              <ul class="space-y-3 mb-6 border-l-2 border-gray-800 pl-4">
                                    <li>
                                          <span class="text-green-400 mr-2">✓</span> Bayern Munich &
                                          BTTS (2.20)
                                    </li>
                                    <li>
                                          <span class="text-green-400 mr-2">✓</span> PSG to Win Both
                                          Halves (1.72)
                                    </li>
                              </ul>
                        </div>
                  </div>
            </div>
      </section>
</template>

<style scoped></style>