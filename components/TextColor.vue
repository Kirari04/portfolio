<template>
    <span>
        <span v-if="!mark">{{text}}</span>
        <span v-if="mark" class="mark">{{text}}</span>
    </span>
</template>

<script lang="ts" src="@/script/components/TextColor.ts"></script>