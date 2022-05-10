<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import {CmdShareButtons} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import {CmdCustomHeadline} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ViewCodeData from "../../components/ViewCodeData.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdShareButtonsHelp"
import shareButtonsJson from '../../assets/data/share-buttons-page-by-json.json'
import shareButtonsPage from '../../assets/data/share-buttons-page-by-property.json'
import propertyDescriptions from "../../generated/CmdShareButtonsPropertyDescriptions.json"

// import composables
import {useSequence} from "comand-component-library"

const sequence = useSequence()

const propertyStructures = {
    shareButtons: [
        {
            "id": "<string>",
            "path": "<string>",
            "tooltip": "<string>",
            "iconClass": "<string>",
            "linkText": "<string>"
        }
    ]
}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdShareButton"
                headlineText="Data given by json-file"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :data="shareButtonsJson"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdShareButtons
                        :append-page="false"
                        :share-buttons="shareButtonsJson"
                    />
                </teleport>
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdShareButton"
                headlineText="Page given by property"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :data="shareButtonsPage">
                <CmdShareButtons
                    page="some url"
                    :share-buttons="shareButtonsPage"
                />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdShareButton"
                headlineText="Page taken from browser"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :data="shareButtonsPage">
                <CmdShareButtons
                    :share-buttons="shareButtonsPage"
                />
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdShareButtons.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>