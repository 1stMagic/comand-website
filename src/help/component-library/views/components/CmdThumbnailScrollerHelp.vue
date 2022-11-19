<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "../../../../utils/common"

// import components
import {CmdThumbnailScroller} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdThumbnailScrollerHelp"
import thumbnailScroller from "../../assets/data/thumbnail-scroller.json"
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdThumbnailScrollerPropertyDescriptions.json"

const propertyStructures = {
    thumbnailScrollerItems: [
        {
            "imgId": "<number>",
            "srcImageSmall": "<string>",
            "srcImageLarge": "<string>",
            "alt": "<string>",
            "figcaption": "<string>"
        }
    ],
    figcaption: {
        show: "<boolean>",
        position: "<string>"
    }
}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdThumbnailScroller"
                headlineText="Thumbnail Scroller"
                preHeadlineText="1"
                :code="CmdCode"
                :data="thumbnailScroller"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdThumbnailScroller
                        :thumbnail-scroller-items="thumbnailScroller"
                    />
                </teleport>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdThumbnailScroller.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>