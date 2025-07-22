<template>

  <div class="home-main">
    <div class="main-banner">
      <div :class="['banner-bg', 'banner-bg-img']" :style="{ backgroundImage: `url('${bannerImages[currentBanner]}')` }">
        <button class="banner-arrow left" @click="prevBanner">
          <img src="/left-arrow.svg" alt="prev" width="48" height="48" />
        </button>
        <button class="banner-arrow right" @click="nextBanner">
          <img src="/right-arrow.svg" alt="next" width="48" height="48" />
        </button>
        <div class="banner-desc">
          ТВОЯ ВСЕЛЕННАЯ CS 2<br />-ЧИТАЙ,ОТКРЫВАЙ, ВДОХНОВЛЯЙСЯ!
        </div>
        <div class="banner-progress">
          <div :style="{ width: `${100 / bannerImages.length}%`, left: `${(100 / bannerImages.length) * currentBanner}%` }"></div>
        </div>
      </div>
    </div>
    <div class="main-side">
      <div class="side-card">
        <div class="side-card-title">Текущие турниры</div>
        <div class="side-card-tournament">
          <div class="tournament-info">
            <div class="tournament-name">RAVE Valorant<br />EMAE Qualification CIS</div>
            <button class="tournament-btn">Перейти</button>
          </div>
          <img class="tournament-img" src="/here.png" alt="Турнир" />
        </div>
      </div>
      <div class="side-card">
        <div class="side-card-title blue">
          В ПРЯМОМ ЭФИРЕ
          <button class="side-card-all new-all-btn">
            <span>Все</span>
            <svg class="all-arrow" width="22" height="22" viewBox="0 0 22 22"><path d="M8 5l6 6-6 6" stroke="#1976d2" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
        <div class="side-card-stream new-stream-block">
          <template v-if="!isStreamPlaying">
            <img class="stream-img new-stream-img" src="/tournament.png" alt="Стрим" />
            <div class="stream-play new-stream-play" @click="playStream">
              <svg width="64" height="64" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="32" fill="#E0E0E0"/>
                <polygon points="26,20 48,32 26,44" fill="#fff"/>
              </svg>
            </div>
            <div class="stream-title new-stream-title">СТРИМ: VALARANT С ПАПОЙ</div>
          </template>
          <template v-else>
            <div class="stream-video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/Kj0xEpp7f7c?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                class="stream-iframe"
              ></iframe>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
  <!-- Новые блоки: Ближайшие турниры и событие -->
  <div class="tournaments-events-row">
    <div class="tournaments-block custom-bg-tournaments">
      <div class="tournaments-header-row">
        <span class="tournaments-title">БЛИЖАЙШИЕ ТУРНИРЫ</span>
        <button class="tournaments-all-btn">
          Все
          <img src="/right.svg" alt="arrow" class="top-streams-all-arrow" />
        </button>
      </div>
      <div class="tournaments-content">
        <img class="team-logo" src="/arcred-logo.png" alt="ARCREAD" />
        <div class="tournaments-center">
          <img class="tournaments-cs-logo" src="/cs-ico.png" alt="CS" />
          <div class="tournaments-timer">{{ pad(hours) }}:{{ pad(minutes) }}:{{ pad(seconds) }}</div>
        </div>
        <img class="team-logo" src="/virtus-logo.png" alt="VIRTUS" />
      </div>
      <div class="tournaments-names-row">
        <span class="team-name">ARCRСED</span>
        <span class="team-name">VIRTUS</span>
      </div>
      <button class="tournaments-more-btn">ПОДРОБНЕЕ</button>
    </div>
    <div class="event-block custom-bg-event">
      <div class="event-header">БЛИЖАЙШЕЕ СОБЫТИЕ</div>
      <div class="event-title">ВРЕМЯ</div>
      <div class="event-timer-row">
        <span class="event-timer-dot"></span>
        <span class="event-timer">{{ pad(eventHours) }}:{{ pad(eventMinutes) }}:{{ pad(eventSeconds) }}</span>
      </div>
      <button class="event-go-btn">
        <svg width="32" height="32" viewBox="0 0 32 32"><path d="M8 16h16M16 8l8 8-8 8" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Перейти
        <svg width="32" height="32" viewBox="0 0 32 32"><path d="M8 16h16M16 8l8 8-8 8" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>
  </div>
  <teleport to="body">
    <div v-if="showStreamModal" class="stream-modal-overlay" @click.self="closeStreamModal">
      <div class="stream-modal-content">
        <button class="stream-modal-close" @click="closeStreamModal">×</button>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Kj0xEpp7f7c?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </teleport>
  <!-- Интересные матчи -->
  <div class="interesting-matches-block">
    <div class="interesting-matches-header-row">
      <span class="interesting-matches-title">Интересные матчи</span>
      <button class="interesting-matches-all-btn">Все <img src="/right.svg" alt="arrow" class="top-streams-all-arrow" /></button>
    </div>
    <div class="interesting-matches-list">
      <!-- NAVI vs FAZE -->
      <div class="interesting-match-card">
        <div class="match-main-row">
          <div class="match-team-col">
            <img class="match-team-logo" src="/navi-logo.png" alt="NAVI" />
            <div class="match-team-name">NAVI</div>
          </div>
          <div class="match-center-col">
            <img class="match-game-ico" src="/cs-ico.png" alt="CS" />
            <span class="match-date">12/04</span>
          </div>
          <div class="match-team-col">
            <img class="match-team-logo" src="/faze-logo.png" alt="FAZE" />
            <div class="match-team-name">FAZE</div>
          </div>
        </div>
        <button class="match-more-btn">Подробнее</button>
      </div>
      <!-- SPIRIT vs G2 (DOTA) -->
      <div class="interesting-match-card">
        <div class="match-main-row">
          <div class="match-team-col">
            <img class="match-team-logo" src="/spirit-logo.png" alt="SPIRIT" />
            <div class="match-team-name">SPIRIT</div>
          </div>
          <div class="match-center-col">
            <img class="match-game-ico" src="/dota-ico.png" alt="DOTA" />
            <span class="match-date">12/04</span>
          </div>
          <div class="match-team-col">
            <img class="match-team-logo" src="/g2-logo.png" alt="G2" />
            <div class="match-team-name">ESPORT</div>
          </div>
        </div>
        <button class="match-more-btn">Подробнее</button>
      </div>
      <!-- HEROIC vs FNATIC (VALORANT) -->
      <div class="interesting-match-card">
        <div class="match-main-row">
          <div class="match-team-col">
            <img class="match-team-logo" src="/heroic-logo.png" alt="HEROIC" />
            <div class="match-team-name">HEROIC</div>
          </div>
          <div class="match-center-col">
            <img class="match-game-ico" src="/valorant-ico.png" alt="VALORANT" />
            <span class="match-date">12/04</span>
          </div>
          <div class="match-team-col">
            <img class="match-team-logo" src="/fnatic-logo.png" alt="FNATIC" />
            <div class="match-team-name">FNATIC</div>
          </div>
        </div>
        <button class="match-more-btn">Подробнее</button>
      </div>
    </div>
  </div>
  <!-- // Интересные матчи -->
  <!-- Турниры -->
  <div class="tournaments-section">
    <div class="tournaments-header-row">
      <span class="tournaments-title">Турниры</span>
      <button class="tournaments-all-btn">Все <img src="/right.svg" alt="arrow" class="top-streams-all-arrow" /></button>
    </div>
    <div class="tournaments-cards-row">
      <!-- Большая карточка -->
      <div class="tournament-card big">
        <img class="tournament-card-img" src="/banner.png" alt="Турнир" />
        <div class="tournament-card-content tournament-card-content-row">
          <div class="tournament-card-texts">
            <div class="tournament-card-title">MOREM IPSUM DOLAR SIT AMET, CONSECTETUR AMATUING. VULPUTATE ET VELIT INTERDUM, AC ALIQUET ODIO MATTIS.</div>
            <div class="tournament-card-subtitle">BALI MAJOR</div>
            <div class="tournament-card-desc">LOREM DE DOLAR CONVES LE FUS</div>
          </div>
          <button class="tournament-card-btn">Подробнее</button>
        </div>
      </div>
      <!-- Вертикальная карточка -->
      <div class="tournament-card small">
        <img class="tournament-card-img" src="/banner-2.png" alt="Турнир" />
        <div class="tournament-card-content">
          <div class="tournament-card-subtitle blue">BALI MAJOR</div>
          <div class="tournament-card-desc">LOREM DE FACTUM</div>
          <button class="tournament-card-btn">Подробнее</button>
        </div>
      </div>
    </div>
  </div>

  <!-- // Турниры -->

    <!-- Заголовок и кнопка для новостей -->
    <div class="top-streams-header" style="margin-top: 48px;">
      <span class="top-streams-title">Новости</span>
      <button class="top-streams-all-btn">Все <img src="/right.svg" alt="arrow" class="top-streams-all-arrow" /></button>
    </div>
    <div style="width: 100%; margin-top: 32px;">
      <div class="custom-news-card">
        <img class="custom-news-card-bg" src="/news-main.jpg" alt="news" />
        <div class="custom-news-card-overlay">
          <div class="custom-news-card-views">
            <img src="/eye-icon.svg" alt="views" class="custom-news-card-icon" />
            <span>23к</span>
          </div>
          <div class="custom-news-card-top-row">
            <div class="custom-news-card-date">12.04.2025</div>
          </div>
          <div class="custom-news-card-content">
            <div class="custom-news-card-title">&lt;&lt; Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent. ectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis &gt;&gt;</div>
            <div class="custom-news-card-desc">Qorem ipsum dolor sit</div>
            <div class="custom-news-card-reactions">
              <div class="custom-news-card-reaction">
                <img src="/fire-icon.svg" alt="fire" class="custom-news-card-icon" />
                <span>213</span>
              </div>
              <div class="custom-news-card-reaction">
                <img src="/like-icon.svg" alt="like" class="custom-news-card-icon" />
                <span>213</span>
              </div>
              <div class="custom-news-card-reaction">
                <img src="/dislike-icon.svg" alt="dislike" class="custom-news-card-icon" />
                <span>213</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Топ трансляций -->
    <div class="top-streams-block">
      <div class="top-streams-header">
        <span class="top-streams-title">Топ трансляций</span>
        <button class="top-streams-all-btn">Все <img src="/right.svg" alt="arrow" class="top-streams-all-arrow" /></button>
      </div>
      <div class="top-streams-list">
        <div class="top-stream-card" v-for="i in 3" :key="i">
          <div class="top-stream-img-wrap">
            <img class="top-stream-img" src="/streem.png" alt="stream" />
          </div>
          <div class="top-stream-info-row">
            <img class="top-stream-avatar" src="/avatars.png" alt="avatar" />
            <div class="top-stream-info-main">
              <div class="top-stream-title">Gorem ipsum dolor sit amet, consectetur adip odio mattis.</div>
              <div class="top-stream-user-row">
                <span class="top-stream-nick">Deko</span>
                <span class="top-stream-divider">|</span>
                <span class="top-stream-game">CS 2</span>
              </div>
              <div class="top-stream-lang">Английский</div>
            </div>
            <div class="top-stream-more">
              <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="5" cy="12" r="2" fill="#BDBDBD"/><circle cx="12" cy="12" r="2" fill="#BDBDBD"/><circle cx="19" cy="12" r="2" fill="#BDBDBD"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const bannerImages = ['/banner-one.png', '/banner-one.png'] // Положи banner-two.png в public
const currentBanner = ref(0)
function nextBanner() {
  currentBanner.value = (currentBanner.value + 1) % bannerImages.length
}
function prevBanner() {
  currentBanner.value = (currentBanner.value - 1 + bannerImages.length) % bannerImages.length
}

// --- Живой таймер для турнира ---
const hours = ref(12)
const minutes = ref(44)
const seconds = ref(59)
const interval = ref(null)

function pad(num) {
  return num.toString().padStart(2, '0')
}

onMounted(() => {
  interval.value = setInterval(() => {
    if (seconds.value > 0) {
      seconds.value--
    } else {
      if (minutes.value > 0) {
        minutes.value--
        seconds.value = 59
      } else if (hours.value > 0) {
        hours.value--
        minutes.value = 59
        seconds.value = 59
      } else {
        // Таймер закончился
        clearInterval(interval.value)
      }
    }
  }, 1000)
})

onUnmounted(() => {
  clearInterval(interval.value)
})

// --- Живой таймер для event-block ---
const eventHours = ref(3)
const eventMinutes = ref(12)
const eventSeconds = ref(44)
const eventInterval = ref(null)

onMounted(() => {
  eventInterval.value = setInterval(() => {
    if (eventSeconds.value > 0) {
      eventSeconds.value--
    } else {
      if (eventMinutes.value > 0) {
        eventMinutes.value--
        eventSeconds.value = 59
      } else if (eventHours.value > 0) {
        eventHours.value--
        eventMinutes.value = 59
        eventSeconds.value = 59
      } else {
        clearInterval(eventInterval.value)
      }
    }
  }, 1000)
})

onUnmounted(() => {
  clearInterval(eventInterval.value)
})

// --- YouTube modal logic ---
const showStreamModal = ref(false)
function openStreamModal() {
  showStreamModal.value = true
}
function closeStreamModal() {
  showStreamModal.value = false
}

// --- YouTube inline logic ---
const isStreamPlaying = ref(false)
function playStream() {
  isStreamPlaying.value = true
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
:root, .home-main, .main-banner, .main-side, .side-card, .side-card-title, .side-card-all, .side-card-tournament, .tournament-info, .tournament-name, .tournament-btn, .tournament-img, .side-card-stream, .stream-img, .stream-play, .stream-title, .banner-desc, .banner-arrow, .banner-progress, .new-stream-block, .new-stream-img, .new-stream-play, .new-stream-title, .stream-video-wrapper, .stream-iframe {
  font-family: 'Manrope', sans-serif !important;
}
.navi-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
  border-radius: 40px;
  padding: 32px;
  margin-bottom: 32px;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.10);
  overflow: hidden;
  position: relative;
  z-index: 1;
}
.navi-banner__left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  flex: 1;
  padding-right: 32px;
}
.navi-banner__right {
  flex: 1;
  min-height: 340px;
  background: linear-gradient(90deg, #000 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.0) 60%), url('/banner-one.png') center right/cover no-repeat;
  border-radius: 0 40px 40px 0;
  overflow: hidden;
  position: relative;
}
.navi-banner__logo {
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 50%;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.15);
}
.navi-banner__title-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.navi-banner__title {
  font-size: 2.5rem;
  font-weight: 900;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
  letter-spacing: 0.02em;
}
.navi-banner__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: #2196F3;
  border-radius: 50%;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.2);
}
.navi-banner__icon svg {
  fill: #fff;
}
.navi-banner__desc {
  font-size: 1.1rem;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
  line-height: 1.4;
  margin-bottom: 20px;
  max-width: 80%;
}
.navi-banner__link {
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  border-bottom: 1px dashed #fff;
  padding-bottom: 4px;
  transition: opacity 0.2s;
}
.navi-banner__link:hover {
  opacity: 0.8;
}
.navi-banner__btn {
  background: #2196F3;
  color: #fff;
  border: none;
  border-radius: 40px;
  padding: 16px 48px;
  font-size: 1.25rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 4px 24px 0 rgba(33,150,243,0.2);
  transition: background 0.2s, box-shadow 0.2s;
  align-self: flex-start;
}
.navi-banner__btn:hover {
  background: #1976d2;
  box-shadow: 0 4px 24px 0 rgba(33,150,243,0.3);
}
.home-main {
  display: flex;
  gap: 32px;
  margin-top: 0;
  flex-wrap: wrap;

}
.main-banner {
  flex: 2 1 480px;
  min-width: 320px;
  max-width: 900px;
  display: flex;
}
.banner-bg {
  position: relative;
  width: 100%;
  min-height: 380px;
  background: linear-gradient(180deg, #fafdff 0%, #e3f2fd 100%);
  border-radius: 40px;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.banner-bg-img {
  background-size: cover !important;
  background-position: center center !important;
  background-repeat: no-repeat !important;
  background-color: #fff;
}
.banner-bg {
  background: #fff;
}
.banner-title {
  position: absolute;
  left: 32px;
  top: 32px;
  font-size: 3.2rem;
  font-weight: 900;
  color: #1976d2;
  line-height: 1;
  letter-spacing: 0.04em;
  z-index: 2;
}
.banner-graph {
  position: absolute;
  top: 32px;
  left: 180px;
  width: 60%;
  opacity: 0.3;
  z-index: 1;
}
.banner-img {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 55%;
  max-width: 420px;
  z-index: 2;
}
.banner-desc {
  position: absolute;
  left: 32px;
  bottom: 32px;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.12);
  z-index: 3;
}
.banner-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: #fff;
  color: #1976d2;
  font-size: 2rem;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  z-index: 4;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner-arrow.left { left: 24px; }
.banner-arrow.right { right: 24px; }
.banner-progress {
  position: absolute;
  left: 32px;
  bottom: 16px;
  width: 220px;
  height: 6px;
  background: #e3f2fd;
  border-radius: 3px;
  overflow: hidden;
  z-index: 5;
}
.banner-progress > div {
  position: absolute;
  top: 0;
  height: 100%;
  background: #2196f3;
  border-radius: 3px;
  transition: left 0.3s;
}
.main-side {
  flex: 1 1 320px;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.side-card {
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.06);
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.side-card-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 8px;
}
.side-card-title.blue {
  color: #1976d2;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.side-card-all {
  background: #e3f2fd;
  color: #1976d2;
  border: none;
  border-radius: 16px;
  padding: 4px 16px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}
.side-card-tournament {
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  min-height: 80px;
}
.tournament-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 2;
}
.tournament-name {
  font-size: 1.1rem;
  color: #1976d2;
  font-weight: 600;
  margin-bottom: 0;
}
.tournament-btn {
  background: #90caf9;
  color: #fff;
  border: none;
  border-radius: 40px;
  padding: 12px 32px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  width: auto;
  margin-top: 16px;
  align-self: flex-start;
  position: static;
  z-index: unset;
}
.tournament-btn:hover {
  background: #1976d2;
}
.tournament-img {
  position: absolute;
  right: 32px !important;
  bottom: 0;
  height: 200px;
  width: auto;
  max-width: 70%;
  object-fit: contain;
  border-radius: 16px;
  z-index: 1;
  pointer-events: none;
  user-select: none;
  transform: translateX(25%) !important;
}
.side-card-stream {
  position: relative;
  width: 100%;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}
.stream-img {
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  min-height: 80px;
  max-height: 120px;
}
.stream-play {
  position: absolute;
  left: 50%;
  top: 32px;
  transform: translateX(-50%);
  z-index: 2;
}
.stream-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #222;
  margin-top: 8px;
}
.banner-title, .banner-graph, .banner-img { display: none; }
.side-card-all.new-all-btn {
  background: #90caf9;
  color: #fff;
  border-radius: 20px;
  padding: 6px 18px 6px 14px;
  font-size: 1.08rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 4px;
  box-shadow: 0 2px 8px rgba(33,150,243,0.08);
  transition: background 0.2s;
  height: 38px;
}
.side-card-all.new-all-btn:hover {
  background: #1976d2;
  color: #fff;
}
.side-card-all .all-arrow {
  display: inline-block;
  margin-left: 2px;
}
.new-stream-block {
  position: relative;
  width: 100%;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin-top: 8px;
}
.new-stream-img {
  width: 100%;
  height: 180px !important;
  min-height: 180px !important;
  max-height: none !important;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.10);
}
.new-stream-play {
  position: absolute;
  left: 50%;
  top: 44%;
  transform: translate(-50%, -50%);
  z-index: 2;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.10));
}
.new-stream-play svg {
  width: 44px;
  height: 44px;
}
.new-stream-title {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 12px 18px 10px 18px;
  font-size: 1.08rem;
  font-weight: 900;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.32);
  z-index: 3;
  box-sizing: border-box;
  letter-spacing: 0.01em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}
.stream-modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.65);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stream-modal-content {
  position: relative;
  background: #000;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 96vw;
  max-height: 80vh;
}
.stream-modal-content iframe {
  border-radius: 12px;
  width: 70vw;
  height: 40vw;
  max-width: 720px;
  max-height: 405px;
  min-width: 320px;
  min-height: 180px;
  background: #000;
}
.stream-modal-close {
  position: absolute;
  top: 8px;
  right: 16px;
  font-size: 2.2rem;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
  line-height: 1;
}
.stream-video-wrapper {
  width: 100%;
  height: 180px;
  border-radius: 20px;
  overflow: hidden;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stream-iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 20px;
  background: #000;
}
.tournaments-events-row {
  display: flex;
  gap: 32px;
  margin-top: 40px;
}
.tournaments-block {
  flex: 2 1 600px;
  background: #fafdff;
  border-radius: 40px;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.06);
  padding: 32px 32px 40px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 0;
  font-family: 'Manrope', sans-serif;
  overflow: hidden;
}
.custom-bg-tournaments {
  background: url('/valorant-character.png') center/cover no-repeat, linear-gradient(180deg, #fff 60%, #e3f2fd 100%);
}
.tournaments-header-row {
  width: 100%;
  position: relative;
  margin-bottom: 18px;
}
.tournaments-title {
  font-size: 1.7rem;
  font-weight: 800;
  color: #2563eb;
  letter-spacing: 0.01em;
  width: 100%;
}
.tournaments-all-btn {
  position: absolute;
  top: 0;
  right: 0;
  background: #90caf9;
  color: #fff;
  border-radius: 20px;
  padding: 8px 24px 8px 18px;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(33,150,243,0.08);
  transition: background 0.2s;
}
.tournaments-all-btn:hover {
  background: #1976d2;
}
.tournaments-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
}
.team-logo {
  width: 140px;
  height: 140px;
  object-fit: contain;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
}
.tournaments-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-width: 120px;
}
.tournaments-cs-logo {
  width: 60px;
  height: 36px;
  object-fit: contain;
  margin-bottom: 8px;
}
.tournaments-timer {
  font-size: 2.8rem;
  font-weight: 800;
  color: #2563eb;
  letter-spacing: 0.04em;
}
.tournaments-names-row {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.team-name {
  font-size: 1.3rem;
  font-weight: 800;
  color: #222;
  letter-spacing: 0.01em;
}
.tournaments-more-btn {
  background: #fff;
  color: #2563eb;
  border-radius: 40px;
  padding: 16px 48px;
  font-size: 1.25rem;
  font-weight: 800;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(33,150,243,0.08);
  transition: background 0.2s, color 0.2s;
}
.tournaments-more-btn:hover {
  background: #2563eb;
  color: #fff;
}
.event-block {
  flex: 1 1 320px;
  background: #2196f3;
  border-radius: 32px;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.10);
  padding: 28px 24px 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  min-width: 0;
  font-family: 'Manrope', sans-serif;
  overflow: hidden;
}
.custom-bg-event {
  background: url('/dota-character-new-bg.png') center/cover no-repeat, linear-gradient(135deg, #2196f3 60%, #42a5f5 100%);
}
.event-header {
  font-size: 1.3rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 10px;
}
.event-title {
  font-size: 2.5rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 8px;
}
.event-timer-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
}
.event-timer-dot {
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
  display: inline-block;
}
.event-timer {
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
}
.event-character {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 180px;
  height: auto;
  object-fit: contain;
  z-index: 1;
  pointer-events: none;
  user-select: none;
}
.event-go-btn {
  margin-top: auto;
  background: #90caf9;
  color: #fff;
  border-radius: 40px;
  padding: 16px 48px;
  font-size: 1.3rem;
  font-weight: 800;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(33,150,243,0.08);
  transition: background 0.2s, color 0.2s;
  display: flex;
  align-items: center;
  gap: 16px;
  z-index: 2;
}
.event-go-btn:hover {
  background: #2563eb;
  color: #fff;
}
.interesting-matches-block {
  width: 100%;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: 'Manrope', sans-serif;
  margin-top: 32px;
}
.interesting-matches-header-row {
  width: 100%;
  position: relative;
  margin-bottom: 18px;
}
.interesting-matches-title {
  font-size: 1.7rem;
  font-weight: 800;
  color: #2563eb;
  letter-spacing: 0.01em;
  text-align: center;
  width: 100%;
}
.interesting-matches-all-btn {
  position: absolute;
  top: 0;
  right: 0;
  background: #90caf9;
  color: #fff;
  border-radius: 20px;
  padding: 8px 24px 8px 18px;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(33,150,243,0.08);
  transition: background 0.2s;
}
.interesting-matches-all-btn:hover {
  background: #1976d2;
}
.interesting-matches-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  width: 100%;
}
.interesting-match-card {
  width: 100%;
  min-width: 0;
  max-width: none;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.06);
  padding: 32px 10px 32px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  min-height: 160px;
}
.match-game-ico-row {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 4px;
}
.match-game-ico {
  width: 28px;
  height: 28px;
  object-fit: contain;
}
.match-main-row {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  gap: 18px;
}
.match-team-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 1 1 0;
}
.match-team-logo {
  width: 56px;
  height: 56px;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.match-team-name {
  font-size: 1rem;
  font-weight: 800;
  color: #111;
  letter-spacing: 0.01em;
  text-align: center;
}
.match-center-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  gap: 4px;
}
.match-game-ico {
  width: 28px;
  height: 28px;
  object-fit: contain;
}
.match-date {
  font-size: 1.1rem;
  font-weight: 700;
  color: #2563eb;
  text-align: center;
}
.match-more-btn {
  background: #90caf9;
  color: #fff;
  border: none;
  border-radius: 40px;
  padding: 7px 18px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(33,150,243,0.08);
  transition: background 0.2s, color 0.2s;
  margin: 0 auto;
  display: block;
}
.match-more-btn:hover {
  background: #2563eb;
  color: #fff;
}
.tournaments-section {
  width: 100%;
  margin-top: 48px;
  margin-bottom: 0;
}
.tournaments-header-row {
  width: 100%;
  position: relative;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tournaments-title {
  font-size: 1.7rem;
  font-weight: 800;
  color: #2563eb;
  letter-spacing: 0.01em;
}
.tournaments-all-btn {
  background: #90caf9;
  color: #fff;
  border-radius: 20px;
  padding: 8px 24px 8px 18px;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(33,150,243,0.08);
  transition: background 0.2s;
}
.tournaments-all-btn:hover {
  background: #1976d2;
}
.tournaments-cards-row {
  display: flex;
  gap: 32px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  align-items: stretch;
}
.tournament-card {
  position: relative;
  overflow: hidden;
  border-radius: 32px;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.10);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.tournament-card-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 32px;
  z-index: 1;
}
.tournament-card-content {
  position: relative;
  z-index: 2;
  background: none;
  padding: 32px 32px 28px 32px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
  gap: 16px;
  border-radius: 0 0 32px 32px;
  height: 100%;
}
.tournament-card.big {
  flex: 2 1 0;
  min-width: 0;
  min-height: 340px;
  border-radius: 32px;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.tournament-card.small {
  flex: 1 1 0;
  min-width: 0;
  min-height: 340px;
  border-radius: 32px;
  padding: 0;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg,rgba(0,0,0,0.0) 0%,rgba(0,0,0,0.55) 100%);
}
.tournament-card-title {
  font-size: 1.3rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 8px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.22);
}
.tournament-card-subtitle {
  font-size: 1.1rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 2px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.22);
}
.tournament-card-subtitle.blue {
  color: #2563eb;
  text-shadow: none;
}
.tournament-card-desc {
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 12px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.22);
}
.tournament-card-btn {
  background: #ffffff;
  color: #295DFF;
  border: none;
  border-radius: 30px;
  padding: 10px 38px;
  font-size: 1.1rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(33,150,243,0.08);
  transition: background 0.2s, color 0.2s;
  align-self: flex-start;
}
.tournament-card-btn:hover {
  background: #2563eb;
  color: #fff;
}
.tournament-card.small .tournament-card-content {
  align-items: flex-start;
  text-align: left;
}
.tournament-card.small .tournament-card-btn {
  background: #90caf9;
  color: #fff;
  align-self: center;
  width: 100%;
}
.tournament-card-content-row {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 32px;
  height: 100%;
}
.tournament-card-texts {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 100%;
  flex: 1 1 0;
}
.tournament-card.big .tournament-card-btn {
  align-self: flex-end;
  margin-left: 0;
  margin-bottom: 0;
}
.tournament-card.small .tournament-card-subtitle.blue {
  color: #2563eb;
  font-size: 2.2rem;
  font-weight: 900;
  text-shadow: none;
  margin-bottom: -25px;
}
.tournament-card.small .tournament-card-desc {
  color: #111;
  font-size: 1.35rem;
  font-weight: 800;
  text-shadow: none;
  margin-bottom: 18px;
}
.custom-news-card {
  position: relative;
  border-radius: 32px;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  min-height: 420px;
  background: #000;
  box-shadow: 0 4px 32px 0 rgba(0,0,0,0.10);
  margin: 0 auto 32px auto;
  display: flex;
  align-items: stretch;
}
.custom-news-card-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
 
  position: absolute;
  left: 0; top: 0;
  z-index: 1;
}
.custom-news-card-overlay {
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  z-index: 2;
  background: linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.0) 50%);
  color: #fff;
}
.custom-news-card-views {
  position: absolute;
  top: 24px;
  left: 32px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1em;
  background: rgba(0,0,0,0.32);
  border-radius: 12px;
  padding: 4px 12px;
  z-index: 3;
}
.custom-news-card-top-row {
  position: absolute;
  top: 24px;
  right: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  font-size: 1.1em;
  font-weight: 600;
  z-index: 3;
}
.custom-news-card-date {
  font-size: 1em;
  opacity: 0.85;
  background: rgba(0,0,0,0.32);
  border-radius: 12px;
  padding: 4px 12px;
}
.custom-news-card-content {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0 40px 32px 40px;
  width: 100%;
  box-sizing: border-box;
  z-index: 2;
}
.custom-news-card-title {
  font-size: 1.35em;
  font-weight: 800;
  margin-bottom: 10px;
  line-height: 1.18;
  text-shadow: 0 2px 8px rgba(0,0,0,0.25);
  max-width: 80%;
}
.custom-news-card-desc {
  font-size: 1.1em;
  opacity: 0.92;
  margin-bottom: 12px;
  font-weight: 500;
  max-width: 60%;
}
.custom-news-card-reactions {
  display: flex;
  gap: 12px;
  margin-bottom: 0;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
}
.custom-news-card-reaction {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255,255,255,0.32);
  backdrop-filter: blur(8px);
  border-radius: 22px;
  padding: 6px 22px;
  font-size: 1.1em;
  font-weight: 500;
  color: #fff;
}
.custom-news-card-reaction span {
  font-weight: 500;
  color: #fff;
}
.custom-news-card-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}
.top-streams-block {
  width: 100%;
  margin: 48px 0 0 0;
  padding: 0;
}
.top-streams-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.top-streams-title {
  font-size: 1.7rem;
  font-weight: 900;
  color: #2563eb;
  letter-spacing: 0.01em;
  margin: 0;
  line-height: 1.1;
}
.top-streams-all-btn {
  background: #90caf9;
  color: #fff;
  border-radius: 20px;
  padding: 8px 28px;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(33,150,243,0.04);
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
  height: 40px;
  min-width: 70px;
}
.top-streams-all-btn:hover {
  background: #1976d2;
}
.top-streams-all-arrow {
  width: 14px;
  height: 14px;
  margin-left: 6px;
  display: inline-block;
  vertical-align: middle;
}
.top-streams-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
}
.top-stream-card {
  background: #f4f4f4;
  border-radius: 18px;
  box-shadow: none;
  padding: 0 0 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  overflow: hidden;
}
.top-stream-img-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16/8;
  border-radius: 18px;
  overflow: hidden;
}
.top-stream-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
  display: block;
}
.top-stream-live {
  position: absolute;
  top: 16px;
  left: 16px;
  background: #ff2d2d;
  color: #fff;
  font-size: 1.08rem;
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
.top-stream-viewers {
  position: absolute;
  left: 16px;
  bottom: 16px;
  background: rgba(30,30,30,0.75);
  color: #bb6565;
  font-size: 1.15rem;
  font-weight: 700;
  border-radius: 16px;
  padding: 7px 18px;
  z-index: 2;
}
.top-stream-info-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  margin-top: 10px;
  padding: 0 10px;
  position: relative;
}
.top-stream-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 2px;
}
.top-stream-info-main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 1 0;
  min-width: 0;
}
.top-stream-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 2px;
  line-height: 1.18;
  max-width: 100%;
  word-break: break-word;
}
.top-stream-user-row {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1.1rem;
  font-weight: 700;
  color: #90caf9;
}
.top-stream-nick {
  color: #90caf9;
  font-weight: 700;
}
.top-stream-verified {
  color: #2196f3;
  font-size: 1.1em;
  margin-left: 2px;
}
.top-stream-game {
  font-size: 1.05rem;
  color: #bdbdbd;
  font-weight: 600;
}
.top-stream-lang {
  background: #a2a2a262;
  color: #666666;
  font-size: 1.05rem;
  font-weight: 700;
  border-radius: 16px;
  padding: 7px 22px;
  margin-top: 6px;
  margin-bottom: 2px;
  display: inline-block;
}
.top-stream-more {
  margin-left: auto;
  margin-top: 6px;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
}
.top-stream-divider {
  color: #bdbdbd;
  margin: 0 8px;
  font-weight: 600;
  font-size: 1.1em;
}
@media (max-width: 1100px) {
  .home-main {
    flex-direction: column;
    gap: 24px;
  }
  .main-banner, .main-side {
    max-width: 100%;
    min-width: 0;
  }
  .tournaments-events-row {
    flex-direction: column;
    gap: 24px;
  }
  .tournaments-block, .event-block {
    max-width: 100%;
    min-width: 0;
  }
  .event-character {
    width: 120px;
  }
  .interesting-matches-list {
    gap: 16px;
  }
  .interesting-match-card {
    min-width: 180px;
    max-width: 220px;
    padding: 8px 4px 10px 4px;
    gap: 8px;
    min-height: 100px;
  }
  .match-team-logo {
    width: 32px;
    height: 32px;
    border-radius: 6px;
  }
  .match-team-name {
    font-size: 0.8rem;
  }
  .match-game-ico {
    width: 18px;
    height: 18px;
  }
  .match-date {
    font-size: 0.8rem;
  }
  .tournaments-cards-row {
    flex-direction: column;
    gap: 18px;
    max-width: 100%;
  }
  .tournament-card.big, .tournament-card.small {
    min-height: 180px;
    border-radius: 18px;
  }
  .tournament-card-img {
    border-radius: 18px;
  }
  .tournament-card-content {
    border-radius: 0 0 18px 18px;
  }
  .top-streams-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  .top-streams-title {
    font-size: 2rem;
  }
  .navi-banner {
    flex-direction: column;
    padding: 18px 8px;
    border-radius: 24px;
  }
  .navi-banner__left {
    padding-right: 0;
    align-items: flex-start;
    gap: 10px;
  }
  .navi-banner__right {
    min-height: 180px;
    width: 100%;
    border-radius: 0 0 24px 24px;
    margin-top: 12px;
  }
}
@media (max-width: 700px) {
  .home-main {
    flex-direction: column;
    gap: 8px;
    margin-top: 4px;
  }
  .main-banner, .main-side {
    max-width: 100%;
    min-width: 0;
    padding: 0;
  }
  .banner-bg {
    border-radius: 14px;
    min-height: 100px;
    padding: 0;
    box-shadow: 0 2px 8px rgba(33,150,243,0.08);
  }
  .main-side {
    gap: 6px;
  }
  .side-card {
    border-radius: 10px;
    padding: 8px 6px 10px 8px;
    gap: 6px;
    box-shadow: 0 2px 8px rgba(33,150,243,0.08);
    margin-bottom: 2px;
  }
  .side-card-title, .side-card-title.blue {
    font-size: 1rem;
    font-weight: 800;
    margin-bottom: 2px;
    padding-left: 2px;
  }
  .side-card-tournament {
    min-height: unset;
    align-items: flex-end;
    gap: 4px;
    position: relative;
  }
  .tournament-info {
    gap: 2px;
    align-items: flex-start;
  }
  .tournament-name {
    font-size: 0.92rem;
    font-weight: 700;
    color: #1976d2;
    margin-bottom: 0;
    line-height: 1.1;
    padding-bottom: 0;
  }
  .tournament-btn {
    font-size: 0.95rem;
    padding: 6px 16px;
    margin-top: 2px;
    border-radius: 14px;
    background: linear-gradient(90deg, #90caf9 0%, #42a5f5 100%);
    font-weight: 700;
    box-shadow: 0 2px 8px rgba(33,150,243,0.10);
    transition: background 0.2s;
    width: auto;
    min-width: 0;
    display: inline-block;
  }
  .tournament-btn:hover {
    background: linear-gradient(90deg, #1976d2 0%, #42a5f5 100%);
  }
  .tournament-img {
    height: 44px !important;
    max-width: 44px !important;
    right: 0 !important;
    bottom: 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(33,150,243,0.10);
    transform: none !important;
  }
  .side-card-stream.new-stream-block {
    min-height: 54px;
    margin-top: 2px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(33,150,243,0.08);
  }
  .new-stream-img {
    height: 54px !important;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(33,150,243,0.10);
  }
  .new-stream-title {
    font-size: 0.85rem;
    padding: 4px 6px 4px 6px;
    left: 0;
    bottom: 0;
    width: 100%;
    background: linear-gradient(180deg,rgba(0,0,0,0.0) 0%,rgba(0,0,0,0.22) 100%);
    border-radius: 0 0 10px 10px;
    text-align: left;
  }
  .new-stream-play {
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .new-stream-play svg {
    width: 20px;
    height: 20px;
    filter: drop-shadow(0 2px 8px rgba(33,150,243,0.10));
  }
  .side-card-all.new-all-btn, .tournaments-all-btn {
    font-size: 0.9rem;
    padding: 2px 10px 2px 8px;
    border-radius: 10px;
    height: 24px;
    min-width: 44px;
    box-shadow: none;
    position: absolute;
    right: 0;
    top: 0;
  }
  .tournaments-events-row {
    flex-direction: column;
    gap: 8px;
    margin-top: 8px;
  }
  .tournaments-block, .event-block {
    border-radius: 12px;
    padding: 10px 6px 12px 6px;
    min-width: 0;
    max-width: 100%;
    box-shadow: 0 2px 8px rgba(33,150,243,0.08);
    margin-bottom: 2px;
    height: auto;
  }
  .tournaments-header-row {
    margin-bottom: 6px;
    position: relative;
  }
  .tournaments-title {
    font-size: 1rem;
    font-weight: 800;
    text-align: center;
    width: 100%;
    margin-bottom: 0;
  }
  .tournaments-content {
    margin-bottom: 2px;
    align-items: flex-end;
    gap: 4px;
  }
  .team-logo {
    width: 28px;
    height: 28px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(33,150,243,0.10);
  }
  .tournaments-center {
    gap: 2px;
    min-width: 40px;
  }
  .tournaments-cs-logo {
    width: 14px;
    height: 8px;
    margin-bottom: 1px;
  }
  .tournaments-timer {
    font-size: 0.95rem;
    font-weight: 800;
    color: #2563eb;
    letter-spacing: 0.04em;
    text-align: center;
  }
  .tournaments-names-row {
    margin-bottom: 4px;
    font-size: 0.8rem;
    font-weight: 700;
    justify-content: space-between;
    padding: 0 2px;
  }
  .team-name {
    font-size: 0.8rem;
    font-weight: 700;
    color: #222;
    letter-spacing: 0.01em;
  }
  .tournaments-more-btn {
    font-size: 0.95rem;
    padding: 7px 18px;
    border-radius: 14px;
    width: auto;
    min-width: 0;
    background: linear-gradient(90deg, #90caf9 0%, #42a5f5 100%);
    color: #fff;
    font-weight: 800;
    box-shadow: 0 2px 8px rgba(33,150,243,0.10);
    margin-top: 6px;
    transition: background 0.2s;
    display: inline-block;
  }
  .tournaments-more-btn:hover {
    background: linear-gradient(90deg, #1976d2 0%, #42a5f5 100%);
  }
  .event-block {
    border-radius: 12px;
    padding: 10px 6px 12px 6px;
    min-width: 0;
    max-width: 100%;
    box-shadow: 0 2px 8px rgba(33,150,243,0.08);
    margin-bottom: 2px;
    align-items: center;
    height: auto;
    background-size: cover !important;
    background-position: center bottom !important;
  }
  .event-header {
    font-size: 0.95rem;
    font-weight: 800;
    color: #fff;
    margin-bottom: 2px;
    text-align: center;
    width: 100%;
  }
  .event-title {
    font-size: 1.08rem;
    font-weight: 900;
    color: #fff;
    margin-bottom: 2px;
    text-align: center;
    width: 100%;
  }
  .event-timer-row {
    justify-content: center;
    margin-bottom: 6px;
  }
  .event-timer {
    font-size: 0.95rem;
    font-weight: 700;
    color: #fff;
  }
  .event-go-btn {
    font-size: 0.95rem;
    padding: 7px 18px;
    border-radius: 14px;
    width: auto;
    min-width: 0;
    background: linear-gradient(90deg, #90caf9 0%, #42a5f5 100%);
    color: #fff;
    font-weight: 800;
    box-shadow: 0 2px 8px rgba(33,150,243,0.10);
    margin-top: 6px;
    transition: background 0.2s;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .event-go-btn:hover {
    background: linear-gradient(90deg, #1976d2 0%, #42a5f5 100%);
  }
  .interesting-matches-block {
    border-radius: 12px;
    padding: 10px 6px 12px 6px;
    min-width: 0;
    max-width: 100%;
    margin-bottom: 2px;
    align-items: center;
    height: auto;
    background-size: cover !important;
    background-position: center bottom !important;
  }
  .interesting-matches-header-row {
    margin-bottom: 6px;
    position: relative;
  }
  .interesting-matches-title {
    font-size: 1rem;
    font-weight: 800;
    text-align: center;
    width: 100%;
    margin-bottom: 0;
  }
  .interesting-matches-all-btn {
    font-size: 0.9rem;
    padding: 2px 10px 2px 8px;
    border-radius: 10px;
    height: 24px;
    min-width: 44px;
    box-shadow: none;
    position: absolute;
    right: 0;
    top: 0;
  }
  .interesting-matches-list {
    flex-direction: column;
    gap: 8px;
    overflow-x: unset;
    padding-bottom: 0;
  }
  .interesting-match-card {
    min-width: unset;
    max-width: 100%;
    width: 100%;
    padding: 4px 2px 6px 2px;
    border-radius: 8px;
    gap: 4px;
    min-height: 60px;
  }
  .match-team-logo {
    width: 22px;
    height: 22px;
    border-radius: 4px;
  }
  .match-team-name {
    font-size: 0.7rem;
  }
  .match-main-row {
    gap: 4px;
  }
  .match-game-ico {
    width: 12px;
    height: 12px;
  }
  .match-date {
    font-size: 0.7rem;
  }
  .tournaments-section {
    margin-top: 18px;
  }
  .tournaments-header-row {
    margin-bottom: 8px;
  }
  .tournaments-title {
    font-size: 1.1rem;
  }
  .tournaments-cards-row {
    flex-direction: column;
    gap: 8px;
  }
  .tournament-card.big, .tournament-card.small {
    min-height: 90px;
    border-radius: 8px;
  }
  .tournament-card-content {
    padding: 8px 6px 8px 6px;
    border-radius: 0 0 8px 8px;
    gap: 6px;
  }
  .tournament-card-title {
    font-size: 0.9rem;
  }
  .tournament-card-subtitle, .tournament-card-desc {
    font-size: 0.8rem;
  }
  .tournament-card-btn {
    padding: 7px 18px;
    font-size: 0.95rem;
    border-radius: 14px;
  }
  .custom-news-card {
    border-radius: 18px;
    min-height: 260px;
  }
  .custom-news-card-content {
    padding: 0 6px 12px 6px;
  }
  .custom-news-card-title {
    font-size: 0.9em;
    margin-bottom: 6px;
  }
  .custom-news-card-desc {
    font-size: 0.8em;
    margin-bottom: 6px;
  }
  .custom-news-card-reactions {
    gap: 6px;
  }
  .custom-news-card-icon {
    width: 18px;
    height: 18px;
  }
  .top-stream-card {
    border-radius: 14px;
  }
  .top-stream-img-wrap, .top-stream-img {
    border-radius: 14px;
  }
  .top-streams-title {
    font-size: 1.2rem;
  }
  .top-streams-all-btn {
    font-size: 0.95rem;
    padding: 6px 16px;
    border-radius: 12px;
    height: 32px;
    min-width: 44px;
  }
  .top-streams-all-arrow {
    font-size: 1em;
  }
  .navi-banner__title {
    font-size: 1.3rem;
  }
  .navi-banner__logo {
    width: 64px;
    height: 64px;
  }
  .navi-banner__right {
    min-height: 100px;
    border-radius: 0 0 14px 14px;
  }
  .navi-banner {
    border-radius: 14px;
    padding: 8px 2px;
  }
}
@media (max-width: 900px) {
  .custom-news-card-views {
    top: 10px;
    left: 10px;
    font-size: 0.95em;
    padding: 3px 8px;
  }
  .custom-news-card-reaction {
    padding: 4px 12px;
    border-radius: 16px;
    font-size: 0.95em;
  }
}
@media (max-width: 600px) {
  .custom-news-card-views {
    top: 4px;
    left: 4px;
    font-size: 0.85em;
    padding: 2px 6px;
  }
  .custom-news-card-reaction {
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 0.85em;
  }
}
</style> 