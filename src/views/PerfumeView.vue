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
    name: '五号香水',
    brand: 'Chanel',
    fullName: 'Chanel No.5 Eau de Parfum',
    concentration: 'EDP',
    volume: '50ml',
    year: 1921,
    perfumer: 'Ernest Beaux',
    bottle: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=600&fit=crop&q=80',
    topNotes: ['醛香', '橙花', '依兰'],
    middleNotes: ['茉莉', '玫瑰', '铃兰'],
    baseNotes: ['檀香木', '香草', '琥珀'],
    mainNote: '花香调',
    sillage: 5, // 香气扩散度 1-5
    longevity: 5, // 留香时间 1-5
    seasons: ['秋', '冬'],
    occasions: ['约会', '晚宴'],
    purchaseDate: '2024-02',
    story: '这是香水界永恒的经典，第一次闻到时就被那种优雅高贵的气质所折服。醛香的开场充满仪式感，随后花香层层绽放，让人想起穿着小黑裙的优雅女性。',
    feeling: '每次喷它都觉得自己变得更加自信优雅。它不是那种甜美可爱的香，而是一种成熟女性的魅力。适合重要场合，能让人记住你。',
    memories: '第一次穿着正装去参加重要会议时喷的就是它，那种从容与自信的感觉至今难忘。',
    rating: 5,
    color: 'from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20',
    accentColor: 'amber'
  },
  {
    id: 2,
    name: '柚子',
    brand: 'Jo Malone',
    fullName: 'Jo Malone Grapefruit Cologne',
    concentration: 'EDC',
    volume: '100ml',
    year: 2003,
    perfumer: 'Christine Nagel',
    bottle: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=600&fit=crop&q=80',
    topNotes: ['葡萄柚', '柑橘', '迷迭香'],
    middleNotes: ['茉莉', '薄荷'],
    baseNotes: ['白麝香', '琥珀'],
    mainNote: '果香调',
    sillage: 3,
    longevity: 3,
    seasons: ['春', '夏'],
    occasions: ['日常', '运动'],
    purchaseDate: '2024-05',
    story: 'Jo Malone的柚子是我的夏日必备。清新的柚子香气像是清晨切开的新鲜水果，充满活力又不失优雅。很适合叠加使用。',
    feeling: '这支香特别适合夏天和运动后使用，清爽不腻。喷在身上像是给自己注入了满满的元气，心情都会变好。',
    memories: '去年夏天旅行时带的就是它，每次喷都能回想起阳光、沙滩和海风的美好时光。',
    rating: 4,
    color: 'from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20',
    accentColor: 'cyan'
  },
  {
    id: 3,
    name: '黑鸦片',
    brand: 'YSL',
    fullName: 'Yves Saint Laurent Black Opium',
    concentration: 'EDP',
    volume: '50ml',
    year: 2014,
    perfumer: 'Nathalie Lorson, Marie Salamagne',
    bottle: 'https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=400&h=600&fit=crop&q=80',
    topNotes: ['咖啡', '粉红胡椒', '橙花'],
    middleNotes: ['茉莉', '杏仁', '甘草'],
    baseNotes: ['香草', '广藿香', '雪松'],
    mainNote: '东方调',
    sillage: 5,
    longevity: 5,
    seasons: ['秋', '冬'],
    occasions: ['约会', '夜晚'],
    purchaseDate: '2024-08',
    story: '第一次闻到它就像是走进了一家深夜的咖啡馆，温暖、神秘、充满诱惑。咖啡与香草的组合太上头了。',
    feeling: '这是一支非常性感的香水，适合晚上约会。留香时间超长，第二天衣服上还能闻到。甜而不腻，很有存在感。',
    memories: '冬天的夜晚，穿着黑色大衣走在街上，空气中飘着这支香的味道，感觉自己是电影里的女主角。',
    rating: 5,
    color: 'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20',
    accentColor: 'purple'
  },
  {
    id: 4,
    name: '无人区玫瑰',
    brand: 'Byredo',
    fullName: 'Byredo Rose of No Man\'s Land',
    concentration: 'EDP',
    volume: '50ml',
    year: 2019,
    perfumer: 'Jerome Epinette',
    bottle: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=400&h=600&fit=crop&q=80',
    topNotes: ['粉红胡椒', '土耳其玫瑰'],
    middleNotes: ['覆盆子', '白琥珀'],
    baseNotes: ['麝香', '木质香', '番红花'],
    mainNote: '花香调',
    sillage: 4,
    longevity: 4,
    seasons: ['春', '秋'],
    occasions: ['日常', '约会'],
    purchaseDate: '2024-09',
    story: '这是一支致敬一战战地护士的香水。玫瑰的优雅与木质的坚强相结合，既温柔又有力量。不是甜腻的玫瑰，而是有个性的玫瑰。',
    feeling: '很喜欢这支香的概念和气味。它让我想起那些在困境中依然保持优雅的女性，既柔软又坚韧。',
    memories: '在一个秋雨绵绵的下午，读着关于战地护士的故事时喷的，那种共鸣感特别强。',
    rating: 5,
    color: 'from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20',
    accentColor: 'rose'
  },
  {
    id: 5,
    name: '冷水',
    brand: 'Davidoff',
    fullName: 'Davidoff Cool Water',
    concentration: 'EDT',
    volume: '100ml',
    year: 1988,
    perfumer: 'Pierre Bourdon',
    bottle: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=600&fit=crop&q=80',
    topNotes: ['薄荷', '薰衣草', '香菜'],
    middleNotes: ['檀香木', '茉莉', '橙花'],
    baseNotes: ['麝香', '琥珀', '烟草'],
    mainNote: '清新调',
    sillage: 3,
    longevity: 4,
    seasons: ['春', '夏'],
    occasions: ['日常', '运动'],
    purchaseDate: '2024-06',
    story: '经典的男香，但我很喜欢它的清爽感。海洋调的香气让人联想到大海和自由，非常适合夏天。中性的调性让它成为我的日常选择。',
    feeling: '这支香给人一种清爽干净的感觉，适合炎热的天气。虽然是男香但并不会过于阳刚，很好闻。',
    memories: '去海边度假时带的，海风、阳光、这支香的味道，完美的夏日记忆。',
    rating: 4,
    color: 'from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20',
    accentColor: 'blue'
  },
  {
    id: 6,
    name: '失重',
    brand: 'Maison Margiela',
    fullName: 'Maison Margiela Replica Lazy Sunday Morning',
    concentration: 'EDT',
    volume: '100ml',
    year: 2019,
    perfumer: 'Antoine Maisondieu',
    bottle: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=600&fit=crop&q=80',
    topNotes: ['梨', '佛手柑', '醛香'],
    middleNotes: ['鸢尾花', '玫瑰', '橙花'],
    baseNotes: ['白麝香', '琥珀', '广藿香'],
    mainNote: '清新调',
    sillage: 3,
    longevity: 4,
    seasons: ['春', '夏', '秋'],
    occasions: ['日常', '居家'],
    purchaseDate: '2024-10',
    story: 'Replica系列总能捕捉到某个特定时刻的气味。这支香让我想起慵懒的周日早晨，阳光透过窗帘，空气中弥漫着清新的亚麻味道。',
    feeling: '非常舒适的一支香，像是刚洗完澡穿上干净衣服的感觉。很适合居家或者周末出门，不会给人压力。',
    memories: '在家办公的日子里，这支香陪伴了我很多个早晨，让每一天的开始都充满仪式感。',
    rating: 4,
    color: 'from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20',
    accentColor: 'indigo'
  },
  {
    id: 7,
    name: '失落的樱桃',
    brand: 'Tom Ford',
    fullName: 'Tom Ford Lost Cherry',
    concentration: 'EDP',
    volume: '50ml',
    year: 2018,
    perfumer: 'Louise Turner',
    bottle: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=600&fit=crop&q=80',
    topNotes: ['黑樱桃', '樱桃利口酒'],
    middleNotes: ['苦杏仁', '茉莉', '秘鲁香脂'],
    baseNotes: ['香草', '檀香木', '雪松', '广藿香'],
    mainNote: '美食调',
    sillage: 5,
    longevity: 5,
    seasons: ['秋', '冬'],
    occasions: ['约会', '晚宴'],
    purchaseDate: '2024-11',
    story: '这是Tom Ford最性感的作品之一。樱桃的甜美与苦杏仁的微苦形成完美平衡，后调的木质香让整体香气更加饱满立体。',
    feeling: '非常诱人的一支香，甜而不腻，性感中带着一丝危险。留香时间超级长，存在感很强，适合想要被注意到的场合。',
    memories: '收到这支香是在冬天，第一次喷就爱上了。那种温暖甜美的感觉在寒冷的季节里格外治愈。',
    rating: 5,
    color: 'from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20',
    accentColor: 'red'
  }
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
              Islatri 的小宇宙
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
                23款香水，23段气味记忆<br />
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
              "香水是最强烈的记忆载体<br />
              一滴香就是一段往事"
            </blockquote>
            <p class="text-center text-sm text-stone-600 dark:text-stone-400 tracking-widest">— Islatri, 2024</p>
          </div>
        </div>
      </section>

    </main>

    <!-- Footer -->
    <footer
      class="mt-20 border-t-4 border-dashed border-indigo-300 dark:border-indigo-700 bg-stone-100 dark:bg-stone-900 px-6 py-8 relative z-20">
      <div class="max-w-7xl mx-auto text-center">
        <p class="text-xs text-stone-500 dark:text-stone-500">
          © 2025 Islatri 的香氛日记 · 共收录 {{ perfumeCollection.length }} 款香水
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