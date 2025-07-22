<template>
  <nav class="sidebar-menu">
    <ul>
      <li v-for="item in menuItems" :key="item.name" :class="{ active: isActive(item) }">
        <router-link :to="item.link" class="sidebar-link">
          <img :src="item.icon" class="sidebar-icon" :alt="item.name" />
          <span>{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'SidebarMenu',
  props: {
    menuItems: {
      type: Array,
      required: true
    }
  },
  computed: {
    $route() {
      return this.$root.$route || this.$router.currentRoute.value;
    }
  },
  methods: {
    isActive(item) {
      // Точное совпадение или вложенные роуты
      return this.$route.path === item.link || this.$route.path.startsWith(item.link + '/');
    }
  }
}
</script>

<style scoped>
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
  padding: 8px 16px 8px 16px;
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
}
.sidebar-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}
</style> 