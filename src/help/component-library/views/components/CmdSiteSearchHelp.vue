<script setup>
// import function
import {tabProps, tabHandlers} from "../../tabs"
import {ref} from "vue"
import {isFrameMode} from "../../../../utils/common"

// import components
import {CmdSiteSearch} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdSiteSearchHelp"
import listOfFilters from '../../assets/data/fake-select-filter-options.json'
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdSiteSearchPropertyDescriptions.json"

const searchValue1 = ref("")
const searchValue2 = ref("")
const radius = ref(0)
const searchFilters = ref([])

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
            <ExampleSectionWrapper
                componentName="CmdSiteSearch"
                headlineText="Site Search"
                preHeadlineText="1"
                :code="CmdCode"
                :isFirstComponent="true"
            >
                    <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                        <CmdSiteSearch
                            text-legend="Legend"
                            :results="420"
                            :listOfFilters="listOfFilters"
                            :cmdHeadline="{
                                headlineText: 'Search site',
                                headlineLevel: 5
                            }"
                            v-model:modelValueInput1="searchValue1"
                            v-model:modelValueInput2="searchValue2"
                            v-model:modelValueRadius="radius"
                            v-model:modelValueSearchFilters="searchFilters"
                        />
                    </teleport>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdSiteSearch.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures" />
        </template>
    </CmdTabs>
</template>