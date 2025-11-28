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
    cover: '/s35027689.jpg',
    rating: 5,
    status: 'finished',
    progress: 100,
    startDate: '2024-01',
    finishDate: '2024-02',
    tags: ['魔幻现实主义', '拉美文学', '经典'],
    review: '马尔克斯用魔幻现实主义的手法，讲述了布恩迪亚家族七代人的兴衰史。书中充满了奇幻的元素，却又深刻反映了拉丁美洲的历史与现实。每一个人物都栩栩如生，每一个细节都令人难忘。',
    favorite_quote: '时间不是一条直线，而是一个圆圈，过去、现在和未来不断交织在一起。',
    notes: '这本书让我深刻体会到时间的循环与宿命的力量。马尔克斯的语言充满诗意，每一个细节都值得细细品味。',
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
    cover: '/sea.png',
    rating: 4,
    status: 'finished',
    progress: 100,
    startDate: '2024-03',
    finishDate: '2024-03',
    tags: ['美国文学', '梦想', '哲学'],
    review: '乔纳森是一只与众不同的海鸥，他渴望飞得更高、更远，追求完美的飞行艺术。通过他的故事，巴赫传达了追求梦想、超越自我的理念。这本书虽然短小，却充满了哲理和启示。',
    favorite_quote: '你必须不断地超越自己，才能发现更广阔的天空。',
    notes: '这本书让我重新思考了梦想与现实的关系。乔纳森的坚持和勇气令人敬佩，激励我在生活中也要勇敢追求自己的理想。',
    color: 'from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20'
  },
  {
    id: 3,
    title: '另一个，同一个',
    originalTitle: 'El otro, el mismo',
    author: '博尔赫斯',
    translator: '王永年',
    publisher: '上海译文新文本',
    year: '2016',
    pages: 187,
    isbn: '9787532771257',
    cover: '/获取高清封面.png',
    rating: 5,
    status: 'reading',
    progress: 65,
    startDate: '2024-11',
    finishDate: null,
    tags: ['阿根廷文学', '诗歌', '艺术'],
    review: '正在阅读中。博尔赫斯创作于一九六四年的诗集，也是作者特别偏爱的一本，收诗七十五篇，包括名作《关于天赐的诗》、《猜测的诗》、《玫瑰与弥尔顿》、《胡宁》等',
    favorite_quote: '我给你一个从未有过信仰的人的忠诚。 我给你我设法保全的我自己的核心——不营字造句，不和梦想交易，不被时间、欢乐和逆境触动的核心。',
    notes: '博尔赫斯的诗歌总是充满哲思与想象，语言简练却意蕴深远。每读一首都能引发无尽的思考。',
    color: 'from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20'
  },
  {
    id: 4,
    title: '小王子',
    originalTitle: 'Le Petit Prince',
    author: '圣埃克苏佩里',
    translator: '马振聘',
    publisher: '人民文学出版社',
    year: '2003',
    pages: 120,
    isbn: '9787020042494',
    cover: '/小王子 ｜圣埃克苏佩里 ｜法文封面_1_KINGFISH_来自小红书网页版.jpg',
    rating: 5,
    status: 'finished',
    progress: 100,
    startDate: '2024-09',
    finishDate: '2024-09',
    tags: ['童话', '哲理', '法国文学'],
    review: '小王子通过一个纯真的小男孩的视角，探讨了爱、孤独、友谊和人生的意义。',
    favorite_quote: '真正重要的东西，用眼睛是看不见的，必须用心去感受。',
    notes: '小王子的故事虽然简单，却蕴含了深刻的人生哲理。它提醒我们保持童心，珍惜眼前的美好。',
    color: 'from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20'
  },
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
              A Room of My Own
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
                “生命久如暗室，不妨我明写春诗”<br />
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
              "每览昔人兴感之由，若合一契，<br />
              未尝不临文嗟悼，不能喻之于怀"
            </blockquote>
            <p class="text-center text-sm text-stone-600 dark:text-stone-400 tracking-widest">— Rachel, 2024</p>
          </div>
        </div>
      </section>

    </main>

    <!-- Footer -->
    <footer
      class="mt-20 border-t-4 border-dashed border-amber-300 dark:border-amber-700 bg-stone-100 dark:bg-stone-900 px-6 py-8 relative z-20">
      <div class="max-w-7xl mx-auto text-center">
        <p class="text-xs text-stone-500 dark:text-stone-500">
          © 2025 Rachel 的阅读笔记 · 共收录 {{ booksCollection.length }} 本书籍
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