<script setup lang="ts">
import { ref, computed } from 'vue'
import { Droplet, Sparkles, Wind, Sun, CloudRain, Flower2, Coffee, Heart, Star } from 'lucide-vue-next'
import ScrapbookDecorations from '../components/ScrapbookDecorations.vue'

// 当前筛选香调
const currentNote = ref('all')
const noteTypes = ['all', '花香调', '木质调', '果香调', '东方调', '清新调', '美食调']

// 季节/场合图标映射
const seasonIcons: Record<string, any> = {
  '春': Flower2,
  '夏': Sun,
  '秋': Wind,
  '冬': CloudRain,
  '日常': Coffee,
  '约会': Heart,
  '职场': Star
}

// 香水收藏
const perfumeCollection = ref([
  {
    id: 1,
    name: '含羞草与小豆蔻',
    brand: 'Jo Malone',
    fullName: 'Jo Malone Mimosa & Cardamom',
    concentration: 'EDP',
    volume: '50ml',
    year: 2013,
    perfumer: 'Christine Nagel',
    bottle: '/祖玛珑  Jo Malone含羞草与小豆蔻_1_绿子子_来自小红书网页版.jpg',
    topNotes: ['醛香', '柑橘', '豆蔻'],
    middleNotes: ['含羞草', '茉莉', '橙花'],
    baseNotes: ['香草', '广藿香', '雪松'],
    mainNote: '花香调',
    sillage: 5, // 香气扩散度 1-5
    longevity: 3, // 留香时间 1-5
    seasons: ['秋', '冬'],
    occasions: ['约会', '出游'],
    purchaseDate: '2024-07',
    story: '这支香是我在一个夏日的午后偶然发现的。含羞草的温柔与豆蔻的辛辣完美结合，像是一场温暖的秋日邂逅。每次喷上它，都能感受到一种独特的魅力。',
    feeling: '含羞草与小豆蔻给人一种温暖而又神秘的感觉，适合秋冬季节使用。它的香气层次丰富，既有花香的柔美，又有香料的深沉，非常适合约会或特别场合。',
    memories: '这是我正式闻过的第一支香水，也是迄今为止最喜欢的一款。它总是勾起我一段温柔的回忆。',
    rating: 5,
    color: 'from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20',
    accentColor: 'amber'
  },
  {
    id: 2,
    name: '圣日耳曼大道34号',
    brand: 'Diptyque',
    fullName: 'Diptyque 34 Boulevard Saint Germain',
    concentration: 'EDT',
    volume: '100ml',
    year: 2015,
    perfumer: 'Olivier Pescheux',
    bottle: '/Diptyque圣日尔曼大道34号淡香水_1_💎👑shalman🐒_来自小红书网页版.jpg',
    topNotes: ['公丁香', '肉桂', '黑加仑', '小豆蔻', '无花果叶', '粉红胡椒', '绿叶', '柑橘'],
    middleNotes: ['天竺葵', '鸢尾花', '晚香玉', '玫瑰', '紫罗兰'],
    baseNotes: ['树脂', '木质', '尤加利'],
    mainNote: '花香西普调',
    sillage: 4,
    longevity: 4,
    seasons: ['秋', '冬'],
    occasions: ['日常', '居家'],
    purchaseDate: '2025-08',
    story: '这支香水是Diptyque为纪念其位于巴黎圣日耳曼大道34号的首家店铺而创作的。香气复杂且富有层次，融合了多种花香与木质调，仿佛漫步在巴黎的街头，感受那份独特的浪漫与优雅。',
    feeling: '这是一支非常适合秋冬季节的香水，温暖而不失优雅。它的香气持久且变化丰富，适合日常使用，也适合在家中营造一种舒适的氛围。',
    memories: '让我想到巴黎街头的咖啡馆，悠闲的午后，温暖的壁炉，柴火在其中噼啪作响。',
    rating: 4,
    color: 'from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20',
    accentColor: 'cyan'
  },
  {
    id: 3,
    name: '迪奥小姐花漾',
    brand: 'Dior',
    fullName: 'Dior Miss Dior Blooming Bouquet',
    concentration: 'EDP',
    volume: '50ml',
    year: 2014,
    perfumer: 'François Demachy',
    bottle: '/QQ20251121-222703.png',
    topNotes: ['香豌豆', '香柠檬'],
    middleNotes: ['玫瑰', '牡丹'],
    baseNotes: ['麝香', '白木'],
    mainNote: '花香调',
    sillage: 5,
    longevity: 5,
    seasons: ['春', '夏'],
    occasions: ['约会', '日常'],
    purchaseDate: '2025-07',
    story: '迪奥小姐花漾是一支充满青春活力的香水，灵感来自于春天盛开的花朵。它以清新的香豌豆和香柠檬为前调，带来明亮的开端；中调的玫瑰与牡丹则展现出女性的柔美与优雅；基调的麝香和白木为整体增添了一份温暖与持久感。这支香水完美诠释了现代女性的独立与自信。',
    feeling: '这支香水非常适合春夏季节使用，清新而不失优雅。它的香气层次丰富，既有花香的甜美，又有木质的温暖。',
    memories: '在一个阳光明媚的夏日，从朋友身上闻到了这款香水，花香四溢，心情特别好。',
    rating: 5,
    color: 'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20',
    accentColor: 'purple'
  },
])

// 过滤后的香水
const filteredPerfumes = computed(() => {
  if (currentNote.value === 'all') return perfumeCollection.value
  return perfumeCollection.value.filter(perfume =>
    perfume.mainNote === currentNote.value
  )
})

// 统计
const stats = computed(() => {
  return {
    total: perfumeCollection.value.length,
    thisYear: perfumeCollection.value.filter(p => p.purchaseDate?.startsWith('2024')).length,
    avgRating: (perfumeCollection.value.reduce((sum, p) => sum + p.rating, 0) / perfumeCollection.value.length).toFixed(1)
  }
})

// 展开的香水ID
const expandedPerfume = ref<number | null>(null)

const toggleExpand = (id: number) => {
  expandedPerfume.value = expandedPerfume.value === id ? null : id
}

// 获取香气强度条
const getSillageWidth = (level: number) => {
  return `${(level / 5) * 100}%`
}
</script>

<template>
  <div class="relative min-h-screen">

    <!-- Decorations -->
    <ScrapbookDecorations />

    <!-- Sticky Navigation -->
    <nav class="sticky top-0 z-50 bg-indigo-200/80 dark:bg-indigo-900/50 backdrop-blur-sm shadow-sm">
      <div class="max-w-7xl mx-auto px-6 py-3">
        <div class="flex items-center justify-between">
          <RouterLink to="/" class="flex items-center gap-3 group">
            <div
              class="w-6 h-6 bg-indigo-400 dark:bg-indigo-600 rounded-full group-hover:rotate-90 transition-transform duration-500 shadow-md">
            </div>
            <span
              class="font-handwriting text-xl text-stone-800 dark:text-stone-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 relative">
              A Room of My Own
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 dark:bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </span>
          </RouterLink>
          <div class="flex items-center gap-6">
            <RouterLink to="/"
              class="text-stone-700 dark:text-stone-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium text-sm">
              返回首页</RouterLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-6 py-12 relative z-20">

      <!-- Page Header -->
      <section class="mb-16">
        <div class="grid md:grid-cols-2 gap-12 items-center">

          <!-- Left - Title -->
          <div class="space-y-6">
            <div class="inline-flex items-center gap-3 px-4 py-2 bg-white dark:bg-stone-800 shadow-md -rotate-1deg">
              <Droplet :size="24" class="text-indigo-600 dark:text-indigo-400" />
              <span class="text-sm font-bold text-stone-700 dark:text-stone-300 tracking-wider">FRAGRANCE DIARY</span>
            </div>

            <div class="bg-white dark:bg-stone-800 p-8 shadow-xl rotate-1deg group">
              <h1 class="text-5xl md:text-6xl font-bold text-stone-900 dark:text-stone-100 mb-4 leading-tight">
                我的<br />
                <span class="relative inline-block text-indigo-600 dark:text-indigo-400">
                  香氛日记
                  <span
                    class="absolute bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </h1>
              <p class="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                气味图书馆<br />
                在看不见的艺术中寻找自己
              </p>
            </div>

            <!-- Stats Cards -->
            <div class="grid grid-cols-3 gap-3">
              <div
                class="bg-linear-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 p-4 shadow-lg -rotate-2deg border-2 border-indigo-300 dark:border-indigo-700">
                <div class="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-1">{{ stats.total }}</div>
                <div class="text-xs text-indigo-600 dark:text-indigo-500 font-medium">款香水</div>
              </div>
              <div
                class="bg-linear-to-br from-pink-100 to-rose-100 dark:from-pink-900/40 dark:to-rose-900/40 p-4 shadow-lg rotate-1deg border-2 border-pink-300 dark:border-pink-700">
                <div class="text-2xl font-bold text-pink-700 dark:text-pink-400 mb-1">{{ stats.thisYear }}</div>
                <div class="text-xs text-pink-600 dark:text-pink-500 font-medium">今年新增</div>
              </div>
              <div
                class="bg-linear-to-br from-amber-100 to-yellow-100 dark:from-amber-900/40 dark:to-yellow-900/40 p-4 shadow-lg -rotate-1deg border-2 border-amber-300 dark:border-amber-700">
                <div class="text-2xl font-bold text-amber-700 dark:text-amber-400 mb-1">{{ stats.avgRating }}</div>
                <div class="text-xs text-amber-600 dark:text-amber-500 font-medium">平均评分</div>
              </div>
            </div>

            <div
              class="bg-linear-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-6 border-l-4 border-indigo-400 dark:border-indigo-600 shadow-lg rotate-1deg">
              <div class="flex items-start gap-3">
                <Sparkles :size="20" class="text-indigo-600 dark:text-indigo-400 mt-1 shrink-0" />
                <p class="text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-handwriting">
                  "香水是看不见的时尚，是让人记住你的方式，是情绪的隐形外衣。"
                </p>
              </div>
            </div>
          </div>

          <!-- Right - Perfume Bottles Illustration -->
          <div class="relative h-[500px]">
            <!-- Bottle 1 -->
            <div class="absolute bottom-12 left-1/4 -translate-x-1/2 w-24">
              <div
                class="bg-linear-to-b from-indigo-300 to-indigo-500 dark:from-indigo-600 dark:to-indigo-800 h-32 rounded-t-lg shadow-2xl rotate-[-8deg] hover:rotate-[-4deg] transition-transform duration-500">
                <div
                  class="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-indigo-400 dark:bg-indigo-700 rounded-sm">
                </div>
              </div>
            </div>

            <!-- Bottle 2 -->
            <div class="absolute bottom-8 left-1/2 -translate-x-1/2 w-28">
              <div
                class="bg-linear-to-b from-pink-300 to-pink-500 dark:from-pink-600 dark:to-pink-800 h-40 rounded-t-xl shadow-2xl rotate-[4deg] hover:rotate-2deg transition-transform duration-500">
                <div
                  class="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-pink-400 dark:bg-pink-700 rounded-full">
                </div>
              </div>
            </div>

            <!-- Bottle 3 -->
            <div class="absolute bottom-16 right-1/4 translate-x-1/2 w-20">
              <div
                class="bg-linear-to-b from-amber-300 to-amber-500 dark:from-amber-600 dark:to-amber-800 h-28 rounded-t-lg shadow-2xl -rotate-10deg hover:-rotate-6deg transition-transform duration-500">
                <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-amber-400 dark:bg-amber-700"></div>
              </div>
            </div>

            <!-- Decorative Elements -->
            <div class="absolute top-8 left-4 bg-purple-100 dark:bg-purple-900/40 p-4 shadow-lg rotate-12deg">
              <Flower2 :size="32" class="text-purple-600 dark:text-purple-400" />
            </div>

            <div class="absolute top-1/3 right-0 bg-pink-100 dark:bg-pink-900/40 px-4 py-3 shadow-lg rotate-[-8deg]">
              <p class="text-xs font-handwriting text-stone-700 dark:text-stone-300">✨ Scent<br />Memory</p>
            </div>

            <div class="absolute bottom-0 left-0">
              <Wind :size="40" class="text-cyan-400 dark:text-cyan-600 opacity-60" />
            </div>

            <div class="absolute top-0 right-12">
              <Sparkles :size="36" class="text-indigo-400 dark:text-indigo-600 opacity-60" />
            </div>
          </div>
        </div>
      </section>

      <!-- Note Filter -->
      <section class="mb-12">
        <div class="flex flex-wrap gap-3">
          <button v-for="note in noteTypes" :key="note" @click="currentNote = note" :class="[
            'px-6 py-3 font-medium text-sm shadow-md transition-all duration-300 border-2',
            currentNote === note
              ? 'bg-indigo-500 dark:bg-indigo-600 border-indigo-600 dark:border-indigo-500 text-white -rotate-2deg scale-110'
              : 'bg-white dark:bg-stone-800 border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-indigo-400 dark:hover:border-indigo-600 rotate-1deg hover:rotate-0'
          ]">
            {{ note === 'all' ? '全部香调' : note }}
          </button>
        </div>
      </section>

      <!-- Perfume Grid -->
      <section class="space-y-12">
        <div v-for="(perfume, index) in filteredPerfumes" :key="perfume.id" class="group">
          <!-- Perfume Card -->
          <div :class="[
            'relative bg-linear-to-br p-8 md:p-10 border-4 shadow-lg hover:shadow-2xl transition-all duration-500',
            perfume.color,
            index % 2 === 0
              ? 'border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-600'
              : 'border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600'
          ]">
            <!-- Decorative Tape -->
            <div :class="[
              'absolute -top-3 h-6',
              index % 3 === 0 ? 'left-12 w-32 bg-indigo-300/60 dark:bg-indigo-700/60 -rotate-2deg' :
                index % 3 === 1 ? 'right-16 w-28 bg-purple-300/60 dark:bg-purple-700/60 rotate-3deg' :
                  'left-20 w-36 bg-pink-300/60 dark:bg-pink-700/60 -rotate-1deg'
            ]"></div>

            <!-- Note Badge -->
            <div :class="[
              'absolute -top-4 -right-4 px-4 py-2 font-bold text-xs shadow-xl rotate-[8deg] border-2',
              `bg-${perfume.accentColor}-400 dark:bg-${perfume.accentColor}-600 border-${perfume.accentColor}-500 text-white`
            ]">
              {{ perfume.mainNote }}
            </div>

            <div class="grid md:grid-cols-[280px_1fr] gap-8">

              <!-- Left - Bottle -->
              <div class="space-y-4">
                <!-- Bottle Card -->
                <div class="relative">
                  <div
                    class="bg-white dark:bg-stone-800 p-4 shadow-2xl rotate-[-4deg] group-hover:-rotate-1deg transition-transform duration-500">
                    <img :src="perfume.bottle" :alt="perfume.name" class="w-full aspect-2/3 object-cover mb-3" />
                    <div class="space-y-1">
                      <p class="text-xs font-bold text-stone-800 dark:text-stone-200">{{ perfume.brand }}</p>
                      <p class="text-xs text-stone-600 dark:text-stone-400 line-clamp-2">{{ perfume.name }}</p>
                    </div>
                  </div>

                  <!-- Rating Badge -->
                  <div
                    class="absolute -bottom-3 -right-3 bg-amber-400 dark:bg-amber-600 w-14 h-14 rounded-full flex items-center justify-center shadow-xl -rotate-12deg">
                    <div class="text-center">
                      <div class="text-xl font-bold text-white">{{ perfume.rating }}</div>
                      <div class="text-xs text-amber-100">★</div>
                    </div>
                  </div>
                </div>

                <!-- Concentration & Volume -->
                <div class="bg-white dark:bg-stone-800 p-4 shadow-md space-y-2">
                  <div class="flex justify-between text-xs">
                    <span class="text-stone-600 dark:text-stone-400">浓度</span>
                    <span class="font-bold text-stone-800 dark:text-stone-200">{{ perfume.concentration }}</span>
                  </div>
                  <div class="flex justify-between text-xs">
                    <span class="text-stone-600 dark:text-stone-400">容量</span>
                    <span class="font-bold text-stone-800 dark:text-stone-200">{{ perfume.volume }}</span>
                  </div>
                  <div class="flex justify-between text-xs">
                    <span class="text-stone-600 dark:text-stone-400">入手</span>
                    <span class="font-bold text-stone-800 dark:text-stone-200">{{ perfume.purchaseDate }}</span>
                  </div>
                </div>

                <!-- Sillage & Longevity -->
                <div
                  class="bg-linear-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-4 shadow-md space-y-3">
                  <div>
                    <div class="flex justify-between text-xs mb-1">
                      <span class="text-stone-700 dark:text-stone-300 font-medium">扩散度</span>
                      <span class="text-stone-600 dark:text-stone-400">{{ perfume.sillage }}/5</span>
                    </div>
                    <div class="h-1.5 bg-stone-200 dark:bg-stone-700 rounded-full overflow-hidden">
                      <div
                        class="h-full bg-linear-to-r from-indigo-400 to-purple-500 dark:from-indigo-500 dark:to-purple-600"
                        :style="{ width: getSillageWidth(perfume.sillage) }"></div>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between text-xs mb-1">
                      <span class="text-stone-700 dark:text-stone-300 font-medium">留香时间</span>
                      <span class="text-stone-600 dark:text-stone-400">{{ perfume.longevity }}/5</span>
                    </div>
                    <div class="h-1.5 bg-stone-200 dark:bg-stone-700 rounded-full overflow-hidden">
                      <div class="h-full bg-linear-to-r from-pink-400 to-rose-500 dark:from-pink-500 dark:to-rose-600"
                        :style="{ width: getSillageWidth(perfume.longevity) }"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right - Info -->
              <div class="space-y-6">
                <!-- Title & Meta -->
                <div>
                  <div class="flex items-center gap-2 mb-2">
                    <h2 class="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100">
                      {{ perfume.name }}
                    </h2>
                  </div>
                  <p class="text-base text-stone-600 dark:text-stone-400 font-medium mb-1">{{ perfume.brand }}</p>
                  <p class="text-sm text-stone-500 dark:text-stone-500 italic mb-3">
                    {{ perfume.fullName }}
                  </p>
                  <div class="space-y-1 text-xs text-stone-600 dark:text-stone-400">
                    <p>
                      <span class="font-medium">调香师：</span>{{ perfume.perfumer }}
                    </p>
                    <p>
                      <span class="font-medium">发行年份：</span>{{ perfume.year }}
                    </p>
                  </div>
                </div>

                <!-- Notes Pyramid -->
                <div
                  class="bg-white/60 dark:bg-stone-800/60 backdrop-blur-sm p-6 shadow-md border-2 border-dashed border-indigo-300 dark:border-indigo-700">
                  <h3 class="text-sm font-bold text-indigo-700 dark:text-indigo-400 mb-4 flex items-center gap-2">
                    <Droplet :size="16" />
                    香调金字塔
                  </h3>
                  <div class="space-y-3">
                    <!-- Top Notes -->
                    <div>
                      <p class="text-xs text-stone-500 dark:text-stone-500 mb-1">前调 TOP</p>
                      <div class="flex flex-wrap gap-2">
                        <span v-for="note in perfume.topNotes" :key="note"
                          class="px-3 py-1 bg-amber-100 dark:bg-amber-900/40 text-xs text-amber-700 dark:text-amber-300 shadow-sm hover:shadow-md hover:scale-110 transition-all duration-200 cursor-default">
                          {{ note }}
                        </span>
                      </div>
                    </div>
                    <!-- Middle Notes -->
                    <div>
                      <p class="text-xs text-stone-500 dark:text-stone-500 mb-1">中调 HEART</p>
                      <div class="flex flex-wrap gap-2">
                        <span v-for="note in perfume.middleNotes" :key="note"
                          class="px-3 py-1 bg-pink-100 dark:bg-pink-900/40 text-xs text-pink-700 dark:text-pink-300 shadow-sm hover:shadow-md hover:scale-110 transition-all duration-200 cursor-default">
                          {{ note }}
                        </span>
                      </div>
                    </div>
                    <!-- Base Notes -->
                    <div>
                      <p class="text-xs text-stone-500 dark:text-stone-500 mb-1">后调 BASE</p>
                      <div class="flex flex-wrap gap-2">
                        <span v-for="note in perfume.baseNotes" :key="note"
                          class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-xs text-indigo-700 dark:text-indigo-300 shadow-sm hover:shadow-md hover:scale-110 transition-all duration-200 cursor-default">
                          {{ note }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Seasons & Occasions -->
                <div class="grid grid-cols-2 gap-4">
                  <!-- Seasons -->
                  <div
                    class="bg-linear-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-4 shadow-md">
                    <h3 class="text-xs font-bold text-cyan-700 dark:text-cyan-400 mb-3">适合季节</h3>
                    <div class="flex flex-wrap gap-2">
                      <span v-for="season in perfume.seasons" :key="season"
                        class="flex items-center gap-1 px-2 py-1 bg-white dark:bg-stone-800 text-xs text-stone-700 dark:text-stone-300 shadow-sm">
                        <component :is="seasonIcons[season]" :size="12" />
                        {{ season }}
                      </span>
                    </div>
                  </div>
                  <!-- Occasions -->
                  <div
                    class="bg-linear-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 shadow-md">
                    <h3 class="text-xs font-bold text-purple-700 dark:text-purple-400 mb-3">使用场合</h3>
                    <div class="flex flex-wrap gap-2">
                      <span v-for="occasion in perfume.occasions" :key="occasion"
                        class="flex items-center gap-1 px-2 py-1 bg-white dark:bg-stone-800 text-xs text-stone-700 dark:text-stone-300 shadow-sm">
                        <component :is="seasonIcons[occasion]" :size="12" />
                        {{ occasion }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Story -->
                <div
                  class="bg-white/60 dark:bg-stone-800/60 backdrop-blur-sm p-6 border-l-4 border-indigo-400 dark:border-indigo-600 shadow-md">
                  <div class="flex items-start gap-2 mb-3">
                    <Sparkles :size="18" class="text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
                    <h3 class="text-sm font-bold text-indigo-700 dark:text-indigo-400">初遇故事</h3>
                  </div>
                  <p class="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    {{ perfume.story }}
                  </p>
                </div>

                <!-- Expand Button -->
                <button @click="toggleExpand(perfume.id)"
                  class="flex items-center gap-2 px-5 py-3 bg-linear-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 hover:from-indigo-200 hover:to-purple-200 dark:hover:from-indigo-900/60 dark:hover:to-purple-900/60 text-indigo-700 dark:text-indigo-300 font-medium text-sm shadow-md transition-all duration-300 -rotate-1deg hover:rotate-0">
                  <Heart :size="18" />
                  {{ expandedPerfume === perfume.id ? '收起更多' : '查看更多感受' }}
                </button>

                <!-- Expanded Content -->
                <Transition enter-active-class="transition-all duration-500 ease-out"
                  enter-from-class="opacity-0 max-h-0" enter-to-class="opacity-100 max-h-[1000px]"
                  leave-active-class="transition-all duration-300 ease-in" leave-from-class="opacity-100 max-h-[1000px]"
                  leave-to-class="opacity-0 max-h-0">
                  <div v-if="expandedPerfume === perfume.id" class="space-y-4 overflow-hidden">
                    <!-- Feeling -->
                    <div class="bg-purple-100 dark:bg-purple-900/30 p-6 shadow-lg -rotate-1deg">
                      <div
                        class="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-purple-200/60 dark:bg-purple-800/60">
                      </div>
                      <div class="flex items-start gap-2 mb-3">
                        <Wind :size="16" class="text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                        <h3 class="text-xs font-bold text-purple-700 dark:text-purple-400">💜 使用感受</h3>
                      </div>
                      <p class="text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-handwriting">
                        {{ perfume.feeling }}
                      </p>
                    </div>

                    <!-- Memories -->
                    <div class="bg-pink-100 dark:bg-pink-900/30 p-6 shadow-lg rotate-1deg">
                      <div class="flex items-start gap-2 mb-3">
                        <Sparkles :size="16" class="text-pink-600 dark:text-pink-400 mt-0.5 shrink-0" />
                        <h3 class="text-xs font-bold text-pink-700 dark:text-pink-400">✨ 气味记忆</h3>
                      </div>
                      <p class="text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-handwriting">
                        {{ perfume.memories }}
                      </p>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Empty State -->
      <section v-if="filteredPerfumes.length === 0" class="py-20 text-center">
        <div class="max-w-md mx-auto">
          <Droplet :size="64" class="text-stone-300 dark:text-stone-700 mx-auto mb-6" />
          <p class="text-xl text-stone-500 dark:text-stone-500 mb-2">暂无香水</p>
          <p class="text-sm text-stone-400 dark:text-stone-600">这个香调还没有收藏哦</p>
        </div>
      </section>

      <!-- Bottom Quote -->
      <section class="mt-20">
        <div class="max-w-3xl mx-auto">
          <div
            class="relative bg-linear-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 p-12 shadow-2xl -rotate-1deg">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-indigo-300/60 dark:bg-indigo-700/60">
            </div>
            <Droplet :size="48" class="text-indigo-400 dark:text-indigo-600 mx-auto mb-6 opacity-40" />
            <blockquote
              class="text-2xl md:text-3xl text-stone-800 dark:text-stone-200 leading-relaxed font-handwriting text-center mb-6">
              "香水是最强烈的记忆载体"<br />
            </blockquote>
            <p class="text-center text-sm text-stone-600 dark:text-stone-400 tracking-widest">— Joshua</p>
          </div>
        </div>
      </section>

    </main>

    <!-- Footer -->
    <footer
      class="mt-20 border-t-4 border-dashed border-indigo-300 dark:border-indigo-700 bg-stone-100 dark:bg-stone-900 px-6 py-8 relative z-20">
      <div class="max-w-7xl mx-auto text-center">
        <p class="text-xs text-stone-500 dark:text-stone-500">
          © 2025 Rachel 的香氛日记 · 共收录 {{ perfumeCollection.length }} 款香水
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