<template>
  <div class="navbar-container">
    <nav class="navbar">
      <div class="navbar-logo">
        <router-link exact-active-class="" to="/">Cars Shop</router-link>
      </div>
      <ul class="navbar-items" :class="{ active: showMenu }">
        <li class="navbar-item">
          <router-link class="navbar-item-link" to="/">Home</router-link>
        </li>
      </ul>
    </nav>
    <div class="menu" @click.prevent="toggleMenu()">
      <div class="menu-line"></div>
      <div class="menu-line"></div>
      <div class="menu-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped>
.navbar-container {
  display: flex;
  width: 100%;
  background: lightblue;
  justify-content: center;
  align-items: center;
}

.navbar {
  display: flex;
  width: 80%;
  color: black;
  justify-content: space-between;
  align-items: center;
}

.navbar .navbar-logo a {
  font-size: 24px;
}

.navbar-items {
  list-style: none;
  margin: 0;
}

.navbar-items .navbar-item {
  display: inline-block;
  padding: 20px 10px;
}

.navbar a {
  text-decoration: none;
  font-size: 18px;
  color: #000;
  font-weight: bold;
}

.navbar .navbar-item-link:hover {
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-thickness: 3px;
}

.navbar .navbar-item-link.router-link-exact-active {
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-thickness: 3px;
}

.menu {
  display: none;
}

.menu-line {
  width: 20px;
  height: 3px;
  background: #000;
  margin-bottom: 4px;
}

@media (max-width: 480px) {
  .navbar {
    width: 100%;
    flex-direction: column;
    position: relative;
    text-align: center;
  }

  .navbar .navbar-logo {
    padding: 20px 10px;
  }

  .menu {
    display: block;
    position: absolute;
    cursor: pointer;
    top: 24px;
    right: 20px;
  }

  .navbar-items {
    width: 100%;
    padding: 0;
    display: none;
  }

  .navbar .navbar-item {
    display: block;
    border-top: 1px solid white;
    width: 100%;
  }

  .active {
    display: block;
  }
}
</style>
