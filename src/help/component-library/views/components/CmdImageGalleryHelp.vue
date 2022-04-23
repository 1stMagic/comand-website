<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import CmdImageGallery from "../../../components/CmdImageGallery"
import ComponentProperties from "../../components/ComponentProperties.vue"
import ViewCodeData from "../../components/ViewCodeData.vue"
import {CmdTabs} from "comand-component-library"

// import example-data
import CmdCode from "../../data/CmdImageGalleryHelp"
import imageGallery from '../../../assets/data/image-gallery.json'
import propertyDescriptions from "../../generated/CmdImageGalleryPropertyDescriptions.json"

const propertyStructures = {
    images: [
        {
            "imgId": "<number>",
            "srcImageSmall": "<string>",
            "srcImageLarge": "<string>",
            "alt": "<string>",
            "figcaption": "<string>"
        }
    ]
}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ViewCodeData :isFirstComponent="true" :code="CmdCode[0]" :data="imageGallery">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdImageGallery
                        :images="imageGallery"
                    />
                </teleport>
            </ViewCodeData>>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdImageGallery.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>