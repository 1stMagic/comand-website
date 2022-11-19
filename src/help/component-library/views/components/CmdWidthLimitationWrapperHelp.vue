<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "../../../../utils/common"

// import components
import {CmdWidthLimitationWrapper} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdWidthLimitationWrapperHelp"
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdWidthLimitationWrapperPropertyDescriptions.json"
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdWidthLimitationWrapper"
                headlineText="Width Limitation Wrapper"
                preHeadlineText="1"
                :code="CmdCode"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdWidthLimitationWrapper :cmdHeadline="{headlineText: 'Headline given by property', headlineLevel: 5}">
                        <!-- begin slot-content -->
                        Content given by slot
                        <!-- end slot-content -->
                    </CmdWidthLimitationWrapper>
                </teleport>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdWidthLimitationWrapper.props" :propertyDescriptions="propertyDescriptions" />
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