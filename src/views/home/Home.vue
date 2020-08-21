<template>
    <div id="home">
      <nav-bar class="home-nav">
        <div slot="center">购物街</div>
      </nav-bar>
    </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
    export default {
    name: "Home",
    components: {
      // eslint-disable-next-line vue/no-unused-components
        NavBar
    }
    }
</script>

<style scoped>
  .home-nav {
    background-color: red;
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
</style>
