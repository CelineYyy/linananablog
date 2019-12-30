<!-- menu component -->
<template>
  <div class="menu">
    <div class="menu-open">
      <img class="icon-close" src="./../assets/img/icon_menu.png" />
      <div class="home color-white text-center">
        <router-link to="/">首页</router-link>
      </div>
      <div class="work color-white text-center">
        <router-link to="workui">作品集</router-link>
      </div>
      <div class="contactme color-white text-center">
        <a href="/#contact">联系我</a>
      </div>
      <div class="note color-white text-center">
        <router-link to="design">学习笔记</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MenuComponent",
  props: {
    msg: String
  }
};
</script>
