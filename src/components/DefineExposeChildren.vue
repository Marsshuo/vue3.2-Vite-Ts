<template>
  <div v-if="show">
    <p>{{ count }}</p>
    我是DefineExposeChildren
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0)
const show = ref(false)

const onShow = () => {
  show.value = !show.value
}
// defineExpose暴露出count属性和onShow方法
defineExpose({
  count,
  onShow
})
</script>