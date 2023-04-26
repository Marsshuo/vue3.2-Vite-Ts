<template>
    <div class="home">
        <n-menu :options="options" style="width: 180px" default-value="1" />
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MenuOption } from 'naive-ui'

const options: MenuOption[] = [
    {
        label: '电灯熄灭 物换星移 泥牛入海',
        key: '1'
    },
    {
        label: '黑暗好像 一颗巨石 按在胸口',
        key: '2'
    }
]
</script>