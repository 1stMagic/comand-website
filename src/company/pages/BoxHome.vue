<template>
    <div class="box box-home">
        <CmdHeadline
            v-if="cmdHeadline"
            :headlineText="cmdHeadline.headlineText"
            :headlineLevel="cmdHeadline.headlineLevel"
        />
        <div class="icon-hexagon-thin">
            <span :class="shapeIconClass"></span>
        </div>
        <p v-if="textDescription">{{ textDescription }}</p>
        <small v-if="additionalText"> {{ additionalText }}</small>
        <ul v-if="checkList?.length" class="check">
            <li v-for="(item, index) in checkList" :key="index">{{ item }}</li>
        </ul>
        <a v-if="urlGit" :href="urlGit" class="button" target="git">
            <span class="icon-github"></span>
            <span>Download on GitHub</span>
        </a>
    </div>
</template>

<script>
// import components
import {CmdHeadline} from "comand-component-library"

export default {
    name: "BoxHome",
    components: {
        CmdHeadline
    },
    props: {
        cmdHeadline: {
            type: Object,
        },
        shapeIconClass: {
            type: String,
            default: "icon-hexagon-outline"
        },
        categoryIconClass: {
            type: String
        },
        textDescription: {
            type: String
        },
        additionalText: {
            type: String
        },
        checkList: {
          type: Array
        },
        urlGit: {
            type: String
        }
    }
}
</script>

<style lang="scss">
.box-home, .box-browsers {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.26);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.3px);
    -webkit-backdrop-filter: blur(5.3px);
    border: 1px solid rgba(255, 255, 255, 0.3);

    .cmd-headline {
        text-align: center;

        & + div[class*="icon"] {
            font-size: 15rem;

            [class*="icon"] {
                position: absolute;
                display: block;
                font-size: 6rem;
                top: 50%;
                left: 50%;
                translate: -50% -50%;
            }
        }
    }

    [target="git"].button {
        --git-color: #2c974b;
        background: var(--git-color);
        border-color: var(--git-color);

        span {
            color: var(--pure-white);
        }

        &:hover, &:active, &:focus {
            background: var(--pure-white);

            span {
                color: var(--git-color);
            }
        }
    }
}
</style>