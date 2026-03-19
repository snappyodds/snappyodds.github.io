<script lang="ts" setup>

</script>

<template>
      <nav class="sticky top-0 z-50 bg-snappy-dark shadow-sm">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                  <div class="flex justify-between h-16 items-center">
                        <NuxtLink href=""
                          class="text-2xl font-black text-transparent bg-clip-text bg-linear-to-r from-snappy-gold to-orange-500">
                              SnappyOdds.

                        </NuxtLink>

                        <div class="hidden md:flex space-x-8 items-center">
                              <NuxtLink href="" class="font-medium hover:text-snappy-gold transition">Home

                              </NuxtLink>
                              <NuxtLink href="" class="font-medium hover:text-snappy-gold transition">Free Odds

                              </NuxtLink>
                              <NuxtLink href=""
                                class="font-medium text-snappy-gold hover:text-snappy-gold-hover transition flex items-center gap-1">
                                    VIP Access
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                          <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                          </path>
                                    </svg>

                              </NuxtLink>
                              <NuxtLink href="" class="font-medium hover:text-snappy-gold transition">About

                              </NuxtLink>
                        </div>

                        <div class="flex items-center gap-4">
                              <!-- <button id="theme-toggle"
                                class="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                                    🌓
                              </button> -->
                              <NuxtLink href=""
                                class="hidden md:inline-flex px-5 py-2 rounded-lg  bg-white text-snappy-dark font-semibold hover:opacity-90 transition">
                                    Login
                              </NuxtLink>

                              <button id="mobile-menu-btn"
                                class="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-snappy-gold transition">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                              </button>
                        </div>
                  </div>

                  <div id="mobile-menu"
                    class="hidden md:hidden absolute top-16 left-0 w-full bg-white dark:bg-snappy-dark border-b border-gray-200 dark:border-gray-800 shadow-xl transition-colors">
                        <div class="px-4 pt-2 pb-6 space-y-2 flex flex-col">
                              <NuxtLink href=""
                                class="block px-3 py-3 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                                    Home
                              </NuxtLink>
                              <NuxtLink href=""
                                class="block px-3 py-3 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                                    Free
                                    Odds
                              </NuxtLink>
                              <NuxtLink href=""
                                class="block px-3 py-3 rounded-md font-medium text-snappy-gold hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                                    VIP
                                    Access 👑
                              </NuxtLink>
                              <NuxtLink href=""
                                class="block px-3 py-3 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                                    About
                              </NuxtLink>
                              <NuxtLink href=""
                                class="block mt-4 px-3 py-3 text-center rounded-lg bg-snappy-dark dark:bg-white text-white dark:text-snappy-dark font-bold">
                                    Login
                                    / Register
                              </NuxtLink>
                        </div>
                  </div>
            </div>
      </nav>
</template>

<style scoped></style>