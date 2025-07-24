<!-- .vitepress/theme/AudioBox.vue -->
<template>
  <div class="audio-box custom-block info">
    <audio
      ref="audio"
      :src="src"
      preload="metadata"
      @loadedmetadata="onLoaded"
      @timeupdate="onTimeupdate"
      @ended="playing = false"
    />

    <!-- 第一行：按钮 / 时间 / 自定义文字 -->
    <div class="audio-row">
      <button
        class="audio-btn"
        :title="playing ? '暂停' : '播放'"
        @click="toggle"
      >
        <span v-html="playing ? svgPause : svgPlay" />
      </button>

      <span class="audio-time">
        {{ formatTime(current) }} / {{ formatTime(duration) }}
      </span>

      <!-- 可插入任意文字 -->
      <span class="audio-text">
        <slot>{{ label }}</slot>
      </span>
    </div>

    <!-- 第二行：大进度条 -->
    <div
      class="audio-progress"
      @click="seek"
      @mousedown="startDrag"
      @touchstart="startDrag"
    >
      <div
        class="audio-progress-bar"
        :style="{ width: percent + '%' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  src: string
  label?: string
}
const { src, label = 'Audio' } = defineProps<Props>()

const audio = ref<HTMLAudioElement>()
const playing = ref(false)
const current = ref(0)
const duration = ref(0)

/* 内联 SVG（24×24） */
const svgPlay =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7L8 5z"/></svg>'
const svgPause =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>'

function toggle() {
  if (!audio.value) return
  playing.value ? audio.value.pause() : audio.value.play()
  playing.value = !playing.value
}
function onLoaded() {
  duration.value = audio.value!.duration
}
function onTimeupdate() {
  current.value = audio.value!.currentTime
}
const percent = computed(() => (current.value / duration.value || 0) * 100)

function seek(e: MouseEvent | TouchEvent) {
  const el = e.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
  const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
  audio.value!.currentTime = ratio * duration.value
}
function startDrag(e: MouseEvent | TouchEvent) {
  const el = e.currentTarget as HTMLElement
  const move = (ev: MouseEvent | TouchEvent) => {
    const rect = el.getBoundingClientRect()
    const clientX = 'touches' in ev ? ev.touches[0].clientX : ev.clientX
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    audio.value!.currentTime = ratio * duration.value
  }
  const up = () => {
    document.removeEventListener('mousemove', move)
    document.removeEventListener('touchmove', move)
    document.removeEventListener('mouseup', up)
    document.removeEventListener('touchend', up)
  }
  document.addEventListener('mousemove', move)
  document.addEventListener('touchmove', move)
  document.addEventListener('mouseup', up)
  document.addEventListener('touchend', up)
}
function formatTime(sec: number) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0')
  const s = Math.floor(sec % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}
</script>

<style scoped>
.audio-box {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 20px;
}

.audio-row {
  display: flex;
  align-items: center;
  gap: 16px;
}

.audio-btn {
  all: unset;
  cursor: pointer;
  color: var(--vp-c-brand-1);
  line-height: 0;
  transition: color 0.2s;
}
.audio-btn:hover {
  color: var(--vp-c-brand-2);
}

.audio-time {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  white-space: nowrap;
}

.audio-text {
  font-size: 16px;
  color: var(--vp-c-text-1);
  flex: 1;
}

.audio-progress {
  width: 100%;
  height: 8px;
  background: var(--vp-c-divider);
  border-radius: 4px;
  cursor: pointer;
  position: relative;
}

.audio-progress-bar {
  height: 100%;
  background: var(--vp-c-brand-1);
  border-radius: 4px;
  transition: width 0.1s linear;
}
</style>