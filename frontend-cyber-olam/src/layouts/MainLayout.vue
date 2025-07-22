<template>
  <div class="main-layout">
    <Navbar />
    <div class="layout-content">
      <Sidebar />
      <main class="main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100vh;
  background: #f4f4f4;
  margin: 0;
  padding: 0;
}
.layout-content {
  display: flex;
  flex: 1;
  margin: 0;
  padding: 0;
  background: #f6f6f6;
  align-items: flex-start;
}
@media (min-width: 1100px) {
  .layout-content {
    padding-left: 240px;
  }
  .main-content {
    margin-left: 0;
    padding-left: 0;
  }
}
.main-content {
  margin-top: 100px;
  flex: 1;
  padding: 0 50px;
  background: #f4f4f4;
  min-height: 0;
  height: 100%;
}
@media (max-width: 1100px) {
  .sidebar-outer {
    display: none !important;
  }
}
</style>

