<script setup lang="ts">
import { ref, computed } from 'vue'
import { BookOpen, BookMarked, Heart, Quote, Coffee, Bookmark, Feather } from 'lucide-vue-next'
import ScrapbookDecorations from '../components/ScrapbookDecorations.vue'

// 阅读状态
const readingStatus = ref('all')
const statusOptions = [
  { value: 'all', label: '全部书籍', color: 'stone' },
  { value: 'reading', label: '正在阅读', color: 'amber' },
  { value: 'finished', label: '已读完', color: 'green' },
  { value: 'wishlist', label: '想读', color: 'blue' }
]

// 书籍收藏
const booksCollection = ref([
  {
    id: 1,
    title: '百年孤独',
    originalTitle: 'Cien años de soledad',
    author: '加西亚·马尔克斯',
    translator: '范晔',
    publisher: '南海出版公司',
    year: '2011',
    pages: 360,
    isbn: '9787544253994',
    cover: 'public/s35027689.jpg',
    rating: 5,
    status: 'finished',
    progress: 100,
    startDate: '2024-01',
    finishDate: '2024-02',
    tags: ['魔幻现实主义', '拉美文学', '经典'],
    review: '马尔克斯用魔幻的笔触描绘了布恩迪亚家族七代人的传奇故事。孤独是人类永恒的主题，而这本书将孤独诠释到了极致。每个人物都在追寻着什么，却又在不断地失去。',
    favorite_quote: '生命中真正重要的不是你遭遇了什么，而是你记住了哪些事，又是如何铭记的。',
    notes: '第一次读魔幻现实主义的作品，被深深震撼。马孔多这个小镇就像一个寓言，映射着人类文明的兴衰。',
    color: 'from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20'
  },
  {
    id: 2,
    title: '海鸥乔纳森',
    originalTitle: 'Jonathan Livingston Seagull',
    author: '理查德·巴赫',
    translator: '夏抄',
    publisher: '海南出版社',
    year: '2009',
    pages: 105,
    isbn: '9787532725694',
    cover: 'public/根据网页图片生成书封面.png',
    rating: 4,
    status: 'finished',
    progress: 100,
    startDate: '2024-03',
    finishDate: '2024-03',
    tags: ['日本文学', '青春', '爱情'],
    review: '村上春树最广为人知的作品。直子与绿子代表着两种截然不同的生命状态，渡边在她们之间徘徊，也在自我救赎与沉沦之间挣扎。',
    favorite_quote: '死并非生的对立面，而作为生的一部分永存。',
    notes: '读这本书的时候一直在听披头士的《Norwegian Wood》，音乐与文字交织，那种忧郁的气氛久久不能散去。',
    color: 'from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20'
  },
  {
    id: 3,
    title: '月亮与六便士',
    originalTitle: 'The Moon and Sixpence',
    author: '毛姆',
    translator: '傅惟慈',
    publisher: '上海译文出版社',
    year: '2006',
    pages: 275,
    isbn: '9787532739547',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&q=80',
    rating: 5,
    status: 'reading',
    progress: 65,
    startDate: '2024-11',
    finishDate: null,
    tags: ['英国文学', '人生', '艺术'],
    review: '正在阅读中。斯特里克兰德抛弃一切追求艺术梦想的故事让人深思：我们是应该追逐天上的月亮，还是捡拾脚下的六便士？',
    favorite_quote: '我用尽了全力，过着平凡的一生。',
    notes: '看到他抛家弃子去追求绘画梦想时，内心五味杂陈。这是自私还是勇敢？也许两者都是。',
    color: 'from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20'
  },
  {
    id: 4,
    title: '人类简史',
    originalTitle: 'Sapiens: A Brief History of Humankind',
    author: '尤瓦尔·赫拉利',
    translator: '林俊宏',
    publisher: '中信出版社',
    year: '2014',
    pages: 440,
    isbn: '9787508647357',
    cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop&q=80',
    rating: 5,
    status: 'finished',
    progress: 100,
    startDate: '2024-05',
    finishDate: '2024-06',
    tags: ['历史', '人类学', '科普'],
    review: '赫拉利用宏大的视角讲述了智人如何从一个普通物种成为地球的主宰。认知革命、农业革命、科学革命，每一次革命都重塑了人类社会。',
    favorite_quote: '我们相信某种秩序，不是因为它客观存在，而是因为相信它可以让我们更好地合作。',
    notes: '这本书彻底改变了我看待历史的方式。原来很多我们认为理所当然的东西，都只是"想象的秩序"。',
    color: 'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20'
  },
  {
    id: 5,
    title: '活着',
    originalTitle: '活着',
    author: '余华',
    translator: null,
    publisher: '作家出版社',
    year: '2012',
    pages: 191,
    isbn: '9787506365437',
    cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&q=80',
    rating: 5,
    status: 'finished',
    progress: 100,
    startDate: '2024-07',
    finishDate: '2024-07',
    tags: ['中国文学', '现实主义', '人生'],
    review: '福贵的一生经历了太多苦难，却依然选择活着。这本书让我明白，活着本身就是一种勇气，一种意义。',
    favorite_quote: '人是为了活着本身而活着，而不是为了活着之外的任何事物而活着。',
    notes: '读完后哭了很久。余华用最平实的语言写出了最残酷的现实，却又让人感受到生命的韧性与尊严。',
    color: 'from-rose-50 to-red-50 dark:from-rose-950/20 dark:to-red-950/20'
  },
  {
    id: 6,
    title: '小王子',
    originalTitle: 'Le Petit Prince',
    author: '圣埃克苏佩里',
    translator: '马振聘',
    publisher: '人民文学出版社',
    year: '2003',
    pages: 120,
    isbn: '9787020042494',
    cover: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop&q=80',
    rating: 5,
    status: 'finished',
    progress: 100,
    startDate: '2024-09',
    finishDate: '2024-09',
    tags: ['童话', '哲理', '法国文学'],
    review: '表面上是给孩子看的童话，实际上是写给大人的寓言。小王子的纯真与大人世界的荒诞形成鲜明对比。',
    favorite_quote: '真正重要的东西，眼睛是看不见的，只能用心去看。',
    notes: '每隔几年就要重读一次。每次读都有不同的感悟。玫瑰花、狐狸、星星，每个意象都值得细细品味。',
    color: 'from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20'
  },
  {
    id: 7,
    title: '不能承受的生命之轻',
    originalTitle: 'Nesnesitelná lehkost bytí',
    author: '米兰·昆德拉',
    translator: '许钧',
    publisher: '上海译文出版社',
    year: '2003',
    pages: 312,
    isbn: '9787532732197',
    cover: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop&q=80',
    rating: 4,
    status: 'wishlist',
    progress: 0,
    startDate: null,
    finishDate: null,
    tags: ['捷克文学', '哲学', '爱情'],
    review: null,
    favorite_quote: null,
    notes: '一直想读但还没开始。听说是一本需要慢慢品读的书，打算找个安静的假期细细阅读。',
    color: 'from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20'
  }
])

// 过滤后的书籍
const filteredBooks = computed(() => {
  if (readingStatus.value === 'all') return booksCollection.value
  return booksCollection.value.filter(book => book.status === readingStatus.value)
})

// 统计数据
const stats = computed(() => {
  return {
    total: booksCollection.value.length,
    reading: booksCollection.value.filter(b => b.status === 'reading').length,
    finished: booksCollection.value.filter(b => b.status === 'finished').length,
    wishlist: booksCollection.value.filter(b => b.status === 'wishlist').length
  }
})

// 获取状态标签
const getStatusLabel = (status: string) => {
  return statusOptions.find(s => s.value === status)?.label || status
}
</script>

<template>
  <div class="relative min-h-screen">

    <!-- Decorations -->
    <ScrapbookDecorations />

    <!-- Sticky Navigation -->
    <nav class="sticky top-0 z-50 bg-amber-200/80 dark:bg-amber-900/50 backdrop-blur-sm shadow-sm">
      <div class="max-w-7xl mx-auto px-6 py-3">
        <div class="flex items-center justify-between">
          <RouterLink to="/" class="flex items-center gap-3 group">
            <div
              class="w-6 h-6 bg-amber-400 dark:bg-amber-600 rotate-45 group-hover:rotate-90 transition-transform duration-500 shadow-md">
            </div>
            <span
              class="font-handwriting text-xl text-stone-800 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300 relative">
              Islatri 的小宇宙
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 dark:bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </span>
          </RouterLink>
          <div class="flex items-center gap-6">
            <RouterLink to="/"
              class="text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium text-sm">
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
              <BookOpen :size="24" class="text-amber-600 dark:text-amber-400" />
              <span class="text-sm font-bold text-stone-700 dark:text-stone-300 tracking-wider">READING JOURNAL</span>
            </div>

            <div class="bg-white dark:bg-stone-800 p-8 shadow-xl rotate-1deg group">
              <h1 class="text-5xl md:text-6xl font-bold text-stone-900 dark:text-stone-100 mb-4 leading-tight">
                我的<br />
                <span class="relative inline-block text-amber-600 dark:text-amber-400">
                  阅读笔记
                  <span
                    class="absolute bottom-1 left-0 w-0 h-0.5 bg-amber-600 dark:bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </h1>
              <p class="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                127本书，127次心灵的旅行<br />
                在文字的海洋中寻找共鸣
              </p>
            </div>

            <!-- Stats Cards -->
            <div class="grid grid-cols-2 gap-4">
              <div
                class="bg-linear-to-br from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 p-5 shadow-lg -rotate-2deg border-2 border-amber-300 dark:border-amber-700">
                <div class="text-3xl font-bold text-amber-700 dark:text-amber-400 mb-1">{{ stats.finished }}</div>
                <div class="text-xs text-amber-600 dark:text-amber-500 font-medium">已读完</div>
              </div>
              <div
                class="bg-linear-to-br from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40 p-5 shadow-lg rotate-2deg border-2 border-blue-300 dark:border-blue-700">
                <div class="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-1">{{ stats.reading }}</div>
                <div class="text-xs text-blue-600 dark:text-blue-500 font-medium">在读中</div>
              </div>
            </div>

            <div
              class="bg-linear-to-r from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 p-6 border-l-4 border-amber-400 dark:border-amber-600 shadow-lg -rotate-1deg">
              <div class="flex items-start gap-3">
                <Coffee :size="20" class="text-amber-600 dark:text-amber-400 mt-1 shrink-0" />
                <p class="text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-handwriting">
                  "读书不是为了雄辩和驳斥，也不是为了轻信和盲从，而是为了思考和权衡。"
                </p>
              </div>
            </div>
          </div>

          <!-- Right - Book Stack Illustration -->
          <div class="relative h-[500px]">
            <!-- Book Stack -->
            <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xs">
              <!-- Book 1 -->
              <div
                class="relative mb-2 bg-white dark:bg-stone-800 shadow-xl -rotate-3deg hover:-rotate-1deg transition-transform duration-500">
                <div class="h-12 bg-linear-to-r from-amber-600 to-amber-700 dark:from-amber-700 dark:to-amber-800">
                </div>
              </div>
              <!-- Book 2 -->
              <div
                class="relative mb-2 bg-white dark:bg-stone-800 shadow-xl rotate-2deg hover:rotate-1deg transition-transform duration-500">
                <div class="h-12 bg-linear-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800"></div>
              </div>
              <!-- Book 3 -->
              <div
                class="relative mb-2 bg-white dark:bg-stone-800 shadow-xl -rotate-1deg hover:rotate-0 transition-transform duration-500">
                <div class="h-12 bg-linear-to-r from-green-600 to-green-700 dark:from-green-700 dark:to-green-800">
                </div>
              </div>
              <!-- Book 4 -->
              <div
                class="relative bg-white dark:bg-stone-800 shadow-xl rotate-1deg hover:rotate-0.5deg transition-transform duration-500">
                <div class="h-12 bg-linear-to-r from-purple-600 to-purple-700 dark:from-purple-700 dark:to-purple-800">
                </div>
              </div>
            </div>

            <!-- Decorative Elements -->
            <div class="absolute top-0 right-12 bg-pink-100 dark:bg-pink-900/40 p-4 shadow-lg rotate-12deg">
              <Feather :size="32" class="text-pink-600 dark:text-pink-400" />
            </div>

            <div class="absolute top-1/3 left-0 bg-yellow-100 dark:bg-yellow-900/40 px-4 py-3 shadow-lg rotate-[-8deg]">
              <p class="text-xs font-handwriting text-stone-700 dark:text-stone-300">📖 Keep<br />Reading</p>
            </div>

            <div class="absolute bottom-12 right-0">
              <Heart :size="40" class="text-rose-400 dark:text-rose-600 fill-current opacity-60" />
            </div>
          </div>
        </div>
      </section>

      <!-- Filter Buttons -->
      <section class="mb-12">
        <div class="flex flex-wrap gap-3">
          <button v-for="status in statusOptions" :key="status.value" @click="readingStatus = status.value" :class="[
            'px-6 py-3 font-medium text-sm shadow-md transition-all duration-300 border-2',
            readingStatus === status.value
              ? 'bg-amber-500 dark:bg-amber-600 border-amber-600 dark:border-amber-500 text-white -rotate-2deg scale-110'
              : 'bg-white dark:bg-stone-800 border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-amber-400 dark:hover:border-amber-600 rotate-1deg hover:rotate-0'
          ]">
            {{ status.label }}
            <span class="ml-2 text-xs opacity-75">({{
              status.value === 'all' ? stats.total :
                status.value === 'reading' ? stats.reading :
                  status.value === 'finished' ? stats.finished :
                    stats.wishlist
            }})</span>
          </button>
        </div>
      </section>

      <!-- Books Grid -->
      <section class="space-y-12">
        <div v-for="(book, index) in filteredBooks" :key="book.id" class="group">
          <!-- Book Card -->
          <div :class="[
            'relative bg-linear-to-br p-8 md:p-10 border-4 shadow-lg hover:shadow-2xl transition-all duration-500',
            book.color,
            index % 2 === 0
              ? 'border-amber-200 dark:border-amber-800 hover:border-amber-400 dark:hover:border-amber-600'
              : 'border-stone-300 dark:border-stone-700 hover:border-stone-400 dark:hover:border-stone-600'
          ]">
            <!-- Washi Tape -->
            <div :class="[
              'absolute -top-3 h-6',
              index % 3 === 0 ? 'left-12 w-32 bg-amber-300/60 dark:bg-amber-700/60 -rotate-2deg' :
                index % 3 === 1 ? 'right-16 w-28 bg-blue-300/60 dark:bg-blue-700/60 rotate-3deg' :
                  'left-20 w-36 bg-rose-300/60 dark:bg-rose-700/60 -rotate-1deg'
            ]"></div>

            <!-- Status Badge -->
            <div :class="[
              'absolute -top-4 -right-4 px-4 py-2 font-bold text-xs shadow-xl rotate-[8deg] border-2',
              book.status === 'reading' ? 'bg-amber-400 dark:bg-amber-600 border-amber-500 dark:border-amber-500 text-white' :
                book.status === 'finished' ? 'bg-green-400 dark:bg-green-600 border-green-500 dark:border-green-500 text-white' :
                  'bg-blue-400 dark:bg-blue-600 border-blue-500 dark:border-blue-500 text-white'
            ]">
              {{ getStatusLabel(book.status) }}
            </div>

            <div class="grid md:grid-cols-[280px_1fr] gap-8">

              <!-- Left - Book Cover -->
              <div class="space-y-4">
                <!-- Cover Card -->
                <div class="relative">
                  <div
                    class="bg-white dark:bg-stone-800 p-3 shadow-2xl -rotate-4deg group-hover:-rotate-1deg transition-transform duration-500">
                    <img :src="book.cover" :alt="book.title" class="w-full aspect-2/3 object-cover mb-3" />
                    <div class="space-y-1">
                      <p class="text-xs font-bold text-stone-800 dark:text-stone-200 line-clamp-2">{{ book.title }}</p>
                      <p class="text-xs text-stone-600 dark:text-stone-400">{{ book.author }}</p>
                    </div>
                  </div>

                  <!-- Rating Badge -->
                  <div v-if="book.rating"
                    class="absolute -bottom-3 -right-3 bg-amber-400 dark:bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center shadow-xl -rotate-12deg">
                    <div class="text-center">
                      <div class="text-2xl font-bold text-white">{{ book.rating }}</div>
                      <div class="text-xs text-amber-100">★</div>
                    </div>
                  </div>
                </div>

                <!-- Progress Bar (for reading books) -->
                <div v-if="book.status === 'reading'" class="bg-white dark:bg-stone-800 p-4 shadow-md">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-bold text-stone-700 dark:text-stone-300">阅读进度</span>
                    <span class="text-xs text-stone-600 dark:text-stone-400">{{ book.progress }}%</span>
                  </div>
                  <div class="h-2 bg-stone-200 dark:bg-stone-700 rounded-full overflow-hidden">
                    <div
                      class="h-full bg-linear-to-r from-amber-400 to-orange-500 dark:from-amber-500 dark:to-orange-600 transition-all duration-500"
                      :style="{ width: `${book.progress}%` }"></div>
                  </div>
                </div>

                <!-- Tags -->
                <div class="flex flex-wrap gap-2">
                  <span v-for="tag in book.tags" :key="tag"
                    class="px-3 py-1 bg-white dark:bg-stone-800 text-xs text-stone-600 dark:text-stone-400 shadow-sm -rotate-1deg border border-stone-200 dark:border-stone-700 hover:shadow-md hover:scale-110 transition-all duration-200 cursor-default">
                    # {{ tag }}
                  </span>
                </div>
              </div>

              <!-- Right - Book Info -->
              <div class="space-y-6">
                <!-- Title & Meta -->
                <div>
                  <h2 class="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                    {{ book.title }}
                  </h2>
                  <p v-if="book.originalTitle" class="text-sm text-stone-500 dark:text-stone-500 italic mb-3">
                    {{ book.originalTitle }}
                  </p>
                  <div class="space-y-1 text-sm text-stone-600 dark:text-stone-400">
                    <p>
                      <span class="font-medium">作者：</span>{{ book.author }}
                      <span v-if="book.translator" class="ml-3">
                        <span class="font-medium">译者：</span>{{ book.translator }}
                      </span>
                    </p>
                    <p>
                      <span class="font-medium">出版：</span>{{ book.publisher }} · {{ book.year }}
                    </p>
                    <p>
                      <span class="font-medium">页数：</span>{{ book.pages }}页
                      <span class="ml-3">
                        <span class="font-medium">ISBN：</span>{{ book.isbn }}
                      </span>
                    </p>
                    <p v-if="book.startDate">
                      <span class="font-medium">阅读时间：</span>
                      {{ book.startDate }}
                      <span v-if="book.finishDate"> ~ {{ book.finishDate }}</span>
                      <span v-else> ~ 进行中</span>
                    </p>
                  </div>
                </div>

                <!-- Review -->
                <div v-if="book.review"
                  class="bg-white/60 dark:bg-stone-800/60 backdrop-blur-sm p-6 border-l-4 border-amber-400 dark:border-amber-600 shadow-md">
                  <div class="flex items-start gap-2 mb-3">
                    <BookMarked :size="18" class="text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                    <h3 class="text-sm font-bold text-amber-700 dark:text-amber-400">我的书评</h3>
                  </div>
                  <p class="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    {{ book.review }}
                  </p>
                </div>

                <!-- Favorite Quote -->
                <div v-if="book.favorite_quote"
                  class="bg-linear-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 p-6 border-2 border-dashed border-amber-300 dark:border-amber-700 shadow-inner">
                  <div class="flex items-start gap-3 mb-3">
                    <Quote :size="24" class="text-amber-500 dark:text-amber-400 shrink-0" />
                    <h3 class="text-sm font-bold text-amber-700 dark:text-amber-400">最喜欢的句子</h3>
                  </div>
                  <blockquote
                    class="text-base md:text-lg text-stone-800 dark:text-stone-200 leading-relaxed italic font-serif">
                    "{{ book.favorite_quote }}"
                  </blockquote>
                </div>

                <!-- Notes -->
                <div v-if="book.notes" class="bg-yellow-100 dark:bg-yellow-900/30 p-5 shadow-lg -rotate-1deg">
                  <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-amber-200/60 dark:bg-amber-800/60">
                  </div>
                  <div class="flex items-start gap-2 mb-2">
                    <Bookmark :size="16" class="text-yellow-700 dark:text-yellow-400 mt-0.5" />
                    <h3 class="text-xs font-bold text-yellow-800 dark:text-yellow-300">📝 阅读笔记</h3>
                  </div>
                  <p class="text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-handwriting">
                    {{ book.notes }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Empty State -->
      <section v-if="filteredBooks.length === 0" class="py-20 text-center">
        <div class="max-w-md mx-auto">
          <BookOpen :size="64" class="text-stone-300 dark:text-stone-700 mx-auto mb-6" />
          <p class="text-xl text-stone-500 dark:text-stone-500 mb-2">暂无书籍</p>
          <p class="text-sm text-stone-400 dark:text-stone-600">这个分类还没有添加书籍哦</p>
        </div>
      </section>

      <!-- Bottom Quote -->
      <section class="mt-20">
        <div class="max-w-3xl mx-auto">
          <div
            class="relative bg-linear-to-br from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 p-12 shadow-2xl -rotate-1deg">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-amber-300/60 dark:bg-amber-700/60"></div>
            <BookOpen :size="48" class="text-amber-400 dark:text-amber-600 mx-auto mb-6 opacity-40" />
            <blockquote
              class="text-2xl md:text-3xl text-stone-800 dark:text-stone-200 leading-relaxed font-handwriting text-center mb-6">
              "读书，是为了遇见<br />
              更好的自己"
            </blockquote>
            <p class="text-center text-sm text-stone-600 dark:text-stone-400 tracking-widest">— Islatri, 2024</p>
          </div>
        </div>
      </section>

    </main>

    <!-- Footer -->
    <footer
      class="mt-20 border-t-4 border-dashed border-amber-300 dark:border-amber-700 bg-stone-100 dark:bg-stone-900 px-6 py-8 relative z-20">
      <div class="max-w-7xl mx-auto text-center">
        <p class="text-xs text-stone-500 dark:text-stone-500">
          © 2025 Islatri 的阅读笔记 · 共收录 {{ booksCollection.length }} 本书籍
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