<template>
    <div>
        1Management 页面
        <button type="button" @click="onClick">Manage调ref</button>
        <br />
        2<DefinePropsChildren :name="name"></DefinePropsChildren>
        <br />
        3<DefineEmitsChildren @on-confirm="onConfirm"></DefineEmitsChildren>
        <p v-if="show">DefineEmitsChildren</p>
        <br />
        4<DefineExposeChildren ref="childRef"></DefineExposeChildren>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import DefineEmitsChildren from '../components/DefineEmitsChildren.vue'
import DefinePropsChildren from '../components/DefinePropsChildren.vue'
import DefineExposeChildren from '../components/DefineExposeChildren.vue'
// DefinePropsChildren 父传子
const name = ref('')
name.value = '李四'

// DefineEmitsChildren 子传父
const show = ref(false)
const onConfirm = (val: boolean) => {
    show.value = val
}
// DefineExposeChildren 子组件暴露自己的属性
// Child组件的ref
const childRef = ref(null)

// 在父组件操作子组件的暴露出的属性或方法
const onClick = () => {
    childRef.value.count += 1;
    childRef.value.onShow();
}

</script>