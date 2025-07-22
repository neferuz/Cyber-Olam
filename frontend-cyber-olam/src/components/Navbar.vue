<template>
    <nav class="app-navbar">
        <div class="navbar-container">
            <div class="navbar-left">
                <a href="#" class="logo-link">
                    <img src="/logo.svg" alt="Cyber Olam Logo" class="logo-icon" />
                </a>
                <div class="search-box">
                    <input type="text" placeholder="Поиск" class="search-input" />
                    <svg
                        class="search-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </div>
            </div>

            <div class="navbar-right">
                <button class="shop-button">
                    <svg class="shop-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.2-3.24 7.7-7 8.9V12H5c.53-4.2 3.24-7.7 7-8.9v7.99z"
                        />
                    </svg>
                    Магазин
                </button>
                <a href="#" class="icon-link">
                    <svg class="icon-mail" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                        />
                    </svg>
                </a>
                <a href="#" class="icon-link">
                    <svg class="icon-globe" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v4h-2zm0 6h2v2h-2z"
                        />
                    </svg>
                </a>
                <button class="login-button">
                    Войти
                    <svg
                        class="login-arrow"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </button>
            </div>

            <button class="burger-button" @click="showMobileMenu = true">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                >
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            </button>
        </div>
        <MobileMenu v-if="showMobileMenu" :menu-items="menuItems" @close="showMobileMenu = false" />
    </nav>
</template>

<script>
import MobileMenu from './MobileMenu.vue'
import SidebarMenu from './SidebarMenu.vue'
export default {
    name: 'AppNavbar',
    components: { MobileMenu, SidebarMenu },
    emits: ['toggle-menu'],
    data() {
        return {
            showMobileMenu: false,
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
        }
    },
};
</script>

<style scoped>
.app-navbar {
    
    padding: 15px 25px;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-sizing: border-box;
}
.navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1560px;
    width: 100%;
    background: rgba(255,255,255,0.7);
    backdrop-filter: blur(12px);
    border-radius: 50px;
    padding: 10px 20px;
    box-shadow: 0 4px 24px 0 rgba(0,0,0,0.04);
}
.navbar-left {
    display: flex;
    align-items: center;
    gap: 20px;
}
.logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;
}
.logo-icon {
    height: 40px;
    width: auto;
}
.search-box {
    position: relative;
    display: flex;
    align-items: center;
    width: 350px;
}
.search-input {
    width: 100%;
    padding: 16px 20px 16px 45px;
    border: 1px solid #e0e0e0;
    border-radius: 25px;
    font-size: 1em;
    outline: none;
    transition: border-color 0.3s;
}
.search-input:focus {
    border-color: #5d9afc;
}
.search-icon {
    position: absolute;
    left: 15px;
    color: #a0a0a0;
    width: 20px;
    height: 20px;
}
.navbar-right {
    display: flex;
    align-items: center;
    gap: 10px;
}
.shop-button {
    background-color: #f7a944;
    color: white;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: background-color 0.3s;
    white-space: nowrap;
}
.shop-button:hover {
    background-color: #e6912c;
}
.shop-icon {
    width: 20px;
    height: 20px;
    fill: currentColor;
}
.icon-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #e0f2ff;
    color: #5d9afc;
    transition: background-color 0.3s;
}
.icon-link:hover {
    background-color: #cce7ff;
}
.icon-mail,
.icon-globe {
    width: 24px;
    height: 24px;
    fill: currentColor;
}
.login-button {
    background-color: #8bbef8;
    color: white;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: background-color 0.3s;
    white-space: nowrap;
}
.login-button:hover {
    background-color: #72a9e5;
}
.login-arrow {
    width: 18px;
    height: 18px;
    stroke: white;
}
.burger-button {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    color: #333;
}
.burger-button svg {
    width: 28px;
    height: 28px;
}
@media (max-width: 992px) {
    .app-navbar {
        padding: 10px 15px;
    }
    .navbar-container {
        padding: 5px 15px;
    }
    .search-box,
    .navbar-right {
        display: none;
    }
    .burger-button {
        display: inline-flex;
    }
    .logo-icon {
        height: 35px;
    }
}
</style>