<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "../../../../utils/common"

// import components
import {CmdImageZoom} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdImageZoomHelp"
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdImageZoomPropertyDescriptions.json"
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdImageZoom"
                headlineText="Image Zoom"
                preHeadlineText="1"
                :code="CmdCode"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdImageZoom
                        small-image-url="/media/images/content-images/landscape-small.jpg"
                        large-image-url="/media/images/content-images/landscape-large.jpg"
                    />
                </teleport>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdImageZoom.props" :propertyDescriptions="propertyDescriptions" />
        </template>
    </CmdTabs>
</template>