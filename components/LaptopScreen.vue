<template>
    <div class="screen_container">
        <div :class="`frame mywork ${hideClassBetween(windowPosition, mywork_start, mywork_end, 'hidden')}`">
            <h2 class="title"><TextItems :texts="lang.$.mywork.title" /></h2>
            <ul>
                <li :class="`${showClassBetween(windowPosition, ((1 * step) + mywork_start), ((2 * step) + mywork_start), 'mark')}`">
                    Code
                </li>
                <li :class="`${showClassBetween(windowPosition, ((2 * step) + mywork_start), ((3 * step) + mywork_start), 'mark')}`">
                    Eat
                </li>
                <li :class="`${showClassBetween(windowPosition, ((3 * step) + mywork_start), ((4 * step) + mywork_start), 'mark')}`">
                    Sleep
                </li>
                <li :class="`${showClassBetween(windowPosition, ((4 * step) + mywork_start), ((5 * step) + mywork_start), 'mark')}`">
                    did I mentioned Code?
                </li>
            </ul>
            <div class="images">
                <img src="" alt="" class="img">
            </div>
        </div>
        <div :class="`frame canCode ${hideClassBetween(windowPosition, canCode_start, canCode_end, 'hidden')}`">
            <h2 class="title"><TextItems :texts="lang.$.canCode.title" /></h2>
            <ul>
                <li v-for="(lang, i) in lang.$.canCode.langs" :key="i">
                    <!-- Icon -->
                    <img v-if="lang.icon"
                    :class="`image ${showClassBetween(windowPosition, (((i+1) * step) + canCode_start), (((i+2) * step) + canCode_start), 'mark')}`"
                    :src="lang.icon" :alt="lang.name" :style="{background: lang.color,}">
                    <div v-if="!lang.icon"
                    :class="`iconBox ${showClassBetween(windowPosition, (((i+1) * step) + canCode_start), (((i+2) * step) + canCode_start), 'mark')}`"
                    :style="{background: lang.color,}">
                        {{lang.name}}
                    </div>
                    <!-- Description -->
                    <div :class="`desc ${showClassBetween(windowPosition, (((i+1) * step) + canCode_start), (((i+2) * step) + canCode_start), 'mark')}`">
                        <p class="teaching"><TextItems :texts="lang.teaching" /></p>
                        <p class="experience"><TextItems :texts="lang.experience" /></p>
                    </div>
                </li>
            </ul>
            <div class="codeNames">
                <div
                :class="`codeName ${hideClassBetween(windowPosition, (((i+1) * step) + canCode_start), (((i+2) * step) + canCode_start), 'hidden')}`"
                v-for="(lang, i) in lang.$.canCode.langs" :key="i">{{lang.name}}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/scss/var' as var;

.screen_container{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    color: var.$white;
    > .frame{
        padding: var.$space calc(var.$space * 2);
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        transition: var.$ani_slow ease;
        transform: translate(0%, 0%);
        &.hidden{
            transform: translate(0%, 50%);
        }
    }
    > .mywork {
        > .title{
            color: var.$highlight_light;
            font-size: var.$font_size;
        }
        > ul{
            display: flex;
            flex-direction: column;
            list-style-type: none;
            > li{
                color: var.$blue_light;
                transition: var.$ani;
                &.mark{
                    color: var.$white;
                }
            }
        }
        > .images{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
    }
    > .canCode {
        height: 100%;
        > .title{
            color: var.$highlight_light;
            font-size: var.$font_size;
        }
        > ul{
            padding: var.$space 0;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            z-index: 3;
            > li{
                color: var.$blue_light;
                transition: var.$ani;
                display: flex;
                align-items: center;
                > .image{
                    box-sizing: content-box;
                    width: calc(var.$space / 1.5);
                    padding: calc(var.$space / 3);
                    border-radius: .5rem;
                    transition: var.$ani;
                    filter: brightness(.2);
                    &.mark{
                        filter: brightness(1);
                    }
                }
                > .iconBox{
                    display: flex;
                    justify-content: center;
                    box-sizing: content-box;
                    height: calc(var.$space / 1.5);
                    padding: calc(var.$space / 3);
                    border-radius: .5rem;
                    font-size: var.$font_size_small;
                    filter: brightness(.2);
                    color: #000;
                    &.mark{
                        filter: brightness(1);
                    }
                }
                > .desc{
                    padding: calc(var.$space / 2);
                    filter: brightness(.2);
                    transition: var.$ani;
                    &.mark{
                        filter: brightness(1);
                    }
                    > .teaching,
                    > .experience{
                        font-size: var.$font_size;
                    }
                }
            }
        }
        > .codeNames{
            z-index: 1;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            > .codeName{
                position: absolute;
                right: var.$space;
                bottom: var.$space;
                font-size: var.$font_size_baba;
            }
        }
    }
}
.hidden{
    opacity: 0;
}

@media only screen and (max-width: 1300px) {
    .screen_container{
        > .canCode {
            > ul{
                flex-direction: row;
                flex-wrap: wrap;
            }
        }
    }
}

</style>

<script src="@/script/components/LaptopScreen.ts"></script>