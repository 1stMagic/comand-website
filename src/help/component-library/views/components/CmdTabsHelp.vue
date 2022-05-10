<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import {CmdTabs} from "comand-component-library"
import {CmdCustomHeadline} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ViewCodeData from "../../components/ViewCodeData.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdTabsHelp"
import tabs from "../../assets/data/tabs.json"
import propertyDescriptions from "../../generated/CmdTabsPropertyDescriptions.json"

// import composables
import {useSequence} from "comand-component-library"

const sequence = useSequence()

const propertyStructures = {
    tabs: [
        {
            "name": "<string>",
            "headline": "<string>",
            "htmlContent": "<string>"
        }
    ]
}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdTabs"
                headlineText="Tabs (not stretched)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :data="tabs"
                :isFirstComponent="true">
                    <CmdTabs
                        :stretchTabs="false"
                        :tabs="tabs"
                    />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdTabs"
                headlineText="Tabs (stretched)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :data="tabs">
                    <CmdTabs
                        :stretchTabs="true"
                        :tabs="tabs"
                    />
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdTabs.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>