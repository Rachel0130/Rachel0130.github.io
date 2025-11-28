<script setup lang="ts">
import { ref, computed } from 'vue'
import { Film, Star, Popcorn, Clapperboard, Heart, Quote, Calendar, Clock, Eye } from 'lucide-vue-next'
import ScrapbookDecorations from '../components/ScrapbookDecorations.vue'

// 当前筛选类型
const currentGenre = ref('all')
const genres = ['all', '剧情', '科幻', '悬疑', '动画', '爱情', '文艺']

// 电影收藏
const moviesCollection = ref([
  {
    id: 1,
    title: '海上钢琴师',
    originalTitle: 'The Legend of 1900',
    director: '朱塞佩·托纳多雷',
    year: 1998,
    country: '意大利',
    duration: 165,
    genre: ['剧情', '音乐'],
    poster: '/image.webp',
    rating: 5,
    watchDate: '2023-03-15',
    venue: '家中客厅',
    cast: ['蒂姆·罗宾斯', '摩根·弗里曼'],
    review: '一部关于自由与选择的电影。1900从未踏上陆地，却在钢琴上找到了属于自己的世界。他的音乐穿越时空，触动人心。每次听到那段爵士乐，都能感受到生命的律动。',
    favoriteScene: '1900在钢琴上演奏的那一刻，仿佛整个世界都静止了',
    quote: '人生就像一架钢琴，你可以选择弹奏它，但你永远无法离开它。',
    impression: '音乐与画面的完美结合，让人沉浸其中。每一个音符都在诉说1900的故事，那份孤独与坚持令人动容。',
    color: 'from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20',
    tickets: ['/他的故事，真的没有人相信嘛😭_3_晚风无数_来自小红书网页版.jpg']
  },
  {
    id: 2,
    title: '律政俏佳人',
    originalTitle: 'Legal Blonde',
    director: '罗伯特·卢凯蒂克',
    year: 2001,
    country: '美国',
    duration: 96,
    genre: ['女性', '成长'],
    poster: '/p705035843.webp',
    rating: 5,
    watchDate: '2024-06-20',
    venue: '书房',
    cast: ['瑞茜·威瑟斯彭', '卢克·威尔逊', '塞尔玛·布莱尔'],
    review: '律政俏佳人是一部充满正能量的电影，讲述了一个看似肤浅的金发女郎如何通过自己的努力和智慧，打破偏见，赢得尊重的故事。Elle Woods的坚持和自信让我深受启发，提醒我无论外界如何看待我们，只要相信自己，就能创造奇迹。',
    favoriteScene: 'Elle Woods在法庭上精彩辩护的那一刻，充满力量',
    quote: 'You must always have faith in yourself.',
    impression: '女主角的成长让我欣慰，女孩子们之间的友谊也令人动容。',
    color: 'from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20',
    tickets: ['/好羡慕她们的友谊呀_2_莓有烦恼的乔伊_来自小红书网页版.jpg']
  },
  {
    id: 3,
    title: '星际穿越',
    originalTitle: 'Interstellar',
    director: '克里斯托弗·诺兰',
    year: 2014,
    country: '美国',
    duration: 169,
    genre: ['科幻', '悬疑'],
    poster: '/p2211264233.webp',
    rating: 5,
    watchDate: '2020',
    venue: '初中班上',
    cast: ['马修·麦康纳', '安妮·海瑟薇', '杰西卡·查斯坦'],
    review: '星际穿越是一部视觉与思想的盛宴。影片探讨了时间、空间和人类情感的复杂关系，让我对宇宙有了更深的敬畏感。Cooper为了拯救人类，毅然踏上未知的旅程，这种无私的爱与责任感令人动容。',
    favoriteScene: 'Mann星球上的那场惊心动魄的逃生戏，紧张刺激',
    quote: 'Love is the one thing that transcends time and space.',
    impression: '诺兰导演的又一力作，剧情紧凑，特效震撼，同时又不失对人性的深刻探讨。每次观看都有新的感悟。',
    color: 'from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20',
    tickets: ['/二刷星际穿越 截图不断截截截到厌倦_1_Elara Vault_来自小红书网页版.jpg']
  },
  {
    id: 4,
    title: '彗星来的那一夜',
    originalTitle: 'Comet',
    director: '朱利安·施纳贝尔',
    year: 2014,
    country: '美国',
    duration: 90,
    genre: ['悬疑', '科幻'],
    poster: '/p2187896734.webp',
    rating: 5,
    watchDate: '2025-10',
    venue: '寝室',
    cast: ['黛博拉·安·沃尔', '贾斯汀·洛伊德'],
    review: '彗星来的那一夜是一部充满哲思的电影，探讨了命运与偶然的关系。电影通过非线性的叙事手法，让观众在时间的错位中感受主角之间复杂的情感纠葛。每次观看都能发现新的细节，令人深思。',
    favoriteScene: '主角团发现盒子内的物品所代表的含义时，令人震撼',
    quote: 'The universe is made of stories, not atoms.',
    impression: '这部电影让我重新思考了时间和记忆的意义，导演巧妙地将科幻元素与人类情感结合，创造出独特的观影体验。',
    color: 'from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20',
    tickets: ['/当你点开这部电影时❗你就完了😭出不去了_4_哇呀呀的电影日记_来自小红书网页版.jpg']
  },
])

// 过滤后的电影
const filteredMovies = computed(() => {
  if (currentGenre.value === 'all') return moviesCollection.value
  return moviesCollection.value.filter(movie =>
    movie.genre.includes(currentGenre.value)
  )
})

// 统计
const stats = computed(() => {
  return {
    total: moviesCollection.value.length,
    thisYear: moviesCollection.value.filter(m => m.watchDate?.startsWith('2024')).length,
    avgRating: (moviesCollection.value.reduce((sum, m) => sum + m.rating, 0) / moviesCollection.value.length).toFixed(1)
  }
})

// 展开的电影ID
const expandedMovie = ref<number | null>(null)

const toggleExpand = (id: number) => {
  expandedMovie.value = expandedMovie.value === id ? null : id
}

// Film Strip hover状态
const filmStripHovered = ref(false)
</script>

<template>
  <div class="relative min-h-screen">

    <!-- Decorations -->
    <ScrapbookDecorations />

    <!-- Sticky Navigation -->
    <nav class="sticky top-0 z-50 bg-rose-200/80 dark:bg-rose-900/50 backdrop-blur-sm shadow-sm">
      <div class="max-w-7xl mx-auto px-6 py-3">
        <div class="flex items-center justify-between">
          <RouterLink to="/" class="flex items-center gap-3 group">
            <div
              class="w-6 h-6 bg-rose-400 dark:bg-rose-600 clip-star group-hover:rotate-90 transition-transform duration-500 shadow-md">
            </div>
            <span
              class="font-handwriting text-xl text-stone-800 dark:text-stone-100 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors duration-300 relative">
              A Room of My Own
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-400 dark:bg-rose-500 group-hover:w-full transition-all duration-300"></span>
            </span>
          </RouterLink>
          <div class="flex items-center gap-6">
            <RouterLink to="/"
              class="text-stone-700 dark:text-stone-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors font-medium text-sm">
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
              <Film :size="24" class="text-rose-600 dark:text-rose-400" />
              <span class="text-sm font-bold text-stone-700 dark:text-stone-300 tracking-wider">MOVIE DIARY</span>
            </div>

            <div class="bg-white dark:bg-stone-800 p-8 shadow-xl rotate-1deg group">
              <h1 class="text-5xl md:text-6xl font-bold text-stone-900 dark:text-stone-100 mb-4 leading-tight">
                我的<br />
                <span class="relative inline-block text-rose-600 dark:text-rose-400">
                  观影手册
                  <span
                    class="absolute bottom-1 left-0 w-0 h-0.5 bg-rose-600 dark:bg-rose-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </h1>
              <p class="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                一个小小的世界在此展开<br />
                在银幕中看见人生百态
              </p>
            </div>

            <!-- Stats Cards -->
            <div class="grid grid-cols-3 gap-3">
              <div
                class="bg-linear-to-br from-rose-100 to-pink-100 dark:from-rose-900/40 dark:to-pink-900/40 p-4 shadow-lg -rotate-2deg border-2 border-rose-300 dark:border-rose-700">
                <div class="text-2xl font-bold text-rose-700 dark:text-rose-400 mb-1">{{ stats.total }}</div>
                <div class="text-xs text-rose-600 dark:text-rose-500 font-medium">部电影</div>
              </div>
              <div
                class="bg-linear-to-br from-amber-100 to-yellow-100 dark:from-amber-900/40 dark:to-yellow-900/40 p-4 shadow-lg rotate-1deg border-2 border-amber-300 dark:border-amber-700">
                <div class="text-2xl font-bold text-amber-700 dark:text-amber-400 mb-1">{{ stats.thisYear }}</div>
                <div class="text-xs text-amber-600 dark:text-amber-500 font-medium">今年观影</div>
              </div>
              <div
                class="bg-linear-to-br from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40 p-4 shadow-lg -rotate-1deg border-2 border-blue-300 dark:border-blue-700">
                <div class="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-1">{{ stats.avgRating }}</div>
                <div class="text-xs text-blue-600 dark:text-blue-500 font-medium">平均评分</div>
              </div>
            </div>

            <div
              class="bg-linear-to-r from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 p-6 border-l-4 border-rose-400 dark:border-rose-600 shadow-lg rotate-1deg">
              <div class="flex items-start gap-3">
                <Popcorn :size="20" class="text-rose-600 dark:text-rose-400 mt-1 shrink-0" />
                <p class="text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-handwriting">
                  "电影是一场造梦，在黑暗中我们暂时逃离现实，在光影中寻找自己的影子。"
                </p>
              </div>
            </div>
          </div>

          <!-- Right - Film Reel Illustration -->
          <div class="relative h-[500px]">
            <!-- Film Strip -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
              @mouseenter="filmStripHovered = true" @mouseleave="filmStripHovered = false">
              <div
                class="bg-stone-800 dark:bg-stone-700 p-4 shadow-2xl -rotate-3deg hover:-rotate-1deg transition-transform duration-500">
                <div class="grid grid-cols-4 gap-2">
                  <button v-for="movie in moviesCollection.slice(0, 8)" :key="movie.id"
                    @click="expandedMovie = movie.id"
                    class="relative group aspect-3/4 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <!-- Movie Poster -->
                    <img :src="movie.poster" :alt="movie.title"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                    <!-- Hover Overlay -->
                    <div
                      class="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                      <div
                        class="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                        <h4 class="text-white font-bold text-sm px-2 line-clamp-2 mb-1">
                          {{ movie.title }}
                        </h4>
                        <p class="text-amber-300 text-xs font-medium">
                          {{ movie.year }}
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
                <div class="mt-3 flex justify-between">
                  <div class="w-4 h-4 bg-stone-600 dark:bg-stone-600 rounded-sm"></div>
                  <div class="w-4 h-4 bg-stone-600 dark:bg-stone-600 rounded-sm"></div>
                  <div class="w-4 h-4 bg-stone-600 dark:bg-stone-600 rounded-sm"></div>
                  <div class="w-4 h-4 bg-stone-600 dark:bg-stone-600 rounded-sm"></div>
                </div>
              </div>
            </div>

            <!-- Clapperboard -->
            <div
              class="absolute top-8 right-4 z-10 bg-white dark:bg-stone-800 p-4 shadow-2xl rotate-12deg hover:rotate-[8deg] transition-all duration-500"
              :class="{ 'opacity-40': filmStripHovered }">
              <div class="w-32 h-24 border-4 border-stone-800 dark:border-stone-300 flex items-center justify-center">
                <Clapperboard :size="40" class="text-stone-800 dark:text-stone-300" />
              </div>
              <p class="text-center text-xs font-handwriting text-stone-700 dark:text-stone-300 mt-2">Take 1</p>
            </div>

            <!-- Ticket Stub -->
            <div
              class="absolute bottom-12 left-4 bg-rose-100 dark:bg-rose-900/40 p-4 shadow-xl rotate-[-8deg] border-2 border-dashed border-rose-400 dark:border-rose-600">
              <p class="text-xs font-bold text-rose-700 dark:text-rose-400 mb-1">MOVIE TICKET</p>
              <p class="text-xs text-stone-600 dark:text-stone-400">2024</p>
            </div>

            <!-- Decorative Star -->
            <div class="absolute top-0 left-0">
              <Star :size="40" class="text-amber-400 dark:text-amber-600 fill-current opacity-60" />
            </div>

            <div class="absolute bottom-0 right-12">
              <Heart :size="36" class="text-rose-400 dark:text-rose-600 fill-current opacity-60" />
            </div>
          </div>
        </div>
      </section>

      <!-- Genre Filter -->
      <section class="mb-12">
        <div class="flex flex-wrap gap-3">
          <button v-for="genre in genres" :key="genre" @click="currentGenre = genre" :class="[
            'px-6 py-3 font-medium text-sm shadow-md transition-all duration-300 border-2',
            currentGenre === genre
              ? 'bg-rose-500 dark:bg-rose-600 border-rose-600 dark:border-rose-500 text-white -rotate-2deg scale-110'
              : 'bg-white dark:bg-stone-800 border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-rose-400 dark:hover:border-rose-600 rotate-1deg hover:rotate-0'
          ]">
            {{ genre === 'all' ? '全部类型' : genre }}
          </button>
        </div>
      </section>

      <!-- Movies Grid -->
      <section class="space-y-12">
        <div v-for="(movie, index) in filteredMovies" :key="movie.id" class="group">
          <!-- Movie Card -->
          <div :class="[
            'relative bg-linear-to-br p-8 md:p-10 border-4 shadow-lg hover:shadow-2xl transition-all duration-500',
            movie.color,
            index % 2 === 0
              ? 'border-rose-200 dark:border-rose-800 hover:border-rose-400 dark:hover:border-rose-600'
              : 'border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600'
          ]">
            <!-- Film Strip Tape -->
            <div :class="[
              'absolute -top-3 h-6',
              index % 3 === 0 ? 'left-12 w-32 bg-rose-300/60 dark:bg-rose-700/60 -rotate-2deg' :
                index % 3 === 1 ? 'right-16 w-28 bg-blue-300/60 dark:bg-blue-700/60 rotate-3deg' :
                  'left-20 w-36 bg-purple-300/60 dark:bg-purple-700/60 -rotate-1deg'
            ]"></div>

            <div class="grid md:grid-cols-[300px_1fr] gap-8">

              <!-- Left - Poster -->
              <div class="space-y-4">
                <!-- Poster Card -->
                <div class="relative">
                  <div
                    class="bg-white dark:bg-stone-800 p-3 shadow-2xl rotate-[-4deg] group-hover:-rotate-1deg transition-transform duration-500">
                    <img :src="movie.poster" :alt="movie.title" class="w-full aspect-2/3 object-cover mb-3" />
                    <div class="space-y-1">
                      <p class="text-xs font-bold text-stone-800 dark:text-stone-200 line-clamp-1">{{ movie.title }}</p>
                      <p class="text-xs text-stone-600 dark:text-stone-400">{{ movie.director }}</p>
                    </div>
                  </div>

                  <!-- Rating Badge -->
                  <div
                    class="absolute -bottom-3 -right-3 bg-amber-400 dark:bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center shadow-xl rotate-12deg">
                    <div class="text-center">
                      <div class="text-2xl font-bold text-white">{{ movie.rating }}</div>
                      <div class="text-xs text-amber-100">★</div>
                    </div>
                  </div>
                </div>

                <!-- Watch Info -->
                <div class="bg-white dark:bg-stone-800 p-4 shadow-md space-y-2">
                  <div class="flex items-center gap-2 text-xs text-stone-600 dark:text-stone-400">
                    <Calendar :size="14" />
                    <span>{{ movie.watchDate }}</span>
                  </div>
                  <div class="flex items-center gap-2 text-xs text-stone-600 dark:text-stone-400">
                    <Eye :size="14" />
                    <span>{{ movie.venue }}</span>
                  </div>
                  <div class="flex items-center gap-2 text-xs text-stone-600 dark:text-stone-400">
                    <Clock :size="14" />
                    <span>{{ movie.duration }} 分钟</span>
                  </div>
                </div>

                <!-- Genre Tags -->
                <div class="flex flex-wrap gap-2">
                  <span v-for="g in movie.genre" :key="g"
                    class="px-3 py-1 bg-rose-100 dark:bg-rose-900/40 text-xs text-rose-700 dark:text-rose-300 shadow-sm -rotate-1deg border border-rose-300 dark:border-rose-700 font-medium hover:shadow-md hover:scale-110 transition-all duration-200 cursor-default">
                    {{ g }}
                  </span>
                </div>
              </div>

              <!-- Right - Info -->
              <div class="space-y-6">
                <!-- Title & Meta -->
                <div>
                  <h2 class="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                    {{ movie.title }}
                  </h2>
                  <p class="text-sm text-stone-500 dark:text-stone-500 italic mb-3">
                    {{ movie.originalTitle }}
                  </p>
                  <div class="space-y-1 text-sm text-stone-600 dark:text-stone-400">
                    <p>
                      <span class="font-medium">导演：</span>{{ movie.director }}
                    </p>
                    <p>
                      <span class="font-medium">主演：</span>{{ movie.cast.join(' / ') }}
                    </p>
                    <p>
                      <span class="font-medium">制片：</span>{{ movie.country }} · {{ movie.year }}
                    </p>
                  </div>
                </div>

                <!-- Review -->
                <div
                  class="bg-white/60 dark:bg-stone-800/60 backdrop-blur-sm p-6 border-l-4 border-rose-400 dark:border-rose-600 shadow-md">
                  <div class="flex items-start gap-2 mb-3">
                    <Film :size="18" class="text-rose-600 dark:text-rose-400 mt-0.5 shrink-0" />
                    <h3 class="text-sm font-bold text-rose-700 dark:text-rose-400">我的影评</h3>
                  </div>
                  <p class="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    {{ movie.review }}
                  </p>
                </div>

                <!-- Favorite Scene -->
                <div
                  class="bg-linear-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 p-5 border-2 border-dashed border-amber-300 dark:border-amber-700 shadow-inner">
                  <div class="flex items-start gap-2 mb-2">
                    <Clapperboard :size="18" class="text-amber-600 dark:text-amber-400 shrink-0" />
                    <h3 class="text-sm font-bold text-amber-700 dark:text-amber-400">最爱场景</h3>
                  </div>
                  <p class="text-sm text-stone-700 dark:text-stone-300 italic">
                    {{ movie.favoriteScene }}
                  </p>
                </div>

                <!-- Quote -->
                <div
                  class="bg-linear-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 p-6 border-l-4 border-rose-400 dark:border-rose-600 shadow-md">
                  <Quote :size="24" class="text-rose-400 dark:text-rose-500 mb-3" />
                  <blockquote
                    class="text-base text-stone-800 dark:text-stone-200 leading-relaxed italic font-serif mb-2">
                    "{{ movie.quote }}"
                  </blockquote>
                </div>

                <!-- Expand Button -->
                <button @click="toggleExpand(movie.id)"
                  class="flex items-center gap-2 px-5 py-3 bg-linear-to-r from-rose-100 to-pink-100 dark:from-rose-900/40 dark:to-pink-900/40 hover:from-rose-200 hover:to-pink-200 dark:hover:from-rose-900/60 dark:hover:to-pink-900/60 text-rose-700 dark:text-rose-300 font-medium text-sm shadow-md transition-all duration-300 -rotate-1deg hover:rotate-0">
                  <Heart :size="18" />
                  {{ expandedMovie === movie.id ? '收起观影感受' : '查看观影感受' }}
                </button>

                <!-- Impression (Expandable) -->
                <Transition enter-active-class="transition-all duration-500 ease-out"
                  enter-from-class="opacity-0 max-h-0" enter-to-class="opacity-100 max-h-96"
                  leave-active-class="transition-all duration-300 ease-in" leave-from-class="opacity-100 max-h-96"
                  leave-to-class="opacity-0 max-h-0">
                  <div v-if="expandedMovie === movie.id"
                    class="bg-pink-100 dark:bg-pink-900/30 p-6 shadow-lg -rotate-1deg overflow-hidden">
                    <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-pink-200/60 dark:bg-pink-800/60">
                    </div>
                    <div class="flex items-start gap-2 mb-3">
                      <Heart :size="16" class="text-pink-600 dark:text-pink-400 mt-0.5 shrink-0" />
                      <h3 class="text-xs font-bold text-pink-700 dark:text-pink-400">💭 观影感受</h3>
                    </div>
                    <p class="text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-handwriting">
                      {{ movie.impression }}
                    </p>

                    <!-- Tickets -->
                    <div v-if="movie.tickets.length > 0" class="mt-4 space-y-2">
                      <img v-for="(ticket, i) in movie.tickets" :key="i" :src="ticket" alt="Movie ticket"
                        class="w-full h-auto object-cover shadow-md -rotate-1deg" />
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Empty State -->
      <section v-if="filteredMovies.length === 0" class="py-20 text-center">
        <div class="max-w-md mx-auto">
          <Film :size="64" class="text-stone-300 dark:text-stone-700 mx-auto mb-6" />
          <p class="text-xl text-stone-500 dark:text-stone-500 mb-2">暂无电影</p>
          <p class="text-sm text-stone-400 dark:text-stone-600">这个类型还没有观看记录哦</p>
        </div>
      </section>

      <!-- Bottom Quote -->
      <section class="mt-20">
        <div class="max-w-3xl mx-auto">
          <div
            class="relative bg-linear-to-br from-rose-100 to-pink-100 dark:from-rose-900/40 dark:to-pink-900/40 p-12 shadow-2xl -rotate-1deg">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-rose-300/60 dark:bg-rose-700/60"></div>
            <Film :size="48" class="text-rose-400 dark:text-rose-600 mx-auto mb-6 opacity-40" />
            <blockquote
              class="text-2xl md:text-3xl text-stone-800 dark:text-stone-200 leading-relaxed font-handwriting text-center mb-6">
              "Movies are like an expensive form<br />
              of therapy for me."
            </blockquote>
            <p class="text-center text-sm text-stone-600 dark:text-stone-400 tracking-widest">— Tim Burton</p>
          </div>
        </div>
      </section>

    </main>

    <!-- Footer -->
    <footer
      class="mt-20 border-t-4 border-dashed border-rose-300 dark:border-rose-700 bg-stone-100 dark:bg-stone-900 px-6 py-8 relative z-20">
      <div class="max-w-7xl mx-auto text-center">
        <p class="text-xs text-stone-500 dark:text-stone-500">
          © 2025 Rachel 的观影手册 · 共收录 {{ moviesCollection.length }} 部电影
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

.clip-star {
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}
</style>