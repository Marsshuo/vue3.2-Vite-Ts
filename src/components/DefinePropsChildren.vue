<script setup lang="ts">
import { ref } from 'vue'
const msg = ref('')
msg.value = 'hello'
const props = defineProps({
    name: {
        type: String,
        default: '张三'
    }
})
// 或者
// const props = defineProps(['name'])
</script>
<template>
    <div>
        {{ `${msg}呀！${props.name}` }} -------DefinePropsChildren
    </div>
</template>