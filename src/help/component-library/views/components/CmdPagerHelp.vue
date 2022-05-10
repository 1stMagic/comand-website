<script setup>
// import functions
import {ref} from "vue"
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import {CmdPager} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ViewCodeData from "../../components/ViewCodeData.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdPagerHelp"
import propertyDescriptions from "../../generated/CmdPagerPropertyDescriptions.json"

// import composables
import {useSequence} from "comand-component-library"

const sequence = useSequence()

const propertyStructures = {
    prevButton: {
        iconClass: "<string>",
        buttonText: "<string>"
    },
    nextButton: {
        iconClass: "<string>",
        buttonText: "<string>"
    }
}

const showPagePager = ref(1)
const totalNumberOfPages = 4

function changePage(event) {
    showPagePager.value = event
}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdPager"
                headlineText="Pager"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <p>
                        Content: {{ showPagePager }} of {{ totalNumberOfPages }}
                    </p>
                    <CmdPager
                        :items="totalNumberOfPages"
                        :itemsPerPage="1"
                        @click="changePage"
                    />
                </teleport>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdPager.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>