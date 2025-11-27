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
    title: '肖申克的救赎',
    originalTitle: 'The Shawshank Redemption',
    director: '弗兰克·德拉邦特',
    year: 1994,
    country: '美国',
    duration: 142,
    genre: ['剧情', '犯罪'],
    poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop&q=80',
    rating: 5,
    watchDate: '2024-03-15',
    venue: '家中客厅',
    cast: ['蒂姆·罗宾斯', '摩根·弗里曼'],
    review: '希望是美好的，也许是人间至善，而美好的事物永不消逝。这部电影用最细腻的镜头语言讲述了关于希望、自由和友谊的故事。安迪用了近20年的时间挖掘通往自由的隧道，这种坚持让人动容。',
    favoriteScene: '安迪在雨中张开双臂，享受自由的那一刻',
    quote: 'Hope is a good thing, maybe the best of things, and no good thing ever dies.',
    impression: '看完后久久不能平静。什么是真正的自由？也许是内心的自由，是无论身处何境都不放弃希望的勇气。',
    color: 'from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20',
    tickets: ['https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=150&fit=crop&q=80']
  },
  {
    id: 2,
    title: '千与千寻',
    originalTitle: '千と千尋の神隠し',
    director: '宫崎骏',
    year: 2001,
    country: '日本',
    duration: 125,
    genre: ['动画', '奇幻'],
    poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop&q=80',
    rating: 5,
    watchDate: '2024-05-20',
    venue: 'IMAX影院',
    cast: ['柊瑠美', '入野自由', '夏木真理'],
    review: '宫崎骏的魔法世界总是充满了童话般的纯真和深刻的寓意。千寻从一个胆小依赖的女孩成长为勇敢坚强的少女，这个过程让人看到了成长的力量。',
    favoriteScene: '千寻在海上列车上的那一段，安静而治愈',
    quote: '人生就是一列开往坟墓的列车，路途上会有很多站，很难有人可以自始至终陪着走完。',
    impression: '每一帧都是壁纸级别的画面。吉卜力的动画总能让人感受到那份纯粹与美好，无脸男、汤婆婆、白龙，每个角色都让人印象深刻。',
    color: 'from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20',
    tickets: ['https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=150&fit=crop&q=80']
  },
  {
    id: 3,
    title: '盗梦空间',
    originalTitle: 'Inception',
    director: '克里斯托弗·诺兰',
    year: 2010,
    country: '美国',
    duration: 148,
    genre: ['科幻', '悬疑'],
    poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop&q=80',
    rating: 5,
    watchDate: '2024-07-08',
    venue: '杜比影院',
    cast: ['莱昂纳多·迪卡普里奥', '玛丽昂·歌迪亚', '渡边谦'],
    review: '诺兰的神作，多层梦境的设定让人叹为观止。每次重看都能发现新的细节。梦境与现实的界限在哪里？陀螺最后到底停没停？这些问题让人回味无穷。',
    favoriteScene: '走廊里的失重打斗，一镜到底震撼无比',
    quote: 'You mustn\'t be afraid to dream a little bigger, darling.',
    impression: '配乐太燃了！Hans Zimmer的《Time》响起的时候鸡皮疙瘩都起来了。这部电影需要多刷几遍才能理解所有细节。',
    color: 'from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20',
    tickets: ['https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=300&h=150&fit=crop&q=80']
  },
  {
    id: 4,
    title: '海上钢琴师',
    originalTitle: 'La leggenda del pianista sull\'oceano',
    director: '朱塞佩·托纳多雷',
    year: 1998,
    country: '意大利',
    duration: 165,
    genre: ['剧情', '音乐'],
    poster: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop&q=80',
    rating: 5,
    watchDate: '2024-09-12',
    venue: '艺术影院',
    cast: ['蒂姆·罗斯', '普路特·泰勒·文斯'],
    review: '1900在船上度过了一生，从未踏上陆地。他说陆地太大了，看不到尽头。有时候我在想，是他困在了船上，还是我们困在了陆地上？',
    favoriteScene: '1900与爵士音乐家斗琴的那段，太燃了',
    quote: '陆地？陆地对我来说是一艘太大的船，一个太漂亮的女人，一段太长的旅行，一瓶太刺鼻的香水，一种我不会创作的音乐。',
    impression: '配乐美到极致。Ennio Morricone的音乐与画面完美融合，每一个音符都在诉说故事。',
    color: 'from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20',
    tickets: ['https://images.unsplash.com/photo-1574267432644-f86c3f035019?w=300&h=150&fit=crop&q=80']
  },
  {
    id: 5,
    title: '瞬息全宇宙',
    originalTitle: 'Everything Everywhere All at Once',
    director: '关家永、丹尼尔·施纳特',
    year: 2022,
    country: '美国',
    duration: 139,
    genre: ['科幻', '喜剧'],
    poster: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop&q=80',
    rating: 4,
    watchDate: '2024-10-03',
    venue: '商业影城',
    cast: ['杨紫琼', '关继威', '许玮伦'],
    review: '太疯狂了！多元宇宙的设定玩出了新高度，脑洞大开。在无数个平行宇宙中，我们都在经历不同的人生。但最重要的是，珍惜当下这个宇宙的自己。',
    favoriteScene: '热狗手指宇宙，荒诞却又感人',
    quote: 'So even though you have broken my heart yet again, I wanted to say, in another life, I would have really liked just doing laundry and taxes with you.',
    impression: '杨紫琼演技炸裂！这部电影把家庭、移民、身份认同等议题融入科幻框架，既有深度又有娱乐性。',
    color: 'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20',
    tickets: ['https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=150&fit=crop&q=80']
  },
  {
    id: 6,
    title: '爱在黎明破晓前',
    originalTitle: 'Before Sunrise',
    director: '理查德·林克莱特',
    year: 1995,
    country: '美国',
    duration: 101,
    genre: ['爱情', '文艺'],
    poster: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=600&fit=crop&q=80',
    rating: 5,
    watchDate: '2024-11-10',
    venue: '深夜独自观影',
    cast: ['伊桑·霍克', '朱莉·德尔佩'],
    review: '在维也纳的一夜，两个陌生人相遇、相知、相恋。没有激烈的冲突，没有跌宕的剧情，只有一整夜的对话，却让人沉醉其中。最美的爱情也许就是这样，在对的时间遇见对的人。',
    favoriteScene: '唱片店里两人隔着耳机听音乐对视',
    quote: 'If there\'s any kind of magic in this world, it must be in the attempt of understanding someone, sharing something.',
    impression: '文艺片的天花板。极简的镜头语言，克制的情感表达，却让人回味无穷。看完想去维也纳走一走。',
    color: 'from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20',
    tickets: []
  }
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
              Islatri 的小宇宙
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
                89部电影，89次光影之旅<br />
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
                    <div v-if="movie.tickets.length > 0" class="mt-4 flex gap-2">
                      <img v-for="(ticket, i) in movie.tickets" :key="i" :src="ticket" alt="Movie ticket"
                        class="w-24 h-12 object-cover shadow-md -rotate-2deg" />
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
          © 2025 Islatri 的观影手册 · 共收录 {{ moviesCollection.length }} 部电影
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