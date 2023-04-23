<script setup lang="ts">
import { ref, reactive } from 'vue'
const msg = ref('')
msg.value = 'hello'
const show = ref(false)
const count=ref(0)
// 或者
const emit = defineEmits(['on-confirm'])
const handleConfirm = () => {
    count.value +=1
    show.value = !show.value
    emit('on-confirm',show.value)
}
</script>
<template>
    <div>
        {{ `${msg}呀$` }} ------------defineEmits
    </div>
    <button type="button" @click="handleConfirm">点击Emit</button>
</template>