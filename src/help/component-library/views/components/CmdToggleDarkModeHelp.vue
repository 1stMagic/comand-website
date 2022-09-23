<script setup>
// import functions
import {ref} from "vue"
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import {CmdToggleDarkMode} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ViewCodeData from "../../components/ViewCodeData.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdToggleDarkModeHelp"
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdToggleDarkModePropertyDescriptions.json"

// import composables
import {useSequence} from "comand-component-library"

const sequence = useSequence()
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdToggleDarkMode"
                headlineText="Toggle Dark Mode (default styling)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdToggleDarkMode :showLabel="true" />
                </teleport>
            </ExampleSectionWrapper>
            <ExampleSectionWrapper
                componentName="CmdToggleDarkMode"
                headlineText="Toggle Dark Mode (special styling)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdToggleDarkMode :useStyledLayout="true" />
                </teleport>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdToggleDarkMode.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>