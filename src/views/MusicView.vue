<script setup lang="ts">
import { ref, computed } from 'vue'
import { Play, Pause, Music, Heart, ListMusic, Disc, Quote } from 'lucide-vue-next'
import ScrapbookDecorations from '../components/ScrapbookDecorations.vue'

// 当前播放的歌曲
const currentPlaying = ref<number | null>(null)
const showLyrics = ref<number | null>(null)

// 音乐收藏列表
const musicCollection = ref([
  {
    id: 1,
    title: '起风了',
    artist: '买辣椒也用券',
    album: '起风了',
    year: '2017',
    genre: '国语流行',
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&q=80',
    neteaseId: '1330348068', // 网易云音乐ID
    story: '这首歌让我想起了那年夏天的风，骑着单车穿过林荫道，所有的烦恼都随风而去。',
    lyrics: `这一路上走走停停\n顺着少年漂流的痕迹\n迈出车站的前一刻\n竟有些犹豫\n不禁笑这近乡情怯\n仍无法避免\n而长野的天\n依旧那么暖\n风吹起了从前`,
    tags: ['治愈', '民谣', '青春'],
    rating: 5,
    playCount: 234
  },
  {
    id: 2,
    title: 'Someone Like You',
    artist: 'Adele',
    album: '21',
    year: '2011',
    genre: 'Pop/Soul',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&q=80',
    neteaseId: '3986241',
    story: 'Adele的声音总能触动内心最柔软的地方，每次听到都会想起某个特别的人。',
    lyrics: `Never mind, I'll find someone like you\nI wish nothing but the best for you too\nDon't forget me, I beg\nI remember you said\nSometimes it lasts in love\nBut sometimes it hurts instead`,
    tags: ['灵魂', '情感', '经典'],
    rating: 5,
    playCount: 567
  },
  {
    id: 3,
    title: '夜曲',
    artist: '周杰伦',
    album: '十一月的萧邦',
    year: '2005',
    genre: '中国风',
    cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop&q=80',
    neteaseId: '185668',
    story: '周董的经典之作，复古的钢琴声配上独特的嗓音，百听不厌的神曲。',
    lyrics: `一群嗜血的蚂蚁\n被腐肉所吸引\n我面无表情\n看孤独的风景\n失去你\n爱恨开始分明\n失去你\n还有什么事好关心`,
    tags: ['中国风', '经典', 'R&B'],
    rating: 5,
    playCount: 892
  },
  {
    id: 4,
    title: 'Bloom',
    artist: 'The Paper Kites',
    album: 'Woodland',
    year: '2011',
    genre: 'Indie Folk',
    cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop&q=80',
    neteaseId: '26583079',
    story: '安静的午后，泡一杯咖啡，这首歌仿佛能让时间慢下来。',
    lyrics: `In the morning when I wake\nAnd the sun is coming through\nOh, you fill my lungs with sweetness\nAnd you fill my head with you`,
    tags: ['民谣', '独立音乐', '轻柔'],
    rating: 4,
    playCount: 156
  },
  {
    id: 5,
    title: '云烟成雨',
    artist: '房东的猫',
    album: '云烟成雨',
    year: '2017',
    genre: '国语流行',
    cover: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop&q=80',
    neteaseId: '569200213',
    story: '深夜单曲循环，歌词写进了心里，每个字都是故事。',
    lyrics: `如烟往事\n俱忘却\n心底波澜现\n抑制不住的怀念\n云烟成雨\n泪湿衣襟`,
    tags: ['抒情', '治愈', '国风'],
    rating: 5,
    playCount: 445
  },
  {
    id: 6,
    title: 'La Vie En Rose',
    artist: 'Édith Piaf',
    album: 'La Vie En Rose',
    year: '1947',
    genre: 'French Chanson',
    cover: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop&q=80',
    neteaseId: '2992493',
    story: '法语的浪漫在这首歌里体现得淋漓尽致，vintage的感觉让人沉醉。',
    lyrics: `Quand il me prend dans ses bras\nIl me parle tout bas\nJe vois la vie en rose`,
    tags: ['法语', '经典', '浪漫'],
    rating: 5,
    playCount: 321
  }
])

// 当前选中的类型过滤
const currentFilter = ref('all')
const filters = ['all', '治愈', '经典', '民谣', '中国风', '情感']

// 过滤后的音乐列表
const filteredMusic = computed(() => {
  if (currentFilter.value === 'all') return musicCollection.value
  return musicCollection.value.filter(music =>
    music.tags.includes(currentFilter.value)
  )
})

// 切换播放
const togglePlay = (id: number) => {
  currentPlaying.value = currentPlaying.value === id ? null : id
}

// 切换歌词显示
const toggleLyrics = (id: number) => {
  showLyrics.value = showLyrics.value === id ? null : id
}

// 获取网易云播放器 iframe
const getNeteasePlayer = (id: string) => {
  return `//music.163.com/outchain/player?type=2&id=${id}&auto=0&height=66`
}
</script>

<template>
  <div class="relative min-h-screen">

    <!-- Decorations -->
    <ScrapbookDecorations />

    <!-- Sticky Navigation -->
    <nav class="sticky top-0 z-50 bg-purple-200/80 dark:bg-purple-900/50 backdrop-blur-sm shadow-sm">
      <div class="max-w-7xl mx-auto px-6 py-3">
        <div class="flex items-center justify-between">
          <RouterLink to="/" class="flex items-center gap-3 group">
            <div
              class="w-6 h-6 bg-purple-400 dark:bg-purple-600 rounded-full group-hover:rotate-90 transition-transform duration-500 shadow-md">
            </div>
            <span
              class="font-handwriting text-xl text-stone-800 dark:text-stone-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 relative">
              Islatri 的小宇宙
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 dark:bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </span>
          </RouterLink>
          <div class="flex items-center gap-6">
            <RouterLink to="/"
              class="text-stone-700 dark:text-stone-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium text-sm">
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
            <div class="inline-flex items-center gap-3 px-4 py-2 bg-white dark:bg-stone-800 shadow-md -rotate-2deg">
              <Music :size="24" class="text-purple-600 dark:text-purple-400" />
              <span class="text-sm font-bold text-stone-700 dark:text-stone-300 tracking-wider">MUSIC ARCHIVE</span>
            </div>

            <div class="bg-white dark:bg-stone-800 p-8 shadow-xl rotate-1deg group">
              <h1 class="text-5xl md:text-6xl font-bold text-stone-900 dark:text-stone-100 mb-4 leading-tight">
                我的<br />
                <span class="relative inline-block text-purple-600 dark:text-purple-400">
                  音乐日记
                  <span
                    class="absolute bottom-1 left-0 w-0 h-0.5 bg-purple-600 dark:bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </h1>
              <p class="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                342首歌，342种心情<br />
                每一首都是生命中的soundtrack
              </p>
            </div>

            <div
              class="bg-linear-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 border-l-4 border-purple-400 dark:border-purple-600 shadow-lg -rotate-1deg">
              <p class="text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-handwriting">
                "音乐是时间的艺术，它不占据空间，却能填满心灵。在旋律与节奏中，我找到了与世界对话的另一种语言。"
              </p>
            </div>
          </div>

          <!-- Right - Vinyl Record Collage -->
          <div class="relative h-[500px]">
            <!-- Large Vinyl -->
            <div
              class="absolute top-0 right-0 w-72 h-72 bg-white dark:bg-stone-800 rounded-full p-4 shadow-2xl rotate-15deg hover:rotate-[8deg] transition-transform duration-500">
              <div
                class="w-full h-full rounded-full bg-linear-to-br from-purple-900 to-black dark:from-purple-600 dark:to-purple-900 flex items-center justify-center relative overflow-hidden">
                <div
                  class="absolute inset-0 bg-[radial-linear(circle_at_center,transparent_30%,rgba(0,0,0,0.3)_31%,transparent_32%,transparent_45%,rgba(0,0,0,0.2)_46%,transparent_47%)]">
                </div>
                <div
                  class="w-20 h-20 rounded-full bg-stone-800 dark:bg-stone-300 flex items-center justify-center z-10">
                  <Disc :size="32" class="text-purple-400 dark:text-purple-600" />
                </div>
              </div>
            </div>

            <!-- Small Vinyl -->
            <div
              class="absolute bottom-12 left-8 w-48 h-48 bg-white dark:bg-stone-800 rounded-full p-3 shadow-2xl -rotate-12deg hover:-rotate-6deg transition-transform duration-500">
              <div
                class="w-full h-full rounded-full bg-linear-to-br from-rose-900 to-black dark:from-rose-600 dark:to-rose-900 flex items-center justify-center">
                <div class="w-12 h-12 rounded-full bg-stone-800 dark:bg-stone-300"></div>
              </div>
            </div>

            <!-- Decorative Elements -->
            <div class="absolute top-32 left-4 bg-yellow-100 dark:bg-yellow-900/40 p-4 shadow-lg rotate-[8deg]">
              <p class="text-xs font-handwriting text-stone-700 dark:text-stone-300">🎵 Now<br />Playing</p>
            </div>

            <div class="absolute bottom-0 right-12">
              <Heart :size="40" class="text-pink-400 dark:text-pink-600 fill-current opacity-60" />
            </div>
          </div>
        </div>
      </section>

      <!-- Filter Tags -->
      <section class="mb-12">
        <div class="flex flex-wrap gap-3">
          <button v-for="filter in filters" :key="filter" @click="currentFilter = filter" :class="[
            'px-5 py-2 font-medium text-sm shadow-md transition-all duration-300',
            currentFilter === filter
              ? 'bg-purple-500 dark:bg-purple-600 text-white -rotate-2deg scale-110'
              : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 rotate-1deg hover:rotate-0'
          ]">
            {{ filter === 'all' ? '全部音乐' : `# ${filter}` }}
          </button>
        </div>
      </section>

      <!-- Music Collection Grid -->
      <section class="space-y-12">
        <div v-for="(music, index) in filteredMusic" :key="music.id" class="group">
          <!-- Music Card -->
          <div :class="[
            'relative bg-linear-to-br p-8 md:p-10 border-4 shadow-lg hover:shadow-2xl transition-all duration-500',
            index % 3 === 0 ? 'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600' :
              index % 3 === 1 ? 'from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600' :
                'from-rose-50 to-orange-50 dark:from-rose-950/20 dark:to-orange-950/20 border-rose-200 dark:border-rose-800 hover:border-rose-400 dark:hover:border-rose-600'
          ]">
            <!-- Washi Tape Decoration -->
            <div :class="[
              'absolute -top-3 w-32 h-6 -rotate-2deg',
              index % 3 === 0 ? 'left-12 bg-purple-300/60 dark:bg-purple-700/60' :
                index % 3 === 1 ? 'right-20 bg-blue-300/60 dark:bg-blue-700/60' :
                  'left-24 bg-rose-300/60 dark:bg-rose-700/60'
            ]"></div>

            <div class="grid md:grid-cols-[300px_1fr] gap-8">

              <!-- Left - Album Cover -->
              <div class="space-y-4">
                <div class="relative">
                  <!-- Album Cover Card -->
                  <div
                    class="bg-white dark:bg-stone-800 p-3 shadow-xl -rotate-3deg group-hover:rotate-0 transition-transform duration-500">
                    <img :src="music.cover" :alt="music.title" class="w-full aspect-square object-cover mb-2" />
                    <div class="flex items-center justify-between">
                      <div class="flex-1">
                        <p class="text-xs font-handwriting text-stone-700 dark:text-stone-300">{{ music.title }}</p>
                      </div>
                      <button @click="togglePlay(music.id)"
                        class="w-10 h-10 bg-purple-500 dark:bg-purple-600 hover:bg-purple-600 dark:hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors shadow-lg">
                        <Play v-if="currentPlaying !== music.id" :size="18" class="text-white ml-0.5" />
                        <Pause v-else :size="18" class="text-white" />
                      </button>
                    </div>
                  </div>

                  <!-- Rating Stars -->
                  <div
                    class="absolute -bottom-3 -right-3 bg-amber-400 dark:bg-amber-600 px-4 py-2 shadow-lg rotate-[8deg]">
                    <div class="flex gap-0.5">
                      <span v-for="i in music.rating" :key="i" class="text-white text-sm">★</span>
                    </div>
                  </div>
                </div>

                <!-- Tags -->
                <div class="flex flex-wrap gap-2">
                  <span v-for="tag in music.tags" :key="tag"
                    class="px-3 py-1 bg-white dark:bg-stone-800 text-xs text-stone-600 dark:text-stone-400 shadow-sm -rotate-1deg hover:shadow-md hover:scale-110 transition-all duration-200 cursor-default">
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- Right - Info & Player -->
              <div class="space-y-6">
                <!-- Title & Artist -->
                <div>
                  <h3 class="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                    {{ music.title }}
                  </h3>
                  <p class="text-lg text-stone-600 dark:text-stone-400 mb-1">{{ music.artist }}</p>
                  <p class="text-sm text-stone-500 dark:text-stone-500">
                    {{ music.album }} · {{ music.year }} · {{ music.genre }}
                  </p>
                </div>

                <!-- Story -->
                <div
                  class="bg-white/60 dark:bg-stone-800/60 backdrop-blur-sm p-5 border-l-4 border-purple-400 dark:border-purple-600">
                  <div class="flex items-start gap-2 mb-2">
                    <Quote :size="16" class="text-purple-500 dark:text-purple-400 mt-1" />
                    <p class="text-sm font-bold text-purple-700 dark:text-purple-400">我的故事</p>
                  </div>
                  <p class="text-sm text-stone-700 dark:text-stone-300 leading-relaxed italic">
                    {{ music.story }}
                  </p>
                </div>

                <!-- NetEase Player -->
                <div class="bg-white dark:bg-stone-800 p-4 shadow-lg">
                  <div class="flex items-center justify-between mb-3">
                    <p class="text-xs font-bold text-stone-700 dark:text-stone-300 tracking-wider">网易云音乐播放器</p>
                    <div class="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-500">
                      <Play :size="12" />
                      <span>{{ music.playCount }} 次播放</span>
                    </div>
                  </div>
                  <iframe title="Netease Music Player" :src="getNeteasePlayer(music.neteaseId)" width="100%" height="86"
                    class="rounded"></iframe>
                </div>

                <!-- Lyrics Toggle -->
                <button @click="toggleLyrics(music.id)"
                  class="flex items-center gap-2 px-5 py-3 bg-linear-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 hover:from-purple-200 hover:to-pink-200 dark:hover:from-purple-900/60 dark:hover:to-pink-900/60 text-purple-700 dark:text-purple-300 font-medium text-sm shadow-md transition-all duration-300 -rotate-1deg hover:rotate-0">
                  <ListMusic :size="18" />
                  {{ showLyrics === music.id ? '收起歌词' : '查看歌词' }}
                </button>

                <!-- Lyrics Display -->
                <Transition enter-active-class="transition-all duration-500 ease-out"
                  enter-from-class="opacity-0 max-h-0" enter-to-class="opacity-100 max-h-96"
                  leave-active-class="transition-all duration-300 ease-in" leave-from-class="opacity-100 max-h-96"
                  leave-to-class="opacity-0 max-h-0">
                  <div v-if="showLyrics === music.id"
                    class="bg-linear-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 border-2 border-dashed border-purple-300 dark:border-purple-700 shadow-inner overflow-hidden">
                    <div class="max-h-64 overflow-y-auto custom-scrollbar">
                      <p
                        class="text-sm md:text-base text-stone-700 dark:text-stone-300 leading-loose whitespace-pre-line font-handwriting text-center">
                        {{ music.lyrics }}
                      </p>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom Quote -->
      <section class="mt-20">
        <div class="max-w-3xl mx-auto">
          <div
            class="relative bg-linear-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 p-12 shadow-2xl -rotate-1deg">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-purple-300/60 dark:bg-purple-700/60">
            </div>
            <Music :size="48" class="text-purple-400 dark:text-purple-600 mx-auto mb-6 opacity-40" />
            <blockquote
              class="text-2xl md:text-3xl text-stone-800 dark:text-stone-200 leading-relaxed font-handwriting text-center mb-6">
              "Without music,<br />
              life would be a mistake."
            </blockquote>
            <p class="text-center text-sm text-stone-600 dark:text-stone-400 tracking-widest">— Friedrich Nietzsche</p>
          </div>
        </div>
      </section>

    </main>

    <!-- Footer -->
    <footer
      class="mt-20 border-t-4 border-dashed border-purple-300 dark:border-purple-700 bg-stone-100 dark:bg-stone-900 px-6 py-8 relative z-20">
      <div class="max-w-7xl mx-auto text-center">
        <p class="text-xs text-stone-500 dark:text-stone-500">
          © 2025 Islatri 的音乐收藏 · 共收录 {{ musicCollection.length }} 首歌曲
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

/* Custom Scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(147, 51, 234, 0.3);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(147, 51, 234, 0.5);
}

/* Dark mode scrollbar */
.dark .custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(192, 132, 252, 0.3);
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(192, 132, 252, 0.5);
}
</style>