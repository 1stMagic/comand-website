<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "../../../../utils/common"

// import components
import {CmdHeadline} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdHeadlineHelp"
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdHeadlinePropertyDescriptions.json"
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdHeadline"
                headlineText="Headline level 1 (without icon and pre-headline)"
                preHeadlineText="1"
                :code="CmdCode"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdHeadline
                        headlineText="Headline text"
                        :headlineLevel="1"
                    />
                </teleport>
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdHeadline"
                headlineText="Headline level 1 "
                preHeadlineText="2"
                :code="CmdCode"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdHeadline
                        headlineText="Headline text (with icon and pre-headline)"
                        :headlineLevel="1"
                        preHeadlineText="Pre-headline text"
                        iconClass="icon-user-profile"
                    />
                </teleport>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdHeadline.props" :propertyDescriptions="propertyDescriptions" />
        </template>
    </CmdTabs>
</template>