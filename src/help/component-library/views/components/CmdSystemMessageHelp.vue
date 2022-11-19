<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "../../../../utils/common"

// import components
import {CmdSystemMessage} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import {CmdHeadline} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdSystemMessageHelp"
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdSystemMessagePropertyDescriptions.json"

const propertyStructures = {
    iconMessage: {
        show: "<boolean>",
        iconClass: "<string>"
    },
    iconClose: {
        show: "<boolean>",
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
                componentName="CmdSystemMessage"
                headlineText="Error message (message given by property)"
                preHeadlineText="1"
                :code="CmdCode"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdSystemMessage
                        validationStatus="error"
                        :fullWidth="true"
                        systemMessage="This is an error message!">
                    </CmdSystemMessage>
                </teleport>
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdSystemMessage"
                headlineText="Warning message (message given by property and slot)"
                preHeadlineText="2"
                :code="CmdCode">
                <CmdSystemMessage
                    validationStatus="warning"
                    :fullWidth="true"
                    systemMessage="This is a warning message!">
                    <!-- begin slot-content -->
                    <p>This is additional text!</p>
                    <!-- end slot-content -->
                </CmdSystemMessage>
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdSystemMessage"
                headlineText="Success message (message given by property and slot)"
                preHeadlineText="3"
                :code="CmdCode">
                <CmdSystemMessage
                    validationStatus="success"
                    :fullWidth="true"
                    systemMessage="This is a success message!">
                    <!-- begin slot-content -->
                    <ul>
                        <li>Additional information #1</li>
                        <li>Additional information #2</li>
                        <li>Additional information #3</li>
                    </ul>
                    <!-- end slot-content -->
                </CmdSystemMessage>
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdSystemMessage"
                headlineText="Info message (message given by property)"
                preHeadlineText="4"
                :code="CmdCode">
                <CmdSystemMessage
                    validationStatus="info"
                    :fullWidth="true"
                    systemMessage="This is an info message!">
                </CmdSystemMessage>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdSystemMessage.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>