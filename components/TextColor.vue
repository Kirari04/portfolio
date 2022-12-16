<template>
    <span>
        <span v-if="!mark">{{text}}</span>
        <span v-if="mark" class="mark">{{text}}</span>
    </span>
</template>

<style lang="scss" scoped>
@use '@/scss/var' as var;

.mark{
    color: var.$highlight;
    text-shadow: 0px 0px 10px var.$highlight_light;
}
</style>

<script lang="ts" src="@/script/components/TextColor.ts"></script>