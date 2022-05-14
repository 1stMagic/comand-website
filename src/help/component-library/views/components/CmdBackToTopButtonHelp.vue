<script setup>
// import functions
import {ref, onMounted} from "vue"
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import {CmdBackToTopButton} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdBackToTopButtonHelp"
import propertyDescriptions from "../../generated/CmdBackToTopButtonPropertyDescriptions.json"

// import composables
import {useSequence} from "comand-component-library"

const sequence = useSequence()

const propertyStructures = {
    iconBackToTop: {
        "iconBackToTop": {
            "iconClass": "<string>",
            "tooltip": "<number>"
        }
    }
}

const backToTop = ref(null)
onMounted(() => {
    backToTop.value.windowScrollY = 1
    backToTop.value.windowInnerHeight = 0
    backToTop.value.bodyScrollHeight = 1
    window.removeEventListener('resize', backToTop.value.onViewportChange);
    window.removeEventListener('scroll', backToTop.value.onViewportChange);
})
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdBackToTopButton"
                headlineText="Back-to-top-button"
                :isFirstComponent="true"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode">
                    <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                        <CmdBackToTopButton id="view-component" ref="backToTop" />
                    </teleport>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdBackToTopButton.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures" />
        </template>
    </CmdTabs>
</template>

<style lang="scss">
#view-component {
    position: relative;
    bottom: auto;
    left: 0;
    right: auto;
}
</style>