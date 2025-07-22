<template>
  <div class="mobile-menu-overlay" @click.self="$emit('close')">
    <div class="mobile-menu-content">
      <button class="mobile-menu-close" @click="$emit('close')">×</button>
      <SidebarMenu :menu-items="menuItems" />
    </div>
  </div>
</template>

<script>
import SidebarMenu from './SidebarMenu.vue'
export default {
  name: 'MobileMenu',
  components: { SidebarMenu },
  props: {
    menuItems: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.mobile-menu-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.45);
  z-index: 2000;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  transition: background 0.2s;
}
.mobile-menu-content {
  background: #fff;
  width: 80vw;
  max-width: 320px;
  height: 100vh;
  box-shadow: -2px 0 16px rgba(0,0,0,0.10);
  border-radius: 16px 0 0 16px;
  padding: 32px 16px 16px 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  animation: slideInRight 0.25s;
}
@keyframes slideInRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
.mobile-menu-close {
  position: absolute;
  top: 12px;
  right: 18px;
  font-size: 2.2rem;
  color: #1976d2;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
  line-height: 1;
}
</style> 