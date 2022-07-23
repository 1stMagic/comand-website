<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import {CmdSlideshow} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ViewCodeData from "../../components/ViewCodeData.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdSlideshowHelp"
import slideshow from "../../assets/data/slideshow.json"
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdSlideshowPropertyDescriptions.json"

// import composables
import {useSequence} from "comand-component-library"

const sequence = useSequence()

const propertyStructures = {
    slideshowItems: [{
        "images": [
            {
                "maxWidth": "<number>",
                "imgPath": "<string>"
            },
            {
                "imgPath": "<string>",
                "maxWidth": "<number>"
            },
            {
                "imgPath": "<string>"
            }
        ],
        "alt": "<string>",
        "href": "<string>",
        "title": "<string>",
        "target": "<string>",
        "figcaption": "<string>"
    }
    ]
}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdSlideshow"
                headlineText="Slideshow"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :data="slideshow"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdSlideshow
                        :slideshow-items="slideshow"
                        :showCounter="true"
                        :autoplay="true"
                    />
                </teleport>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdSlideshow.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>