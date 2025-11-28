<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { Bookmark, Star, Heart, Circle } from 'lucide-vue-next'
import ScrapbookDecorations from '../components/ScrapbookDecorations.vue'

const scrollY = ref(0)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrollY.value = window.scrollY
  })
})
</script>

<template>
  <div class="relative">

    <!-- Scrapbook Decorations Component -->
    <ScrapbookDecorations />

    <!-- Sticky Navigation - Washi Tape Style -->
    <nav class="sticky top-0 z-50 bg-amber-200/80 dark:bg-amber-900/50 backdrop-blur-sm shadow-sm">
      <div class="max-w-7xl mx-auto px-6 py-3">
        <div class="flex items-center justify-between">
          <RouterLink to="/" class="flex items-center gap-3 group">
            <div
              class="w-6 h-6 bg-rose-400 dark:bg-rose-600 rotate-45 group-hover:rotate-90 transition-transform duration-500 shadow-md">
            </div>
            <span
              class="font-handwriting text-xl text-stone-800 dark:text-stone-100 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors duration-300 relative">
              A Room of My Own
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-400 dark:bg-rose-500 group-hover:w-full transition-all duration-300"></span>
            </span>
          </RouterLink>
          <div class="hidden md:flex items-center gap-6">
            <RouterLink to="/books"
              class="relative py-2 text-stone-700 dark:text-stone-300 font-medium transition-all duration-300 group">
              <span class="relative">
                书籍
                <span
                  class="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 dark:bg-rose-400 group-hover:w-full transition-all duration-300"></span>
              </span>
            </RouterLink>
            <RouterLink to="/movies"
              class="relative py-2 text-stone-700 dark:text-stone-300 font-medium transition-all duration-300 group">
              <span class="relative">
                电影
                <span
                  class="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 dark:bg-rose-400 group-hover:w-full transition-all duration-300"></span>
              </span>
            </RouterLink>
            <RouterLink to="/music"
              class="relative py-2 text-stone-700 dark:text-stone-300 font-medium transition-all duration-300 group">
              <span class="relative">
                音乐
                <span
                  class="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 dark:bg-rose-400 group-hover:w-full transition-all duration-300"></span>
              </span>
            </RouterLink>
            <RouterLink to="/perfume"
              class="relative py-2 text-stone-700 dark:text-stone-300 font-medium transition-all duration-300 group">
              <span class="relative">
                香水
                <span
                  class="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 dark:bg-rose-400 group-hover:w-full transition-all duration-300"></span>
              </span>
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content Area -->
    <main class="max-w-7xl mx-auto px-6 py-12 relative z-20">

      <!-- Hero Collage Section -->
      <section class="mb-20 relative">
        <!-- Background Paper Texture -->
        <div
          class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTdlNWUxIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30 dark:opacity-10">
        </div>

        <div class="relative grid md:grid-cols-2 gap-8 items-center">
          <!-- Left Side - Title -->
          <div class="space-y-6">
            <div class="inline-block p-4 bg-white dark:bg-stone-800 shadow-lg -rotate-1deg relative group">
              <h1 class="text-6xl md:text-7xl font-bold text-stone-900 dark:text-stone-100 leading-tight">
                我的<br />
                <span class="relative inline-block text-rose-600 dark:text-rose-400">
                  收藏册
                  <span
                    class="absolute bottom-1 left-0 w-0 h-0.5 bg-rose-600 dark:bg-rose-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </h1>
            </div>

            <div
              class="p-6 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-400 dark:border-amber-600 rotate-1deg shadow-md">
              <p class="text-lg text-stone-700 dark:text-stone-300 leading-relaxed font-medium">
                这是我的私人博物馆 🏛️<br />
                收藏着书籍、电影、音乐和香水<br />
                每一件都有故事要说
              </p>
            </div>

            <div class="flex gap-3 flex-wrap">
              <div
                class="px-4 py-2 bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 text-sm font-medium shadow-sm -rotate-2deg hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default">
                # 生活美学
              </div>
              <div
                class="px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium shadow-sm rotate-1deg hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default">
                # 感官日记
              </div>
              <div
                class="px-4 py-2 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-sm font-medium shadow-sm -rotate-1deg hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default">
                # 收藏家
              </div>
            </div>
          </div>

          <!-- Right Side - Polaroid Style Images -->
          <div class="relative h-[500px]">
            <!-- Polaroid 1 -->
            <div
              class="absolute top-0 right-12 w-60 bg-white dark:bg-stone-800 p-3 shadow-2xl rotate-[8deg] hover:rotate-[4deg] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:z-9999 transition-all duration-300 cursor-pointer z-10">
              <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop&q=80"
                alt="Books" class="w-full aspect-square object-cover mb-2" />
              <p class="text-center font-handwriting text-stone-700 dark:text-stone-300">最近在读的书 📖</p>
            </div>

            <!-- Polaroid 2 -->
            <div
              class="absolute top-32 left-8 w-56 bg-white dark:bg-stone-800 p-3 shadow-2xl -rotate-6deg hover:-rotate-2deg hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:z-9999 transition-all duration-300 cursor-pointer z-20">
              <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=400&fit=crop&q=80"
                alt="Cinema" class="w-full aspect-square object-cover mb-2" />
              <p class="text-center font-handwriting text-stone-700 dark:text-stone-300">电影之夜 🎬</p>
            </div>

            <!-- Polaroid 3 -->
            <div
              class="absolute bottom-8 right-4 w-52 bg-white dark:bg-stone-800 p-3 shadow-2xl rotate-12deg hover:rotate-8deg hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:z-9999 transition-all duration-300 cursor-pointer z-30">
              <img src="https://images.unsplash.com/photo-1619983081563-430f63602796?w=400&h=400&fit=crop&q=80"
                alt="Perfume" class="w-full aspect-square object-cover mb-2" />
              <p class="text-center font-handwriting text-stone-700 dark:text-stone-300">香水收藏 ✨</p>
            </div>

            <!-- Decorative Elements -->
            <div class="absolute top-20 left-0 w-16 h-16">
              <Star :size="40" class="text-amber-400 dark:text-amber-600 fill-current opacity-60" />
            </div>
            <div class="absolute bottom-0 left-20">
              <Heart :size="32" class="text-rose-400 dark:text-rose-600 fill-current opacity-60" />
            </div>
          </div>
        </div>
      </section>

      <!-- Category Cards - Scrapbook Style -->
      <section class="space-y-16">

        <!-- Books Section -->
        <RouterLink to="/books" class="group block">
          <div
            class="relative p-8 md:p-12 bg-linear-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-4 border-amber-200 dark:border-amber-800 hover:border-amber-400 dark:hover:border-amber-600 transition-all shadow-lg hover:shadow-2xl">
            <!-- Washi Tape -->
            <div class="absolute -top-3 left-12 w-32 h-6 bg-amber-300/60 dark:bg-amber-700/60 -rotate-2deg"></div>
            <div class="absolute -top-3 right-20 w-24 h-6 bg-rose-300/60 dark:bg-rose-700/60 rotate-3deg"></div>

            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <Bookmark :size="32" class="text-amber-600 dark:text-amber-400" />
                  <h2 class="text-4xl font-bold text-stone-900 dark:text-stone-100">阅读笔记</h2>
                </div>
                <p class="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                  从小说到诗集，从童话到哲学。每一本书都是一次精神的远行，
                  在文字的迷宫里寻找共鸣与答案。
                </p>
                <div class="flex gap-2 flex-wrap">
                  <span
                    class="px-3 py-1 bg-white dark:bg-stone-800 text-xs text-stone-600 dark:text-stone-400 shadow-sm">博尔赫斯</span>
                  <span
                    class="px-3 py-1 bg-white dark:bg-stone-800 text-xs text-stone-600 dark:text-stone-400 shadow-sm">加西亚·马尔克斯</span>
                  <span
                    class="px-3 py-1 bg-white dark:bg-stone-800 text-xs text-stone-600 dark:text-stone-400 shadow-sm">圣埃克苏佩里</span>
                </div>
                <div class="pt-4">
                  <span class="text-amber-600 dark:text-amber-400 font-bold group-hover:underline">查看全部 4 本 →</span>
                </div>
              </div>

              <div class="relative">
                <img src="/小王子手绘本的一些插图 特别可爱_1_梦小圆_来自小红书网页版.jpg"
                  alt="Reading"
                  class="w-full aspect-4/3 object-cover shadow-xl group-hover:shadow-2xl transition-shadow" />
                <div
                  class="absolute -bottom-3 -right-3 w-24 h-24 bg-amber-400 dark:bg-amber-600 flex items-center justify-center shadow-lg rotate-[8deg]">
                  <span class="text-3xl font-bold text-white">4</span>
                </div>
              </div>
            </div>
          </div>
        </RouterLink>

        <!-- Movies Section -->
        <RouterLink to="/movies" class="group block">
          <div
            class="relative p-8 md:p-12 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-4 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all shadow-lg hover:shadow-2xl">
            <!-- Washi Tape -->
            <div class="absolute -top-3 left-24 w-28 h-6 bg-blue-300/60 dark:bg-blue-700/60 rotate-2deg"></div>
            <div class="absolute -top-3 right-32 w-20 h-6 bg-purple-300/60 dark:bg-purple-700/60 -rotate-3deg"></div>

            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div class="relative order-2 md:order-1">
                <img src="/海上钢琴师｜构图x色彩_1_FabulousMovie_来自小红书网页版.jpg"
                  alt="Cinema"
                  class="w-full aspect-4/3 object-cover shadow-xl group-hover:shadow-2xl transition-shadow" />
                <div
                  class="absolute -bottom-3 -left-3 w-24 h-24 bg-blue-400 dark:bg-blue-600 flex items-center justify-center shadow-lg rotate-[-8deg]">
                  <span class="text-3xl font-bold text-white">89</span>
                </div>
                <!-- Film Strip Decoration -->
                <div class="absolute -top-2 -right-2 w-12 h-full bg-stone-800 dark:bg-stone-300 opacity-20"></div>
              </div>

              <div class="space-y-4 order-1 md:order-2">
                <div class="flex items-center gap-3">
                  <Circle :size="32" class="text-blue-600 dark:text-blue-400 fill-current" />
                  <h2 class="text-4xl font-bold text-stone-900 dark:text-stone-100">观影手册</h2>
                </div>
                <p class="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                  从经典到艺术片，从好莱坞到欧洲电影。
                  镜头语言诉说着导演的诗意，光影交织成永恒的瞬间。
                </p>
                <div class="flex gap-2 flex-wrap">
                  <span
                    class="px-3 py-1 bg-white dark:bg-stone-800 text-xs text-stone-600 dark:text-stone-400 shadow-sm">科幻</span>
                  <span
                    class="px-3 py-1 bg-white dark:bg-stone-800 text-xs text-stone-600 dark:text-stone-400 shadow-sm">文艺</span>
                  <span
                    class="px-3 py-1 bg-white dark:bg-stone-800 text-xs text-stone-600 dark:text-stone-400 shadow-sm">悬疑</span>
                  <span
                    class="px-3 py-1 bg-white dark:bg-stone-800 text-xs text-stone-600 dark:text-stone-400 shadow-sm">成长</span>
                </div>
                <div class="pt-4">
                  <span class="text-blue-600 dark:text-blue-400 font-bold group-hover:underline">查看全部 89 部 →</span>
                </div>
              </div>
            </div>
          </div>
        </RouterLink>

        <!-- Music & Perfume Grid -->
        <div class="grid md:grid-cols-2 gap-8">

          <!-- Music -->
          <RouterLink to="/music" class="group block">
            <div
              class="relative h-full p-8 bg-linear-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-4 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all shadow-lg hover:shadow-2xl">
              <!-- Washi Tape Corner -->
              <div
                class="absolute top-0 right-0 w-20 h-20 bg-purple-300/40 dark:bg-purple-700/40 rotate-45 transform translate-x-10 -translate-y-10">
              </div>

              <div class="space-y-6">
                <div class="relative w-full aspect-square bg-white dark:bg-stone-800 p-2 shadow-lg -rotate-2deg">
                  <img src="/SVT团体照 适合当电脑壁纸_1_17的克拉（求关注）_来自小红书网页版.jpg"
                    alt="Music" class="w-full h-full object-cover" />
                </div>

                <div class="space-y-3">
                  <h2 class="text-3xl font-bold text-stone-900 dark:text-stone-100">音乐清单</h2>
                  <p class="text-stone-700 dark:text-stone-300 leading-relaxed">
                    在音符的流淌中找到共鸣与慰藉。
                  </p>
                  <div class="flex items-center gap-2">
                    <div class="flex-1 h-1 bg-purple-300 dark:bg-purple-700"></div>
                    <span class="text-2xl font-bold text-purple-600 dark:text-purple-400">342</span>
                  </div>
                  <span class="inline-block text-purple-600 dark:text-purple-400 font-bold group-hover:underline">进入播放列表
                    →</span>
                </div>
              </div>
            </div>
          </RouterLink>

          <!-- Perfume -->
          <RouterLink to="/perfume" class="group block">
            <div
              class="relative h-full p-8 bg-linear-to-br from-rose-50 to-orange-50 dark:from-rose-950/20 dark:to-orange-950/20 border-4 border-rose-200 dark:border-rose-800 hover:border-rose-400 dark:hover:border-rose-600 transition-all shadow-lg hover:shadow-2xl">
              <!-- Decorative Corner -->
              <div
                class="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-rose-400 dark:border-rose-600">
              </div>

              <div class="space-y-6">
                <div class="relative w-full aspect-square bg-white dark:bg-stone-800 p-2 shadow-lg rotate-2deg">
                  <img src="/香水瓶合集_1_香水与猫_来自小红书网页版.jpg"
                    alt="Perfume" class="w-full h-full object-cover" />
                </div>

                <div class="space-y-3">
                  <h2 class="text-3xl font-bold text-stone-900 dark:text-stone-100">香氛档案</h2>
                  <p class="text-stone-700 dark:text-stone-300 leading-relaxed">
                    香水如同隐形的记忆，捕捉瞬间的情感与氛围。
                  </p>
                  <div class="flex items-center gap-2">
                    <div class="flex-1 h-1 bg-rose-300 dark:bg-rose-700"></div>
                    <span class="text-2xl font-bold text-rose-600 dark:text-rose-400">23</span>
                  </div>
                  <span class="inline-block text-rose-600 dark:text-rose-400 font-bold group-hover:underline">探索香气
                    →</span>
                </div>
              </div>
            </div>
          </RouterLink>

        </div>
      </section>

      <!-- Quote Section - Sticky Note Style -->
      <section class="my-20">
        <div class="max-w-2xl mx-auto">
          <div class="relative p-8 bg-yellow-100 dark:bg-yellow-900/30 shadow-2xl -rotate-1deg">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-amber-200/60 dark:bg-amber-800/60"></div>
            <blockquote
              class="text-2xl md:text-3xl text-stone-800 dark:text-stone-200 leading-relaxed font-handwriting text-center">
              好事总会发生在<br />
              下个转弯<br />
              
            </blockquote>
            <p class="text-right mt-4 text-stone-600 dark:text-stone-400">— 《恒温动物》</p>
          </div>
        </div>
      </section>

    </main>

    <!-- Footer - Notebook Bottom -->
    <footer
      class="mt-20 border-t-4 border-dashed border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-stone-900 px-6 py-8 relative z-20">
      <div class="max-w-7xl mx-auto text-center space-y-4">
        <div class="flex justify-center gap-6 text-sm text-stone-600 dark:text-stone-400">
          <a href="#" class="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">豆瓣</a>
          <a href="#" class="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">Instagram</a>
          <a href="#" class="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">小红书</a>
          <a href="#" class="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">Email</a>
        </div>
        <p class="text-xs text-stone-500 dark:text-stone-500">
          © 2025 我的收藏册 · 用心记录生活中的美好
        </p>
      </div>
    </footer>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');

.font-handwriting {
  font-family: 'Kalam', cursive;
}
</style>