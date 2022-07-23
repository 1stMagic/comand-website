<template>
    <section class="example-section">
        <a :id="getExampleId()"></a>
        <!-- begin cmd-headline -->
        <CmdHeadline
            :preHeadlineText="getPreHeadlineText()"
            :headlineText="headlineText"
            :headlineLevel="3"
        />
        <!-- end cmd-headline -->

        <!-- begin view-code-data -->
        <ViewCodeData :code="code?.[codeExample()]" :isFirstComponent="codeExample() === 0" :data="data">
            <slot></slot>
        </ViewCodeData>
        <!-- end view-code-data -->

        <dl v-if="output !== undefined" class="vmodel box">
            <dt>v-model:</dt>
            <dd>
                <output>{{ output === "" ? "(empty string)" : output }}</output>
            </dd>
        </dl>
    </section>
</template>

<script>
// import components
import {CmdHeadline} from "comand-component-library"
import ViewCodeData from "./ViewCodeData.vue"

export default {
    name: "ExampleSectionWrapper",
    components: {
        CmdHeadline,
        ViewCodeData
    },
    props: {
        componentName: {
            type: String,
            required: true
        },
        headlineText: {
            type: String,
            required: true
        },
        code: {
            type: Array,
            required: false
        },
        data: {
            type: [Array, Object],
            required: false
        },
        sequence: {
            type: Number,
            required: true
        },
        output: {
            // do not define type to avoid trouble with bool-interpretation of undefined (in template)
            required: false
        }
    },
    methods: {
        getExampleId() {
            return "example" + this.sequence
        },
        getPreHeadlineText() {
            return "Example #" + this.sequence
        },
        codeExample() {
            return this.sequence - 1
        }
    }
}
</script>