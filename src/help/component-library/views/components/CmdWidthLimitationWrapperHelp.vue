<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import {CmdWidthLimitationWrapper} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ViewCodeData from "../../components/ViewCodeData.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdWidthLimitationWrapperHelp"
import propertyDescriptions from "../../generated/CmdWidthLimitationWrapperPropertyDescriptions.json"
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ViewCodeData :isFirstComponent="true" :code="CmdCode[0]">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                <CmdWidthLimitationWrapper>
                    <!-- begin slot-content -->
                    Content
                    <!-- end slot-content -->
                </CmdWidthLimitationWrapper>
                </teleport>
            </ViewCodeData>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdWidthLimitationWrapper.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>

<style lang="scss">
.cmd-width-limitation-wrapper {
    border: var(--default-border);
    border-style: dotted;

    > section {
        border: inherit;
    }
}
</style>