<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Children from './components/Children.vue'

import { ref, reactive } from "vue"
const msg = ref('')
msg.value = 'hello'
const num = ref(0)
const obj = reactive({
  name: 'masi',
  age: '27'
})
const onClick = (): void => {
  num.value = num.value + 1;
  alert('click' + num.value)
}
</script>

<template>
  <!-- <div> -->
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>-->
    <!-- {{ `${msg}很高兴认识你${obj.name}` }}
    <button @click="onClick">点击</button> -->
    <router-view />
  <!-- </div> -->
  <!-- <Children/> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
