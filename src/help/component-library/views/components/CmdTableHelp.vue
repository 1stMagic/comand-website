<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import {CmdTable} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import {CmdHeadline} from "comand-component-library"
import {CmdWidthLimitationWrapper} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ViewCodeData from "../../components/ViewCodeData.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdTableHelp"
import tableSmall from "../../assets/data/table-small.json"
import tableLarge from "../../assets/data/table-large.json"
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdTablePropertyDescriptions.json"

// import composables
import {useSequence} from "comand-component-library"

const sequence = useSequence()

const propertyStructures = {
    tableData: {
        "caption": {
            "hide": "<boolean>",
            "text": "<string>"
        },
        "thead": "<array>",
        "tbody": [
            "<array>"
        ],
        "tfoot": "<array>"
    },
    fullWidthOnDefault: {
        show: "<boolean>",
        iconClass: "<string>"
    },
    iconExpand: {
        iconClass: "<string>",
        tooltip: "<string>"
    },
    iconCollapse: {
        iconClass: "<string>",
        tooltip: "<string>"
    },
    iconShrink: {
        iconClass: "<string>",
        tooltip: "<string>"
    },
    iconStretch: {
        iconClass: "<string>",
        tooltip: "<string>"
    }
}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdTable"
                headlineText="Table (with few data)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :data="tableSmall"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdTable
                        :collapsible="true"
                        :fullWidthOnDefault="false"
                        :userCanToggleWidth="true"
                        :table-data="tableSmall"
                    />
                </teleport>
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdTable"
                headlineText="Table (with lots of data and highlighted row and column)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :data="tableLarge">
                <div id="width-limitation-wrapper">
                    <CmdTable
                        :collapsible="false"
                        :fullWidthOnDefault="false"
                        :userCanToggleWidth="true"
                        :table-data="tableLarge"
                    />
                </div>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdTable.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>

<style lang="scss">
#width-limitation-wrapper {
    max-width: var(--max-width);
    overflow: auto;
}
</style>