<script setup>
import {defineProps, ref, computed} from "vue"
import {isFrameMode} from "../../../utils/common"
import ComponentCode from "./ComponentCode.vue"
import {CmdBox} from "comand-component-library"

defineProps({
    code: {
        type: String,
        required: false
    },
    data: {
        type: [String, Object, Array],
        required: false
    },
    isFirstComponent: {
        type: Boolean,
        default: false
    }
})

const responsiveWidth = ref("0px")
const frameUrl = new URL(location)
const showFrame = computed(() => !isFrameMode() && responsiveWidth.value !== "0px")

frameUrl.searchParams.set("frameMode", "true")

function changeWidth(width) {
    responsiveWidth.value = width + "px"
}
</script>

<template>
    <div class="flex-container vertical">
        <div>
            <header class="flex-container" id="switch-device-view">
                <h4>View</h4>
                <ul v-if="isFirstComponent" class="flex-container">
                    <li>
                        Toggle width:
                    </li>
                    <li>
                        <a :class="['icon-device-smartphone', {'active': responsiveWidth === '600px'}]" href="#" @click.prevent="changeWidth(600)" title="Change view to smartphone (0-600px)"></a>
                    </li>
                    <li>
                        <a :class="['icon-device-tablet', {'active': responsiveWidth === '1023px'}]" href="#" @click.prevent="changeWidth(1023)" title="Change view to tablet (601px-1023px)"></a>
                    </li>
                    <li>
                        <a :class="['icon-device-laptop', {'active': responsiveWidth === '1280px'}]" href="#" @click.prevent="changeWidth(1280)" title="Change view to laptop (1024px-1280px)"></a>
                    </li>
                    <li>
                        <a :class="['icon-device-desktop', {'active': responsiveWidth === '0px'}]" href="#" @click.prevent="changeWidth(0)" title="Change view to desktop (1281px+)"></a>
                    </li>
                </ul>
            </header>
            <div v-if="showFrame" id="responsive-view-wrapper" :style="{width: responsiveWidth}">
                <iframe :src="frameUrl.href" id="responsive-view" :style="{width: responsiveWidth}"></iframe>
            </div>
            <slot v-if="!showFrame"></slot>
        </div>
        <div v-if="!isFrameMode()" class="flex-container">
            <div v-if="code">
                <CmdBox :useSlots="['body']" :collapsible="true" :collapsingBoxesOpen="true" :cmdHeadline="{headlineText: 'Code', headlineLevel: 4}" :stretchVertically="false">
                    <template v-slot:body>
                        <ComponentCode :code="code"/>
                    </template>
                </CmdBox>
            </div>
            <div v-if="data">
                <CmdBox :useSlots="['body']" :collapsible="true" :collapsingBoxesOpen="true" :cmdHeadline="{headlineText: 'Data', headlineLevel: 4}">
                    <template v-slot:body>
                        <ComponentCode :code="data" language="json"/>
                    </template>
                </CmdBox>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
#responsive-view-wrapper {
    resize: vertical;
    overflow: hidden;
    display: flex;

    #responsive-view {
        flex-grow: 1;
        border: .1rem dotted var(--text-color);
    }
}

#switch-device-view {
    justify-content: space-between;

    > * {
        flex: none;
    }

    ul {
        align-items: center;

        li {
            list-style-type: none;
            margin: 0;

            &:first-child {
                white-space: nowrap;
            }
        }
    }
}

.vmodel {
    margin-top: var(--default-margin);
    border-style: dashed;
    background: var(--warning-color);
    display: inline-flex;
}

</style>