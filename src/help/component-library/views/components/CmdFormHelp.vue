<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "../../../../utils/common"

// import components
import {CmdForm} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdFormHelp"
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdFormPropertyDescriptions.json"

</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdForm"
                headlineText="Form"
                preHeadlineText="1"
                :code="CmdCode"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdForm
                        :use-fieldset="true"
                        novalidate="novalidate"
                        text-legend="Legend">
                        <!-- begin slot-content -->
                        Form content (put form elements here)
                        <!-- end slot-content -->
                    </CmdForm>
                </teleport>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdForm.props" :propertyDescriptions="propertyDescriptions"/>
        </template>
    </CmdTabs>
</template>