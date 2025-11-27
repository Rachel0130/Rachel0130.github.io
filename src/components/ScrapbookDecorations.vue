<script setup lang="ts">
// 极简版装饰组件 - 只保留精选的拍立得照片
// 只在超宽屏幕（>1800px）显示，避免拥挤
</script>

<template>
  <div class="scrapbook-decorations">

    <!-- Left Side - 左侧装饰 (只在超宽屏显示) -->
    <div class="hidden decorations-show:block">
      <!-- Top Left Polaroid -->
      <div class="fixed left-4 ultra-wide:left-12 top-[18%] z-10 hover:z-50 w-60 ultra-wide:w-72">
        <div
          class="bg-white dark:bg-stone-800 p-3 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] rotate-[-8deg] hover:rotate-[-4deg] hover:scale-105 transition-all duration-500 cursor-pointer">
          <img src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=500&h=500&fit=crop&q=80"
            alt="Coffee moment" class="w-full aspect-square object-cover mb-2" />
          <p class="text-center text-sm font-handwriting text-stone-700 dark:text-stone-300">Coffee & Reading ☕</p>
        </div>
      </div>

      <!-- Middle Left Polaroid -->
      <div class="fixed left-8 ultra-wide:left-16 top-[52%] z-10 hover:z-50 w-56 ultra-wide:w-64">
        <div
          class="bg-white dark:bg-stone-800 p-3 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] rotate-6deg hover:rotate-3deg hover:scale-105 transition-all duration-500 cursor-pointer">
          <img src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&h=500&fit=crop&q=80"
            alt="Books collection" class="w-full aspect-square object-cover mb-2" />
          <p class="text-center text-sm font-handwriting text-stone-700 dark:text-stone-300">My Library 📚</p>
        </div>
      </div>

      <!-- Bottom Left Polaroid -->
      <div class="fixed left-6 ultra-wide:left-14 bottom-[8%] z-10 hover:z-50 w-52 ultra-wide:w-60">
        <div
          class="bg-white dark:bg-stone-800 p-3 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] -rotate-12deg -hover:rotate-6deg hover:scale-105 transition-all duration-500 cursor-pointer">
          <img src="https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?w=500&h=500&fit=crop&q=80"
            alt="Tea time" class="w-full aspect-square object-cover mb-2" />
          <p class="text-center text-sm font-handwriting text-stone-700 dark:text-stone-300">Afternoon Tea 🍵</p>
        </div>
      </div>
    </div>

    <!-- Right Side - 右侧装饰 (只在超宽屏显示) -->
    <div class="hidden decorations-show:block">
      <!-- Top Right Polaroid -->
      <div class="fixed right-4 ultra-wide:right-12 top-[22%] z-10 hover:z-50 w-64 ultra-wide:w-72">
        <div
          class="bg-white dark:bg-stone-800 p-3 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] rotate-10deg hover:rotate-5deg hover:scale-105 transition-all duration-500 cursor-pointer">
          <img src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=500&fit=crop&q=80"
            alt="Music vinyl" class="w-full aspect-square object-cover mb-2" />
          <p class="text-center text-sm font-handwriting text-stone-700 dark:text-stone-300">Vinyl Records 🎵</p>
        </div>
      </div>

      <!-- Middle Right Polaroid -->
      <div class="fixed right-6 ultra-wide:right-14 top-[55%] z-10 hover:z-50 w-56 ultra-wide:w-64">
        <div
          class="bg-white dark:bg-stone-800 p-3 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] -rotate-7deg hover:-rotate-3deg hover:scale-105 transition-all duration-500 cursor-pointer">
          <img src="https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=500&h=500&fit=crop&q=80"
            alt="Flowers" class="w-full aspect-square object-cover mb-2" />
          <p class="text-center text-sm font-handwriting text-stone-700 dark:text-stone-300">Fresh Flowers 🌸</p>
        </div>
      </div>

      <!-- Bottom Right Polaroid -->
      <div class="fixed right-8 ultra-wide:right-16 bottom-[10%] z-10 hover:z-50 w-60 ultra-wide:w-68">
        <div
          class="bg-white dark:bg-stone-800 p-3 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] rotate-[8deg] hover:rotate-[4deg] hover:scale-105 transition-all duration-500 cursor-pointer">
          <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop&q=80"
            alt="Aesthetic flat lay" class="w-full aspect-square object-cover mb-2" />
          <p class="text-center text-sm font-handwriting text-stone-700 dark:text-stone-300">Aesthetic Life ✨</p>
        </div>
      </div>
    </div>

    <!-- Optional: Ultra Wide Screen Extra Touch - 超超大屏幕的小点缀 -->
    <div class="hidden ultra-wide:block">
      <!-- Left Mini Note -->
      <div class="fixed left-[2%] top-[40%] z-10 hover:z-50">
        <div
          class="bg-linear-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/50 dark:to-amber-900/50 p-4 shadow-lg hover:shadow-2xl rotate-[-4deg] hover:-rotate-1deg hover:scale-110 transition-all duration-500 cursor-pointer">
          <p class="text-xs font-handwriting text-stone-700 dark:text-stone-300 leading-relaxed">
            "记录<br />生活"
          </p>
        </div>
      </div>

      <!-- Right Mini Note -->
      <div class="fixed right-[2%] top-[38%] z-10 hover:z-50">
        <div
          class="bg-linear-to-br from-pink-100 to-rose-100 dark:from-pink-900/50 dark:to-rose-900/50 p-4 shadow-lg hover:shadow-2xl rotate-[5deg] hover:rotate-2deg hover:scale-110 transition-all duration-500 cursor-pointer">
          <p class="text-xs font-handwriting text-stone-700 dark:text-stone-300 leading-relaxed">
            "珍藏<br />时光"
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');

.font-handwriting {
  font-family: 'Kalam', cursive;
}

.scrapbook-decorations {
  pointer-events: none;
}

.scrapbook-decorations>*>* {
  pointer-events: auto;
}

/* 自定义超宽屏断点 */
/* decorations-show: 1800px+ 才显示装饰 */
@media (min-width: 1800px) {
  .decorations-show\:block {
    display: block;
  }
}

/* ultra-wide: 2000px+ 显示额外装饰 */
@media (min-width: 2000px) {
  .ultra-wide\:block {
    display: block;
  }

  .ultra-wide\:left-12 {
    left: 3rem;
  }

  .ultra-wide\:left-14 {
    left: 3.5rem;
  }

  .ultra-wide\:left-16 {
    left: 4rem;
  }

  .ultra-wide\:right-12 {
    right: 3rem;
  }

  .ultra-wide\:right-14 {
    right: 3.5rem;
  }

  .ultra-wide\:right-16 {
    right: 4rem;
  }

  .ultra-wide\:w-60 {
    width: 15rem;
  }

  .ultra-wide\:w-64 {
    width: 16rem;
  }

  .ultra-wide\:w-72 {
    width: 18rem;
  }
}
</style>