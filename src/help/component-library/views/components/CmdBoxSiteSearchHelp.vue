<script setup>
// import function
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import {CmdBoxSiteSearch} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ViewCodeData from "../../components/ViewCodeData.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdBoxSiteSearchHelp"
import listOfFilters from '../../assets/data/fake-select-filter-options.json'
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdBoxSiteSearchPropertyDescriptions.json"

// import composables
import {useSequence} from "comand-component-library"

const sequence = useSequence()

const propertyStructures = {
    cmdHeadline: {
        "address": {
            "streetNo": "<string>",
            "zip": "<number>",
            "city": "<string>"
        },
        "telephone": "<string>",
        "mobilephone": "<string>",
        "fax": "<string>",
        "email": "<string>"
    },
    results: "-",
    showLegend: "-",
    textLegend: "-"
}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper componentName="CmdBoxSiteSearch" headlineText="Box Site Search" :sequence="sequence.nextSequenceValue()" :code="CmdCode" :isFirstComponent="true">
                    <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                        <CmdBoxSiteSearch
                            text-legend="Legend"
                            :results="420"
                            :listOfFilters="listOfFilters"
                            :cmdHeadline="{
                                headlineText: 'Search site',
                                headlineLevel: 5
                            }"
                        />
                    </teleport>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdBoxSiteSearch.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures" />
        </template>
    </CmdTabs>
</template>