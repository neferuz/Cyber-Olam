<template>
  <div class="ranking-page">
    <div class="ranking-tabs-wrap">
      <div class="ranking-tabs-bg">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          :class="['ranking-tab', { active: currentTab === tab.value }]"
          @click="currentTab = tab.value"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>
    <div class="ranking-filters-wrap">
      <div class="ranking-filters-bg">
        <button
          v-for="filter in filters"
          :key="filter.value"
          :class="['ranking-filter', { active: currentFilter === filter.value }]"
          @click="currentFilter = filter.value"
        >
          {{ filter.label }}
        </button>
      </div>
    </div>
    <!-- Новый блок рейтинга на div-карточках -->
    <div class="ranking-table-outer">
      <div class="ranking-table-header">
        <div class="ranking-header-place">Место</div>
        <div class="ranking-header-team">Команда</div>
        <div class="ranking-header-points">Очки</div>
      </div>
      <div class="ranking-cards-list">
        <div
          v-for="(team, idx) in teams"
          :key="team.place"
          :class="[
            'ranking-card',
            { 'first-row': teams.length > 1 && idx === 0,
              'last-row': teams.length > 1 && idx === teams.length - 1,
              'single-row': teams.length === 1 }
          ]"
        >
          <div class="ranking-place">{{ team.place }}</div>
          <div class="ranking-team">
            <img :src="team.logo" :alt="team.name" class="ranking-team-logo" />
            <span class="ranking-team-name">{{ team.name }}</span>
          </div>
          <div class="ranking-points">
            <span class="ranking-points-value">{{ team.points }}</span>
            <svg class="ranking-arrow" width="22" height="22" viewBox="0 0 22 22"><path d="M8 5l6 6-6 6" stroke="#1976d2" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
      </div>
    </div>
    <div class="player-achievements-outer">
      <div class="player-achievements-title">Достижения игроков</div>
      <div class="player-achievements-list">
        <div class="player-achievement-card" v-for="(player, idx) in players" :key="idx">
          <div class="player-avatar-wrap">
            <img class="player-avatar" :src="player.avatar" :alt="player.name" />
          </div>
          <div class="player-name">{{ player.name }}</div>
          <div class="player-nick" :style="{ color: '#19A7FF' }">{{ player.nick }}</div>
          <div class="player-game">{{ player.game }}</div>
          <button class="player-hltv-btn">HLTV 2025</button>
          <svg class="player-arrow" width="22" height="22" viewBox="0 0 22 22"><path d="M8 5l6 6-6 6" stroke="#1976d2" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
      </div>
    </div>
    <div class="team-banners-outer">
      <div class="team-banner">
        <div class="team-banner-content">
          <img class="team-banner-logo" src="/navi-logo.png" alt="NAVI" />
          <div class="team-banner-title-row">
            <span class="team-banner-title">TEAM NATUS VINCERE</span>
            <img class="team-banner-corner-logo" src="/global.svg" alt="global" />
          </div>
          <div class="team-banner-desc">&lt;&lt; Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent &gt;&gt;</div>
          <div class="team-banner-event">№1 Major Stockholm 2021</div>
          <button class="team-banner-btn">Узнать больше</button>
        </div>
        <div class="team-banner-bg" style="background-image: url('/banner-for-rayting.png');"></div>
      </div>
      <div class="team-banner">
        <div class="team-banner-content">
          <img class="team-banner-logo" src="/spirit-logo.png" alt="SPIRIT" />
          <div class="team-banner-title-row">
            <span class="team-banner-title">TEAM SPIRIT</span>
            <img class="team-banner-corner-logo" src="/spirit-logo.png" alt="spirit" />
          </div>
          <div class="team-banner-desc">&lt;&lt; Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent &gt;&gt;</div>
          <div class="team-banner-event">№1 BLAST Bounty Spring 2025</div>
          <button class="team-banner-btn">Узнать больше</button>
        </div>
        <div class="team-banner-bg" style="background-image: url('/banner-fortwo.png');"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tabs = [
  { label: 'Команда', value: 'team' },
  { label: 'Игроки', value: 'players' },
  { label: 'Турниры', value: 'tournaments' },
]
const currentTab = ref('team')
const filters = [
  { label: 'CS 2', value: 'cs2' },
  { label: 'DOTA 2', value: 'dota2' },
  { label: 'VALARANT', value: 'valarant' },
  { label: 'MOBILE LEGENDS', value: 'mobilelegends' },
]
const currentFilter = ref('cs2')
const teams = [
  { place: 1, name: 'Spirit', logo: '/spirit-logo.png', points: 2180 },
  { place: 2, name: 'NATUS VINCERE', logo: '/navi-logo.png', points: 2180 },
  { place: 3, name: 'FNATIC', logo: '/fnatic-logo.png', points: 2180 },
  { place: 4, name: 'HERONIC', logo: '/heroic-logo.png', points: 2180 },
  { place: 5, name: 'G2 ESROPT', logo: '/g2-logo.png', points: 2180 },
]
const players = [
  { name: 'Danil Kryshkovents', nick: 'donk', game: 'Counter-Strike 2', avatar: '/user.png' },
  { name: 'Aleksandr Olegovich', nick: 's1mple', game: 'Counter-Strike 2', avatar: '/user.png' },
  { name: 'Danil Kryshkovents', nick: 'donk', game: 'Counter-Strike 2', avatar: '/user.png' },
  { name: 'Aleksandr Olegovich', nick: 's1mple', game: 'Counter-Strike 2', avatar: '/user.png' },
  { name: 'Aleksandr Olegovich', nick: 's1mple', game: 'Counter-Strike 2', avatar: '/user.png' },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
:root, body {
  font-family: 'Manrope', sans-serif !important;
}
.ranking-page {
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.ranking-tabs-wrap {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 32px;
}
.ranking-tabs-bg {
  background: #fff;
  border-radius: 32px;
  display: flex;
  align-items: center;
  padding: 2px 0 2px 0;
  box-shadow: none;
  width: auto;
  gap: 24px;
}
.ranking-tab {
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
.ranking-tab.active {
  background: #2563eb;
  color: #fff;
  font-weight: 700;
}
.ranking-filters-wrap {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 32px;
}
.ranking-filters-bg {
  background: #fff;
  border-radius: 32px;
  display: flex;
  align-items: center;
  padding: 2px 0 2px 0;
  box-shadow: none;
  width: auto;
  gap: 24px;
}
.ranking-filter {
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
.ranking-filter.active {
  background: #2563eb;
  color: #fff;
  font-weight: 700;
}
.ranking-table-outer {
  width: 100%;
  background: #fafbfc;
  border-radius: 24px;
  padding: 0 0 32px 0;
  margin-top: 0;
  margin-bottom: 32px;
  box-sizing: border-box;
  box-shadow: none;
}
.ranking-table-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 32px 48px 18px 48px;
  font-size: 1.25rem;
  font-weight: 800;
  color: #2196f3;
  gap: 56px;
}
.ranking-header-place {
  width: 60px;
  color: #008CFF;
}
.ranking-header-team {
  flex: 1 1 0;
  color: #008CFF;
}
.ranking-header-points {
  width: 120px;
  text-align: right;
  color: #008CFF;
}
.ranking-cards-list {
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 100%;
  padding: 0 24px;
}
.ranking-card {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  border: 1.5px solid #008CFF;
  border-radius: 28px;
  padding: 32px 48px;
  transition: box-shadow 0.18s;
  box-shadow: none;
  width: 100%;
  box-sizing: border-box;
  gap: 56px;
}
.ranking-card.first-row {
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
}
.ranking-card.last-row {
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
}
.ranking-card.single-row {
  border-radius: 40px !important;
}
.ranking-place {
  width: 60px;
  min-width: 60px;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 800;
  color: #1976d2;
  flex-shrink: 0;
}
.ranking-team {
  display: flex;
  align-items: center;
  gap: 18px;
  font-size: 1.18rem;
  font-weight: 800;
  color: #111;
  flex: 1 1 0;
}
.ranking-team-logo {
  width: 44px;
  height: 44px;
  object-fit: contain;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(33,150,243,0.04);
}
.ranking-team-name {
  font-size: 1.18rem;
  font-weight: 800;
  color: #111;
}
.ranking-points {
  width: 120px;
  text-align: right;
  font-size: 1.25rem;
  font-weight: 800;
  color: #111;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 18px;
}
.ranking-points-value {
  font-size: 1.25rem;
  font-weight: 800;
  color: #111;
}
.ranking-arrow {
  width: 22px;
  height: 22px;
  margin-left: 8px;
  vertical-align: middle;
}
.player-achievements-outer {
  width: 100%;
  background: #fafbfc;
  border-radius: 24px;
  padding: 0 0 32px 0;
  margin-top: 32px;
  margin-bottom: 32px;
  box-sizing: border-box;
  box-shadow: none;
}
.player-achievements-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #2196f3;
  padding: 32px 48px 18px 48px;
}
.player-achievements-list {
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 100%;
  padding: 0 24px;
}
.player-achievement-card {
  display: flex;
  align-items: center;
  background: #fff;
  border: 1.5px solid #008CFF;
  border-radius: 40px;
  padding: 24px 40px;
  transition: box-shadow 0.18s;
  box-shadow: none;
  width: 100%;
  box-sizing: border-box;
  gap: 32px;
}
.player-avatar-wrap {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 1.5px solid #008CFF;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  overflow: hidden;
  flex-shrink: 0;
}
.player-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  background: #fff;
}
.player-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111;
  min-width: 200px;
}
.player-nick {
  font-size: 1.15rem;
  font-weight: 700;
  margin-left: 0;
  min-width: 90px;
}
.player-game {
  font-size: 1.15rem;
  font-weight: 500;
  color: #222;
  min-width: 160px;
}
.player-hltv-btn {
  background: #90caf9;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 8px 28px;
  font-size: 1.1rem;
  font-weight: 700;
  margin-left: 0;
  margin-right: 0;
  box-shadow: none;
  cursor: pointer;
  transition: background 0.2s;
}
.player-hltv-btn:hover {
  background: #008CFF;
}
.player-arrow {
  width: 22px;
  height: 22px;
  margin-left: auto;
  vertical-align: middle;
}
.team-banners-outer {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 32px 0 32px 0;
}
.team-banner {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background: #010101;
  border-radius: 32px;
  overflow: hidden;
  min-height: 280px;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.10);
  position: relative;
}
.team-banner-content {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 36px 32px 36px 40px;
  z-index: 2;
  min-width: 0;
}
.team-banner-logo {
  width: 54px;
  height: 54px;
  object-fit: contain;
  margin-bottom: 12px;
}
.team-banner-title-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
}
.team-banner-title {
  font-size: 1.45rem;
  font-weight: 900;
  color: #fff;
  letter-spacing: 0.01em;
  text-transform: uppercase;
}
.team-banner-corner-logo {
  width: 36px;
  height: 36px;
  object-fit: contain;
}
.team-banner-desc {
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 18px;
  line-height: 1.25;
}
.team-banner-event {
  font-size: 1.1rem;
  font-weight: 800;
  color: #19A7FF;
  margin-bottom: 18px;
}
.team-banner-btn {
  background: #fff;
  color: #111;
  border: none;
  border-radius: 24px;
  padding: 12px 38px;
  font-size: 1.1rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: none;
  transition: background 0.2s, color 0.2s;
}
.team-banner-btn:hover {
  background: #19A7FF;
  color: #fff;
}
.team-banner-bg {
  flex: 1.2 1 0;
  min-width: 0;
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  background: none;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.team-banner-bg-img {
  display: none;
}
/* Для каждого баннера задаём background-image через style */
@media (max-width: 900px) {
  .ranking-table-header {
    padding: 16px 10px 10px 10px;
    font-size: 1rem;
  }
  .ranking-card {
    padding: 12px 10px;
    border-radius: 14px;
  }
  .ranking-card.first-row {
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
  }
  .ranking-card.last-row {
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
  }
  .ranking-card.single-row {
    border-radius: 20px !important;
  }
  .ranking-team-logo {
    width: 28px;
    height: 28px;
    border-radius: 7px;
  }
  .player-achievements-title {
    padding: 16px 10px 10px 10px;
    font-size: 1.1rem;
  }
  .player-achievement-card {
    padding: 10px 6px;
    border-radius: 18px;
    gap: 12px;
  }
  .player-avatar-wrap {
    width: 40px;
    height: 40px;
  }
  .player-avatar {
    width: 32px;
    height: 32px;
  }
  .player-name, .player-nick, .player-game {
    font-size: 0.95rem;
    min-width: unset;
  }
  .player-hltv-btn {
    padding: 6px 12px;
    border-radius: 12px;
    font-size: 0.95rem;
  }
}
@media (max-width: 600px) {
  .ranking-table-header {
    padding: 8px 2px 6px 2px;
    font-size: 0.92rem;
  }
  .ranking-card {
    padding: 6px 2px;
    border-radius: 6px;
  }
  .ranking-card.first-row {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  .ranking-card.last-row {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .ranking-card.single-row {
    border-radius: 10px !important;
  }
  .ranking-team-logo {
    width: 20px;
    height: 20px;
    border-radius: 4px;
  }
  .player-achievements-title {
    padding: 8px 2px 6px 2px;
    font-size: 0.92rem;
  }
  .player-achievement-card {
    padding: 6px 2px;
    border-radius: 10px;
    gap: 6px;
  }
  .player-avatar-wrap {
    width: 24px;
    height: 24px;
  }
  .player-avatar {
    width: 18px;
    height: 18px;
  }
  .player-name, .player-nick, .player-game {
    font-size: 0.85rem;
  }
  .player-hltv-btn {
    padding: 3px 6px;
    border-radius: 8px;
    font-size: 0.85rem;
  }
}
@media (max-width: 1100px) {
  .team-banner {
    flex-direction: column;
    min-height: 0;
    border-radius: 18px;
  }
  .team-banner-content {
    padding: 18px 10px 18px 10px;
  }
  .team-banner-bg {
    min-height: 180px;
    border-radius: 0 0 18px 18px;
  }
}
@media (max-width: 700px) {
  .team-banners-outer {
    gap: 18px;
  }
  .team-banner-content {
    padding: 10px 4px 10px 4px;
  }
  .team-banner-title {
    font-size: 1.1rem;
  }
  .team-banner-desc, .team-banner-event {
    font-size: 0.95rem;
  }
  .team-banner-btn {
    padding: 7px 18px;
    font-size: 0.95rem;
    border-radius: 12px;
  }
  .team-banner-logo, .team-banner-corner-logo {
    width: 28px;
    height: 28px;
  }
}
</style> 