<template>
    <div>
        <section class="section_title">
            <h1 class="title">
                <TextItems :texts="lang.$.title" />
            </h1>
        </section>
    </div>
</template>

<script lang="ts" src="@/script/pages/Index.ts"></script>

<style lang="scss" scoped>
.section {
    &_title {
      display: flex;
      justify-content: center;
      margin: calc(100vh / 3) 0 0 0;
      > .title{
        font-size: 40pt;
      }
    }
}
</style>
