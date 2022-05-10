<script setup>
// import functions
import {ref} from "vue"
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import {CmdFormFilters} from "comand-component-library"
import {CmdFakeSelect} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ViewCodeData from "../../components/ViewCodeData.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdFormFiltersHelp"
import fakeSelectFilterOptions from '../../assets/data/fake-select-filter-options.json'
import propertyDescriptions from "../../generated/CmdFormFiltersPropertyDescriptions.json"

// import composables
import {useSequence} from "comand-component-library"

const sequence = useSequence()

function getOptionName(option) {
    for (let i = 0; i < fakeSelectFilterOptions.length; i++) {
        if (option === fakeSelectFilterOptions[i].value) {
            return fakeSelectFilterOptions[i].text
        }
    }
    return null
}

const propertyStructures = {
    selectedOptions: [
        {
            "text": "<string>",
            "value": "<string>"
        }
    ]
}

const fakeSelectFilters = ref([])
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdFormFilters"
                headlineText="Form Filters"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdFormFilters
                        v-model="fakeSelectFilters"
                        :selectedOptionsName="getOptionName"
                    />
                    <CmdFakeSelect
                        labelText="CmdFakeSelect with filters:"
                        :selectData="fakeSelectFilterOptions"
                        v-model="fakeSelectFilters"
                        defaultOptionName="Filters:"
                        id="selectbox-with-filters"
                        type="checkboxOptions"
                        :useCustomTooltip="true"
                    />
                </teleport>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdFormFilters.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>