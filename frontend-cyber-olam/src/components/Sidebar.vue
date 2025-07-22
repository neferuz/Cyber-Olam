<template>
  <aside class="sidebar-outer">
    <div class="sidebar-inner">
      <SidebarMenu :menu-items="menuItems" />
    </div>
  </aside>
</template>

<script>
import SidebarMenu from './SidebarMenu.vue'
export default {
  name: 'Sidebar',
  components: { SidebarMenu },
  data() {
    return {
      menuItems: [
        { name: 'Главная', icon: '/8.svg', link: '/', isActive: true },
        { name: 'Турниры', icon: '/3.svg', link: '/tournaments', isActive: false },
        { name: 'Новости', icon: '/5.svg', link: '/news', isActive: false },
        { name: 'Трансляции', icon: '/6.svg', link: '/streams', isActive: false },
        { name: 'Рейтинг', icon: '/2.svg', link: '/ranking', isActive: false },
        { name: 'Реестр', icon: '/1.svg', link: '/registry', isActive: false },
        { name: 'Настройки', icon: '/7.svg', link: '/settings', isActive: false },
        { name: 'Помощь', icon: '/4.svg', link: '/help', isActive: false },
      ],
    };
  },
};
</script>

<style scoped>
.sidebar-outer {
  width: 240px;
  min-width: 240px;
  max-width: 240px;
  height: calc(100vh - 80px);
  position: fixed;
  left: 0;
  top: 80px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: transparent;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border-radius: 20px;
}
.sidebar-inner {
  width: 100%;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.06);
  padding: 16px 0 16px 0; /* уменьшил padding сверху и снизу */
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(25px) translateY(20px);
}
.sidebar-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
.sidebar-menu li {
  margin-bottom: 4px;
  width: 100%;
}
.sidebar-link {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 600;
  color: #bdbdbd;
  text-decoration: none;
  padding: 8px 16px 8px 16px; /* уменьшил внутренние отступы */
  border-radius: 14px;
  transition: background 0.2s, color 0.2s;
}
.sidebar-link:hover {
  background: #f5faff;
  color: #2196f3;
}
.sidebar-menu li.active .sidebar-link {
  color: #2196f3;
  background: #f5faff;
  font-weight: 700;
}
.sidebar-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}
</style> 