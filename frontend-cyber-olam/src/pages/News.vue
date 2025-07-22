<template>
  <div class="news-page">
    <div class="news-filters-wrap">
      <div class="news-filters-bg">
        <button
          v-for="filter in filters"
          :key="filter.value"
          :class="['news-filter', { active: currentFilter === filter.value }]"
          @click="currentFilter = filter.value"
        >
          {{ filter.label }}
        </button>
      </div>
    </div>
    <div class="news-cards-grid">
      <!-- Большая карточка -->
      <div class="news-card large">
        <img src="/news-main.jpg" alt="news" class="news-card-img" />
        <div class="news-card-gradient"></div>
        <div class="news-card-date">12.04.2025</div>
        <div class="news-card-content">
          <div class="news-card-title">&lt;&lt; Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent &gt;&gt;</div>
          <div class="news-card-desc">Qorem ipsum dolor sit</div>
          <div class="news-card-stats">
            <span class="news-card-like">+108</span>
            <span class="news-card-fire"><img src="/fire-icon.svg" alt="fire" class="icon-fire" /></span>
          </div>
        </div>
      </div>
      <!-- Маленькая карточка сверху -->
      <div class="news-card small small-top">
        <img src="/banner-for-card.png" alt="news" class="news-card-img" />
        <div class="news-card-gradient"></div>
        <div class="news-card-date">12.04.2025</div>
        <div class="news-card-content">
          <div class="news-card-title">&lt;&lt; Et velit interdum, ac aliquet odio mattis. Class aptent &gt;&gt;</div>
          <div class="news-card-stats">
            <span class="news-card-like">+108</span>
            <span class="news-card-fire"><img src="/fire-icon.svg" alt="fire" class="icon-fire" /></span>
          </div>
        </div>
      </div>
      <!-- Маленькая карточка снизу -->
      <div class="news-card small small-bottom">
        <img src="/image3.png" alt="news" class="news-card-img" />
        <div class="news-card-gradient"></div>
        <div class="news-card-date">12.04.2025</div>
        <div class="news-card-content">
          <div class="news-card-title">&lt;&lt; Et velit interdum, ac aliquet odio mattis. Class aptent &gt;&gt;</div>
          <div class="news-card-stats">
            <span class="news-card-like">+108</span>
            <span class="news-card-fire"><img src="/fire-icon.svg" alt="fire" class="icon-fire" /></span>
          </div>
        </div>
      </div>
    </div>
    <div class="news-list">
      <div class="news-list-item">
        <div class="news-list-header">
          <div class="news-list-title">
            <span class="news-list-title-main">Новый аркадный футсим в топе по онлайну.</span><br/>
            <span class="news-list-title-sub">Там матчи 5 на 5 и вратари-гонялы</span>
          </div>
          <div class="news-list-time">15 минут назад</div>
        </div>
        <div class="news-list-image-wrap">
          <img src="/fortnite.jpg" alt="fortnite" class="news-list-img" />
          <div class="news-list-img-overlay"></div>
          <div class="news-list-img-content">
            <div class="news-list-img-text">Corem ipsum dolor sit amet, consectetur velit interdum adipiscing elit. Nunc vulpte libero et velit inedum, consectetur adipiscing ac consectetur velit interdum</div>
            <button class="news-list-btn">Узнать больше</button>
          </div>
        </div>
      </div>
      <div class="news-list-item">
        <div class="news-list-header">
          <div class="news-list-title">
            <span class="news-list-title-main">Новый аркадный футсим в топе по онлайну.</span><br/>
            <span class="news-list-title-sub">Там матчи 5 на 5 и вратари-гонялы</span>
          </div>
          <div class="news-list-time">15 минут назад</div>
        </div>
        <div class="news-list-image-wrap">
          <img src="/news-main.jpg" alt="esl" class="news-list-img" />
          <div class="news-list-img-overlay"></div>
          <div class="news-list-img-content">
            <div class="news-list-img-text">Corem ipsum dolor sit amet, consectetur velit interdum adipiscing elit. Nunc vulpte libero et velit inedum, consectetur adipiscing ac consectetur velit interdum</div>
            <button class="news-list-btn">Узнать больше</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Здесь будет контент новостей -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
const filters = [
  { label: 'ВСЕ', value: 'all' },
  { label: 'CS 2', value: 'cs2' },
  { label: 'DOTA 2', value: 'dota2' },
  { label: 'VALARANT', value: 'valarant' },
  { label: 'MOBILE LEGENDS', value: 'mobilelegends' },
]
const currentFilter = ref('all')
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
:root, body {
  font-family: 'Manrope', sans-serif !important;
}
.news-page {
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.news-filters-wrap {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 32px;
}
.news-filters-bg {
  background: #fff;
  border-radius: 32px;
  display: flex;
  align-items: center;
  padding: 2px 0 2px 0;
  box-shadow: none;
  width: auto;
  gap: 24px;
}
.news-filter {
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
.news-filter.active {
  background: #2563eb;
  color: #fff;
  font-weight: 700;
}
@media (max-width: 900px) {
  .news-filters-bg {
    border-radius: 18px;
    padding: 2px 0 2px 0;
    gap: 8px;
    width: auto;
  }
  .news-filter {
    font-size: 0.95rem;
    padding: 6px 12px;
    border-radius: 14px;
  }
}
.news-title {
  font-size: 2.5rem;
  font-weight: 900;
  color: #2563eb;
  margin-bottom: 32px;
}
.news-cards-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 24px;
  margin-bottom: 40px;
}
.news-card {
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.news-card.large {
  grid-row: 1 / span 2;
  grid-column: 1 / 2;
  min-height: 100%;
}
.news-card.small.small-top {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
}
.news-card.small.small-bottom {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
}
.news-card.small {
  min-height: 0;
  height: 100%;
  aspect-ratio: 2.1/1;
  display: flex;
}
.news-card.large {
  min-height: 360px;
}
.news-card-img {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  object-fit: cover;
  z-index: 1;
  border-radius: inherit;
}
.news-card-gradient {
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  height: 100%;
  background: linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 65%, rgba(0,0,0,0.01) 100%);
  z-index: 2;
}
.news-card-content {
  position: relative;
  z-index: 3;
  color: #fff;
  padding: 32px 28px 22px 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.news-card.small .news-card-content {
  padding-top: 32px;
}
.news-card-date {
  font-size: 1.25rem;
  font-weight: 700;
  color: #e0e0e0;
  position: absolute;
  top: 18px;
  right: 24px;
  margin-bottom: 0;
  z-index: 4;
  text-align: right;
  pointer-events: none;
}
.news-card-title {
  font-size: 20px;
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 6px;
  word-break: break-word;
}
/* Для маленьких карточек — ограничение строк и меньший размер */
.news-card.small .news-card-title {
  font-size: 1.15rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.18;
  margin-bottom: 4px;
  margin-top: 8px;
}
.news-card-desc {
  font-size: 1.15rem;
  color: #bdbdbd;
  margin-bottom: 10px;
}
.news-card-stats {
  display: flex;
  align-items: center;
  gap: 18px;
  font-size: 1.1rem;
  font-weight: 700;
}
.news-card-like {
  color: #3fff7a;
  background: rgba(0,0,0,0.22);
  border-radius: 12px;
  padding: 2px 14px;
}
.news-card-views {
  color: #fff;
  background: rgba(0,0,0,0.22);
  border-radius: 12px;
  padding: 2px 14px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.icon-eye {
  width: 22px;
  height: 22px;
  vertical-align: middle;
}
.news-card-fire {
  background: rgba(0,0,0,0.22);
  border-radius: 12px;
  padding: 2px 10px 2px 8px;
  display: flex;
  align-items: center;
}
.icon-fire {
  width: 22px;
  height: 22px;
}
@media (max-width: 1100px) {
  .news-cards-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  .news-card.large {
    grid-row: auto;
    min-height: 220px;
  }
  .news-card.small {
    min-height: 140px;
    aspect-ratio: unset;
    height: auto;
  }
}
@media (max-width: 700px) {
  .news-cards-grid {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .news-card {
    min-height: 120px;
    padding: 0;
    height: auto;
    aspect-ratio: unset;
  }
  .news-card-content {
    padding: 18px 12px 14px 12px;
    gap: 8px;
  }
  .news-card-title {
    font-size: 1.1rem;
  }
  .news-card-date {
    font-size: 1rem;
  }
  .news-card-date {
    top: 10px;
    right: 12px;
    font-size: 1rem;
  }
}
/* --- News List Block --- */
.news-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 40px;
}
.news-list-item {
  background: #fff;
  border-radius: 22px;
  padding: 24px 24px 32px 24px;
  margin-bottom: 0;
}
.news-list-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 18px;
}
.news-list-title-main {
  color: #2563eb;
  font-weight: 800;
  font-size: 1.08rem;
}
.news-list-title-sub {
  color: #2563eb;
  font-weight: 600;
  font-size: 0.98rem;
}
.news-list-time {
  color: #bdbdbd;
  font-size: 0.98rem;
  font-weight: 500;
  white-space: nowrap;
  margin-left: 16px;
}
.news-list-image-wrap {
  position: relative;
  width: 100%;
  border-radius: 18px;
  overflow: hidden;
  margin-top: 8px;
}
.news-list-img {
  width: 100%;
  height: 380px;
  object-fit: cover;
  border-radius: inherit;
  display: block;
}
.news-list-img-overlay {
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  background: linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.08) 100%);
  z-index: 2;
}
.news-list-img-content {
  position: absolute;
  left: 0; top: 0; width: 100%; height: 100%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0 0 24px 32px;
  gap: 18px;
}
.news-list-img-text {
  color: #fff;
  font-size: 1.15rem;
  font-weight: 700;
  max-width: 70%;
  margin-bottom: 8px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.18);
}
.news-list-btn {
  background: #4ea3ff;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 10px 32px;
  font-size: 1.08rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.18s;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
}
.news-list-btn:hover {
  background: #2563eb;
}
@media (max-width: 700px) {
  .news-list-item {
    padding: 14px 6px 18px 6px;
  }
  .news-list-img {
    height: 240px;
  }
  .news-list-img-content {
    padding: 0 0 12px 10px;
    gap: 10px;
  }
  .news-list-img-text {
    font-size: 0.98rem;
    max-width: 98%;
  }
  .news-list-btn {
    padding: 7px 18px;
    font-size: 0.98rem;
  }
}
</style> 