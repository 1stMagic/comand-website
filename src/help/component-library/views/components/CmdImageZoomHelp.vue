<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import CmdImageZoom from "../../../components/CmdImageZoom"
import ComponentProperties from "../../components/ComponentProperties.vue"
import ViewCodeData from "../../components/ViewCodeData.vue"
import {CmdTabs} from "comand-component-library"

// import example-data
import CmdCode from "../../data/CmdImageZoomHelp"
import propertyDescriptions from "../../generated/CmdImageZoomPropertyDescriptions.json"
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ViewCodeData :isFirstComponent="true" :code="CmdCode[0]">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdImageZoom
                        small-image-url="media/images/content-images/logo-business-edition-landscape.jpg"
                        large-image-url="media/images/content-images/logo-business-edition-landscape-large.jpg"
                    />
                </teleport>
            </ViewCodeData>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdImageZoom.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>