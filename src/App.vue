<template>
  <header>
    <h2>Tarefinhas</h2>
    <!-- <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  </header>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
body {
  height: 100vh;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20px;
  margin-bottom: 20px;
  // background-color: aquamarine;
  height: 180px;
}
</style>
