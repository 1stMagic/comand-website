<template>
    <pre :class="classLanguage"><code :class="classLanguage" v-html="codeFormatted"></code></pre>

    <div class="flex-container no-flex">
        <a class="link-icon" href="#" @click.prevent="copyToClipboard">
            <span class="icon-duplicate-content"></span>
            <span>Copy code</span>
        </a>
        <transition name="fade">
            <p v-if="codeCopied">Code was copied to clipboard!</p>
        </transition>
    </div>
</template>

<script>
import Prism from "prismjs"
import "prismjs/components/prism-json"

export default {
    name: "ComponentCode",
    data() {
        return {
            codeCopied: false
        }
    },
    props: {
        code: {
            type: [String, Object, Array],
            required: true
        },
        language: {
            type: String,
            default: "markup"
        }
    },
    computed: {
        codeFormatted() {
            let codeUnformatted = this.code
            if (typeof this.code !== "string") {
                codeUnformatted = JSON.stringify(codeUnformatted, null, 2)
            }
            return Prism.highlight(codeUnformatted ?? "", Prism.languages[this.language], this.language)
        },
        classLanguage() {
            return "language-" + this.language
        }
    },
    methods: {
        copyToClipboard() {
            navigator.clipboard.writeText(this.code)
            this.codeCopied = true
             window.setTimeout(
                () => this.codeCopied = false,
                3000
            )
        }
    }
}
</script>

<style lang="scss">
:is(pre, code)[class*="language-"] {
    margin: 0;
    border: 0;
    border-radius: 0;
    background: #333;
    box-shadow: none;
    text-shadow: none !important;

    & ~ div {
        padding: var(--default-padding);
        align-items: center;

        > p {
            margin: 0;
        }
    }

    .token {
        color: white;

        &.tag {
            color: aqua;

            .punctuation {
                color: inherit;
            }
        }

        &.comment {
            color: #999;
        }

        &[class*="attr-"], &.punctuation {
            color: white;
            opacity: 1;
        }


        &.string, &.attr-value {
            color: lime;
        }
    }
}
</style>
