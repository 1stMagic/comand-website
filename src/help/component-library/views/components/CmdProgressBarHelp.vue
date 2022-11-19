<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "../../../../utils/common"

// import components
import {CmdProgressBar} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import {CmdHeadline} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdProgressBarHelp"
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdProgressBarPropertyDescriptions.json"
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdProgressBar"
                headlineText="Progress Bar (with output)"
                preHeadlineText="1"
                :code="CmdCode"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdProgressBar
                        labelText="Progress Bar with output:"
                        id="progress-bar"
                        max="100"
                    />
                </teleport>
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdProgressBar"
                headlineText="Progress Bar (without output)"
                preHeadlineText="2"
                :code="CmdCode">
                <CmdProgressBar
                    labelText="Progress Bar without output:"
                    id="progress-bar"
                    max="100"
                    :showLoadingStatus="false"
                />
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdProgressBar.props" :propertyDescriptions="propertyDescriptions"/>
        </template>
    </CmdTabs>
</template>