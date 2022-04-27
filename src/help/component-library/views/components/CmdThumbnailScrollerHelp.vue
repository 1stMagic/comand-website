<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import {CmdThumbnailScroller} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ViewCodeData from "../../components/ViewCodeData.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdThumbnailScrollerHelp"
import thumbnailScroller from "../../assets/data/thumbnail-scroller.json"
import propertyDescriptions from "../../generated/CmdThumbnailScrollerPropertyDescriptions.json"

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
            <ViewCodeData :isFirstComponent="true" :code="CmdCode[0]" :data="thumbnailScroller">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdThumbnailScroller
                        :thumbnail-scroller-items="thumbnailScroller"
                    />
                </teleport>
            </ViewCodeData>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdThumbnailScroller.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>