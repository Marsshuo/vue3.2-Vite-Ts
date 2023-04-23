<script setup lang="ts">
import { ref, reactive } from 'vue'
const msg = ref('')
msg.value = 'hello'
const props = defineProps({
    name: {
        type: String,
        default: '张三'
    }
})
const emit = defineEmits(['on-confirm'])
const handleConfirm = () => {
    emit('on-confirm', false)
}
// 或者
// const props = defineProps(['name'])

</script>
<template>
    <div>
        {{ `${msg}呀！${props.name}` }}
    </div>
    <button type="button" @click="handleConfirm">点击</button>
</template>