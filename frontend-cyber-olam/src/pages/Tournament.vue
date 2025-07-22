<template>
  <div class="tournaments-page">
    <div class="tournaments-tabs-wrap">
      <div class="tournaments-tabs-bg">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          :class="['tournaments-tab', { active: currentTab === tab.value }]"
          @click="currentTab = tab.value"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>
    <!-- Блок турниров как на Home.vue -->
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
    <!-- // Блок турниров -->
    <!-- Новый блок карточек турниров -->
    <div class="tournament-cards-grid">
      <div class="tournament-card-new" v-for="i in 8" :key="i">
        <div class="tournament-card-new-img-wrap">
          <img class="tournament-card-new-img" src="/banner-for-card.png" alt="Турнир" />
          <div class="tournament-card-new-gradient"></div>
        </div>
        <div class="tournament-card-new-content">
          <div class="tournament-card-new-title">BALI MAJOR</div>
          <div class="tournament-card-new-subtitle">CYBER OLAM</div>
          <button class="tournament-card-new-btn">Подробнее</button>
        </div>
      </div>
    </div>
    <!-- // Новый блок карточек турниров -->
    <!-- Здесь будет контент страницы турниров -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tabs = [
  { label: 'Активные', value: 'active' },
  { label: 'Прошедшие', value: 'past' },
  { label: 'Ближайшие', value: 'upcoming' },
]
const currentTab = ref('active')
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
:root, body {
  font-family: 'Manrope', sans-serif !important;
}
.tournaments-page {
  width: 100%;
  min-height: 60vh;
  /* padding: 48px 0 0 0; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.tournaments-tabs-wrap {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 32px;
}
.tournaments-tabs-bg {
  background: #fff;
  border-radius: 32px;
  display: flex;
  align-items: center;
  padding: 4px 0 4px 0;
  box-shadow: none;
  width: auto;
  gap: 24px;
}
.tournaments-tab {
  border: none;
  outline: none;
  background: transparent;
  color: #90caf9;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 32px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  margin: 0;
}
.tournaments-tab.active {
  background: #2563eb;
  color: #fff;
  font-weight: 700;
}
@media (max-width: 700px) {
  .tournaments-tabs-bg {
    border-radius: 18px;
    padding: 2px 0 2px 0;
    gap: 8px;
    width: auto;
  }
  .tournaments-tab {
    font-size: 0.95rem;
    padding: 6px 12px;
    border-radius: 14px;
  }
}
.tournaments-section {
  width: 100%;
  margin-top: 48px;
  margin-bottom: 0;
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
.tournament-cards-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin: 48px 0 0 0;
}
.tournament-card-new {
  background: #fff;
  border-radius: 28px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s;
  padding: 0;
  min-height: unset;
  justify-content: space-between;
}
.tournament-card-new-img-wrap {
  width: 100%;
  aspect-ratio: 1/0.72;
  position: relative;
  overflow: hidden;
  min-height: 0;
}
.tournament-card-new-gradient {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  /* height: 12%;
  background: linear-gradient(0deg, #fff 0%, #fff 65%, rgba(255,255,255,0.0) 100%); */
  z-index: 2;
  pointer-events: none;
}
.tournament-card-new-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  position: relative;
  z-index: 1;
}
.tournament-card-new-content {
  width: 100%;
  padding: 10px 10px 0 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: none;
  gap: 6px;
  min-height: 0;
}
.tournament-card-new-title {
  font-size: 1.25rem;
  font-weight: 900;
  color: #2563eb;
  margin-bottom: 8px;
  text-align: left;
  letter-spacing: 0.01em;
}
.tournament-card-new-subtitle {
  font-size: 0.95rem;
  font-weight: 800;
  color: #111;
  margin-bottom: 6px;
  text-align: left;
}
.tournament-card-new-btn {
  background: #7fb5e1;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 13px 0;
  font-size: 0.95rem;
  font-weight: 500;
  width: 100%;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 10px;
  margin-bottom: 14px;
}
.tournament-card-new-btn:hover {
  background: #2563eb;
}
@media (max-width: 1100px) {
  .tournament-cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }
}
@media (max-width: 700px) {
  .tournament-cards-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .tournament-card-new-content {
    padding: 14px 8px 14px 8px;
  }
  .tournament-card-new-title {
    font-size: 1.2rem;
  }
  .tournament-card-new-subtitle {
    font-size: 0.95rem;
    margin-bottom: 8px;
  }
  .tournament-card-new-btn {
    font-size: 0.95rem;
    padding: 8px 0;
    border-radius: 12px;
  }
}
</style> 