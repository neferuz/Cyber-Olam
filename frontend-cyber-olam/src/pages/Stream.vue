<template>
  <div class="streams-page">
    <div class="streams-filters-wrap">
      <div class="streams-filters-bg">
        <button
          v-for="filter in filters"
          :key="filter.value"
          :class="['streams-filter', { active: currentFilter === filter.value }]"
          @click="currentFilter = filter.value"
        >
          {{ filter.label }}
        </button>
      </div>
    </div>
    <div class="streams-section">
      <div class="streams-block">
        <div class="streams-block-title">Турниры</div>
        <div class="streams-cards-row">
          <div
            v-for="(card, idx) in tournamentCards"
            :key="'tournament-' + idx"
            class="stream-card"
          >
            <div class="stream-card-img-wrap">
              <img :src="card.img" alt="stream" class="stream-card-img" />
              <div class="stream-card-live" v-if="card.live">
                <span class="live-dot-animated">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle class="live-dot-pulse" cx="8" cy="8" r="6" fill="#fff"/>
                  </svg>
                </span>
                ПРЯМОЙ ЭФИР
              </div>
              <div class="stream-card-viewers">
                {{ card.viewers }} зрителей
              </div>
            </div>
            <div class="stream-card-content">
              <div class="stream-card-title">{{ card.title }}</div>
              <div class="stream-card-user-row">
                <img :src="card.avatar" alt="avatar" class="stream-card-avatar" />
                <span class="stream-card-nick">{{ card.streamer }}</span>
                <span v-if="card.streamerVerified" class="stream-card-verified">✔</span>
                <span class="stream-card-game">{{ card.game }}</span>
              </div>
              <div class="stream-card-lang-row">
                <span class="stream-card-lang">{{ card.lang }}</span>
                <span class="stream-card-more">⋯</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="streams-block">
        <div class="streams-block-title blue">Активные каналы</div>
        <div class="streams-cards-row">
          <div
            v-for="(card, idx) in activeCards"
            :key="'active-' + idx"
            class="stream-card"
          >
            <div class="stream-card-img-wrap">
              <img :src="card.img" alt="stream" class="stream-card-img" />
              <div class="stream-card-live" v-if="card.live">
                <span class="live-dot-animated">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle class="live-dot-pulse" cx="8" cy="8" r="6" fill="#fff"/>
                  </svg>
                </span>
                ПРЯМОЙ ЭФИР
              </div>
              <div class="stream-card-viewers">
                {{ card.viewers }} зрителей
              </div>
            </div>
            <div class="stream-card-content">
              <div class="stream-card-title">{{ card.title }}</div>
              <div class="stream-card-user-row">
                <img :src="card.avatar" alt="avatar" class="stream-card-avatar" />
                <span class="stream-card-nick">{{ card.streamer }}</span>
                <span v-if="card.streamerVerified" class="stream-card-verified">✔</span>
                <span class="stream-card-game">{{ card.game }}</span>
              </div>
              <div class="stream-card-lang-row">
                <span class="stream-card-lang">{{ card.lang }}</span>
                <span class="stream-card-more">⋯</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="streams-block">
        <div class="streams-block-title blue">Сетевые шутеры</div>
        <div class="streams-cards-row">
          <div
            v-for="(card, idx) in shooterCards"
            :key="'shooter-' + idx"
            class="stream-card"
          >
            <div class="stream-card-img-wrap">
              <img :src="card.img" alt="stream" class="stream-card-img" />
              <div class="stream-card-live" v-if="card.live">
                <span class="live-dot-animated">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle class="live-dot-pulse" cx="8" cy="8" r="6" fill="#fff"/>
                  </svg>
                </span>
                ПРЯМОЙ ЭФИР
              </div>
              <div class="stream-card-viewers">
                {{ card.viewers }} зрителей
              </div>
            </div>
            <div class="stream-card-content">
              <div class="stream-card-title">{{ card.title }}</div>
              <div class="stream-card-user-row">
                <img :src="card.avatar" alt="avatar" class="stream-card-avatar" />
                <span class="stream-card-nick">{{ card.streamer }}</span>
                <span v-if="card.streamerVerified" class="stream-card-verified">✔</span>
                <span class="stream-card-game">{{ card.game }}</span>
              </div>
              <div class="stream-card-lang-row">
                <span class="stream-card-lang">{{ card.lang }}</span>
                <span class="stream-card-more">⋯</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const filters = [
  { label: 'CS 2', value: 'cs2' },
  { label: 'DOTA 2', value: 'dota2' },
  { label: 'VALARANT', value: 'valarant' },
  { label: 'MOBILE LEGENDS', value: 'mobilelegends' },
]
const currentFilter = ref('cs2')

const tournamentCards = [
  {
    img: '/stream1.png',
    viewers: '2,5 тыс.',
    title: 'Gorem ipsum dolor sit amet, consectetur adip odio mattis.',
    avatar: '/avatars.png',
    streamer: 'Deko',
    streamerVerified: true,
    teams: 'NAVI, SPIRIT, FNATIC',
    lang: 'Русский',
    live: true,
    tag: 'Deko',
    game: 'NAVI, SPIRIT, FNATIC',
    langIcon: '',
  },
  {
    img: '/stream1.png',
    viewers: '2,5 тыс.',
    title: 'Gorem ipsum dolor sit amet, consectetur adip odio mattis.',
    avatar: '/avatars.png',
    streamer: 'Deko',
    streamerVerified: true,
    teams: 'NAVI, SPIRIT, FNATIC',
    lang: 'Русский',
    live: true,
    tag: 'Deko',
    game: 'NAVI, SPIRIT, FNATIC',
    langIcon: '',
  },
  {
    img: '/stream1.png',
    viewers: '2,5 тыс.',
    title: 'Gorem ipsum dolor sit amet, consectetur adip odio mattis.',
    avatar: '/avatars.png',
    streamer: 'Deko',
    streamerVerified: true,
    teams: 'NAVI, SPIRIT, FNATIC',
    lang: 'Русский',
    live: true,
    tag: 'Deko',
    game: 'NAVI, SPIRIT, FNATIC',
    langIcon: '',
  },
]
const activeCards = [
  {
    img: '/stream2.png',
    viewers: '2,5 тыс.',
    title: 'Gorem ipsum dolor sit amet, consectetur adip odio mattis.',
    avatar: '/avatars.png',
    streamer: 'Deko',
    streamerVerified: true,
    teams: 'Dota 2',
    lang: 'Русский',
    live: true,
    tag: 'Deko',
    game: 'Dota 2',
    langIcon: '',
  },
  {
    img: '/stream2.png',
    viewers: '2,5 тыс.',
    title: 'Gorem ipsum dolor sit amet, consectetur adip odio mattis.',
    avatar: '/avatars.png',
    streamer: 'Deko',
    streamerVerified: true,
    teams: 'Dota 2',
    lang: 'Русский',
    live: true,
    tag: 'Deko',
    game: 'Dota 2',
    langIcon: '',
  },
  {
    img: '/stream2.png',
    viewers: '2,5 тыс.',
    title: 'Gorem ipsum dolor sit amet, consectetur adip odio mattis.',
    avatar: '/avatars.png',
    streamer: 'Deko',
    streamerVerified: true,
    teams: 'Dota 2',
    lang: 'Русский',
    live: true,
    tag: 'Deko',
    game: 'Dota 2',
    langIcon: '',
  },
]
const shooterCards = [
  {
    img: '/stream3.png',
    viewers: '2,5 тыс.',
    title: 'Gorem ipsum dolor sit amet, consectetur adip odio mattis.',
    avatar: '/avatars.png',
    streamer: 'Deko',
    streamerVerified: true,
    teams: 'CS 2',
    lang: 'Английский',
    live: true,
    tag: 'Deko',
    game: 'CS 2',
    langIcon: '',
  },
  {
    img: '/stream3.png',
    viewers: '2,5 тыс.',
    title: 'Gorem ipsum dolor sit amet, consectetur adip odio mattis.',
    avatar: '/avatars.png',
    streamer: 'Deko',
    streamerVerified: true,
    teams: 'CS 2',
    lang: 'Английский',
    live: true,
    tag: 'Deko',
    game: 'CS 2',
    langIcon: '',
  },
  {
    img: '/stream3.png',
    viewers: '2,5 тыс.',
    title: 'Gorem ipsum dolor sit amet, consectetur adip odio mattis.',
    avatar: '/avatars.png',
    streamer: 'Deko',
    streamerVerified: true,
    teams: 'CS 2',
    lang: 'Английский',
    live: true,
    tag: 'Deko',
    game: 'CS 2',
    langIcon: '',
  },
]
</script>

<script>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
:root, body {
  font-family: 'Manrope', sans-serif !important;
}
.streams-page {
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.streams-filters-wrap {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 32px;
}
.streams-filters-bg {
  background: #fff;
  border-radius: 32px;
  display: flex;
  align-items: center;
  padding: 2px 0 2px 0;
  box-shadow: none;
  width: auto;
  gap: 24px;
}
.streams-filter {
  border: none;
  outline: none;
  background: transparent;
  color: #90caf9;
  font-size: 1.08rem;
  font-weight: 600;
  padding: 10px 32px;
  border-radius: 28px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  margin: 0;
}
.streams-filter.active {
  background: #2563eb;
  color: #fff;
  font-weight: 700;
}
.streams-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 38px;
}
.streams-block {
  width: 100%;
  margin-bottom: 0;
}
.streams-block-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: #2563eb;
  margin-bottom: 18px;
  margin-top: 0;
}
.streams-block-title.blue {
  color: #2196f3;
}
.streams-cards-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
}
/* Добавляю стили карточки стрима из StreamCard.vue */
.stream-card {
  background: #fff;
  border-radius: 22px;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-width: 0;
  transition: box-shadow 0.18s;
  position: relative;
}
.stream-card-img-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16/8;
  overflow: hidden;
}
.stream-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 22px;
}
.stream-card-live {
  position: absolute;
  top: 14px;
  left: 14px;
  background: #ff2d2d;
  color: #fff;
  font-size: 1.02rem;
  font-weight: 800;
  border-radius: 16px;
  padding: 6px 18px;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 2;
  letter-spacing: 0.01em;
}
.live-dot {
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
  display: inline-block;
}
.stream-card-viewers {
  position: absolute;
  left: 14px;
  bottom: 14px;
  background: rgba(30,30,30,0.75);
  color: #fff;
  font-size: 1.08rem;
  font-weight: 700;
  border-radius: 16px;
  padding: 7px 18px;
  z-index: 2;
}
.stream-card-content {
  padding: 16px 18px 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.stream-card-title {
  font-size: 1.08rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 2px;
  line-height: 1.18;
  max-width: 100%;
  word-break: break-word;
}
.stream-card-user-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.02rem;
  font-weight: 700;
  color: #90caf9;
}
.stream-card-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}
.stream-card-nick {
  color: #2196f3;
  font-weight: 700;
}
.stream-card-verified {
  color: #2196f3;
  font-size: 1.1em;
  margin-left: 2px;
}
.stream-card-game {
  font-size: 1.02rem;
  color: #bdbdbd;
  font-weight: 600;
  margin-left: 8px;
}
.stream-card-lang-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
}
.stream-card-lang {
  background: #f2f2f2;
  color: #666;
  font-size: 1.02rem;
  font-weight: 700;
  border-radius: 16px;
  padding: 7px 22px;
  display: inline-block;
}
.stream-card-more {
  margin-left: auto;
  font-size: 1.5rem;
  color: #bdbdbd;
  cursor: pointer;
  font-weight: 700;
}
/* Добавляю анимацию для live-dot-animated */
.live-dot-animated {
  display: flex;
  align-items: center;
  margin-right: 8px;
}
.live-dot-animated svg {
  display: block;
}
.live-dot-pulse {
  animation: live-dot-pulse 1.1s infinite cubic-bezier(0.66, 0, 0, 1);
  transform-origin: center;
}
@keyframes live-dot-pulse {
  0% { transform: scale(1); opacity: 1; }
  60% { transform: scale(1.35); opacity: 0.25; }
  100% { transform: scale(1); opacity: 1; }
}
/* Добавляю стили и анимацию для live-icon-animated */
.live-icon-animated {
  display: inline-flex;
  align-items: center;
  margin-right: 7px;
  position: relative;
}
.live-icon-animated svg {
  display: block;
}
.live-wave {
  stroke: #fff;
  opacity: 0.7;
  transform-origin: center;
  animation: live-wave-pulse 1.2s infinite cubic-bezier(0.66, 0, 0, 1);
}
.live-wave2 {
  stroke: #fff;
  opacity: 0.4;
  transform-origin: center;
  animation: live-wave-pulse2 1.2s infinite cubic-bezier(0.66, 0, 0, 1);
}
@keyframes live-wave-pulse {
  0% { transform: scale(1); opacity: 0.7; }
  60% { transform: scale(1.25); opacity: 0.1; }
  100% { transform: scale(1); opacity: 0.7; }
}
@keyframes live-wave-pulse2 {
  0% { transform: scale(1); opacity: 0.4; }
  60% { transform: scale(1.45); opacity: 0.05; }
  100% { transform: scale(1); opacity: 0.4; }
}
/* Стили для новой статичной live-dot */
.live-dot-static {
  display: flex;
  align-items: center;
  margin-right: 8px;
}
.live-dot-static svg {
  display: block;
}
@media (max-width: 900px) {
  .streams-filters-bg {
    border-radius: 18px;
    padding: 2px 0 2px 0;
    gap: 8px;
    width: auto;
  }
  .streams-filter {
    font-size: 0.95rem;
    padding: 6px 12px;
    border-radius: 14px;
  }
  .streams-cards-row {
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }
  .stream-card-content {
    padding: 10px 8px 10px 8px;
    gap: 6px;
  }
  .stream-card-title {
    font-size: 0.98rem;
  }
  .stream-card-avatar {
    width: 24px;
    height: 24px;
  }
  .stream-card-lang {
    font-size: 0.95rem;
    padding: 5px 12px;
  }
}
@media (max-width: 600px) {
  .streams-cards-row {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .streams-block-title {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
  .stream-card-content {
    padding: 8px 4px 8px 4px;
    gap: 4px;
  }
  .stream-card-title {
    font-size: 0.92rem;
  }
  .stream-card-lang {
    font-size: 0.9rem;
    padding: 4px 8px;
  }
}
</style> 